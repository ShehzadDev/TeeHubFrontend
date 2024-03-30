import React, { useState } from "react";
import Heading from "../Heading";
import { FaFileImage } from "react-icons/fa";
import { storage } from "../../firebse"; // Import Firebase storage instance
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ImageUpload = ({ onSave, onDiscard }) => {
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    // Check file format
    if (selectedFile && !selectedFile.type.startsWith("image/")) {
      setError("Please select an image file.");
      setFile(null);
      return;
    }
    // Check file size
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (selectedFile && selectedFile.size > maxSize) {
      setError("File size exceeds the limit of 5 MB.");
      setFile(null);
      return;
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleDiscard = () => {
    setFile(null);
    setError(null);
    onDiscard();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        setError("An error occurred while uploading the image.");
        console.error("Error uploading image:", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            setImgUrl(downloadURL);
            onSave(downloadURL);
          })
          .catch((error) => {
            setError("An error occurred while retrieving the image URL.");
            console.error("Error retrieving image URL:", error);
          });
      }
    );
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-4">
        <Heading className="text-center" text="Upload Image" />
        {error && <p className="text-red-500">{error}</p>}
        <p className="mb-4">
          Select an image file (.jpg, .jpeg, .png) with a maximum size of 5 MB.
        </p>
        {/* File input */}
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <input
              id="file-upload"
              type="file"
              onChange={handleChange}
              className="hidden"
              accept="image/jpeg, image/png"
            />
            <FaFileImage className="mr-2" /> Upload Image
          </label>
          {file && (
            <p className="text-sm text-gray-600">Selected file: {file.name}</p>
          )}

          {/* Progress */}
          {progressPercent > 0 && (
            <p className="text-sm text-gray-600">
              Uploading... {progressPercent}%
            </p>
          )}

          {/* Discard and Save buttons */}
          <div>
            <button
              type="button"
              onClick={handleDiscard}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={!file}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                !file ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;
