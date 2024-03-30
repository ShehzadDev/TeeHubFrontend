import React, { useState } from "react";
import CanvasComponent from "./CanvasComponent";
import ColorPicker from "../components/Configurator/ColorPicker";
import ImageUpload from "../components/Configurator/ImageUpload";
import TextEditor from "../components/Configurator/TextEditor";
import Heading from "../components/Heading";
import { FaPalette, FaImage, FaFont } from "react-icons/fa";

function Overlay() {
  const [color, setColor] = useState("#ff0000");
  const [text, setText] = useState("Hello, World!");
  const [imageURL, setImageURL] = useState("");
  const [activeOption, setActiveOption] = useState(""); // State to track active option
  const buttonStyle =
    "border-2 font-bold py-2 px-4 rounded hover:bg-slate-500 hover:text-white rounded-lg";

  // Function to handle option click
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  // Function to handle image upload
  const handleImageUpload = (file) => {
    // Your implementation for image upload
  };

  // Function to handle text change
  const handleTextChange = (newText) => {
    setText(newText);
  };

  // Render the active component based on selected option
  const renderActiveComponent = () => {
    switch (activeOption) {
      case "color":
        return <ColorPicker color={color} setColor={setColor} />;
      case "image":
        return <ImageUpload handleImageUpload={handleImageUpload} />;
      case "text":
        return <TextEditor text={text} setText={handleTextChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-3 px-20">
      {/* Render Canvas component with props */}
      <div className="col-span-2">
        <CanvasComponent color={color} text={text} imageURL={imageURL} />
      </div>

      {/* Render active component or options */}
      <div className="col-span-1 flex justify-center items-center bg-[#f0f0f0]">
        <div className="flex flex-col justify-center items-center h-full">
          {activeOption ? (
            <div className="border-2 px-6 py-4 sm:px-10 sm:py-5 rounded-lg bg-white shadow-xl">
              {renderActiveComponent()}
            </div>
          ) : (
            <div className="border-2 px-6 py-4 sm:px-10 sm:py-5 rounded-lg bg-white">
              <Heading className="text-center" text="Create your Design" />
              <p className="">Get started by choosing the options below</p>
              <div className="grid gap-3 mt-4 sm:mt-6">
                <button
                  onClick={() => handleOptionClick("color")}
                  className={`${buttonStyle} flex items-center`}
                >
                  <FaPalette className="mr-2" />
                  Choose Color
                </button>
                <button
                  onClick={() => handleOptionClick("image")}
                  className={`${buttonStyle} flex items-center`}
                >
                  <FaImage className="mr-2" />
                  Upload Image
                </button>
                <button
                  onClick={() => handleOptionClick("text")}
                  className={`${buttonStyle} flex items-center`}
                >
                  <FaFont className="mr-2" />
                  Add Text
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
