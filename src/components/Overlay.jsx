import React, { useState } from "react";
import { useSnapshot } from "valtio";
import {
  state,
  setBackgroundColor,
  setTextState,
  setUploadedImageUrl,
} from "../state";
import CanvasComponent from "./CanvasComponent";
import ColorPicker from "../components/Configurator/ColorPicker";
import ImageUpload from "../components/Configurator/ImageUpload";
import TextEditor from "../components/Configurator/TextEditor";
import SizeSelector from "../components/Configurator/SizeSelector";
import Heading from "../components/Heading";
import { FaPalette, FaImage, FaFont, FaTshirt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Overlay() {
  const snap = useSnapshot(state);
  const [activeStep, setActiveStep] = useState("initial");

  const handleOptionClick = (option) => {
    setActiveStep(option);
    toast.info(`Selected option: ${option}`);
  };

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
    toast.success("Image uploaded successfully!");
    setActiveStep("text");
  };

  const handleTextChange = (newText) => {
    setTextState(newText); // Update text in valtio state (state.text)
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
    toast.success("Color changed successfully!");
    setActiveStep("image");
  };

  const handleDiscard = () => {
    switch (activeStep) {
      case "color":
        setBackgroundColor("#ffffff");
        setActiveStep("initial");
        break;
      case "image":
        setUploadedImageUrl("");
        setActiveStep("color");
        break;
      case "text":
        setTextState("");
        setActiveStep("image");
        break;
      case "size":
        setActiveStep("text");
        break;
      default:
        setActiveStep("initial");
        break;
    }
    toast.warn("Changes discarded.");
  };

  const handleSave = () => {
    toast.success("Changes saved successfully!");
    switch (activeStep) {
      case "color":
        setActiveStep("image");
        break;
      case "image":
        setActiveStep("text");
        break;
      case "text":
        setActiveStep("size");
        break;
      case "size":
        setActiveStep("initial");
        break;
      default:
        setActiveStep("initial");
        break;
    }
  };

  const handleAddToCart = (data) => {
    toast.success("Added to cart!");
  };

  const renderActiveComponent = () => {
    switch (activeStep) {
      case "color":
        return (
          <ColorPicker
            color={snap.backgroundColor}
            setColor={handleColorChange}
            onDiscard={handleDiscard}
            onSave={handleSave}
            discardDisabled={false}
            saveDisabled={false}
          />
        );
      case "image":
        return (
          <ImageUpload onSave={handleImageUpload} onDiscard={handleDiscard} />
        );
      case "text":
        return (
          <TextEditor
            initialText={snap.text || ""}
            setTextState={handleTextChange}
            onSave={handleSave}
            onDiscard={handleDiscard}
          />
        );
      case "size":
        return (
          <SizeSelector
            onAddToCart={handleAddToCart}
            onDiscard={handleDiscard}
          />
        );
      default:
        return (
          <div className="border-2 px-6 py-4 sm:px-10 sm:py-5 rounded-lg bg-white">
            <Heading className="text-center" text="Create your Design" />
            <p className="">Get started by choosing the options below</p>
            <div className="grid gap-3 mt-4 sm:mt-6">
              <button
                onClick={() => handleOptionClick("color")}
                className="border-2 font-bold py-2 px-4 hover:bg-slate-500 hover:text-white rounded-lg flex items-center"
              >
                <FaPalette className="mr-2" />
                Choose Color
              </button>
              <button
                onClick={() => handleOptionClick("image")}
                className="border-2 font-bold py-2 px-4 hover:bg-slate-500 hover:text-white rounded-lg flex items-center"
              >
                <FaImage className="mr-2" />
                Upload Image
              </button>
              <button
                onClick={() => handleOptionClick("text")}
                className="border-2 font-bold py-2 px-4 hover:bg-slate-500 hover:text-white rounded-lg flex items-center"
              >
                <FaFont className="mr-2" />
                Add Text
              </button>
              <button
                onClick={() => handleOptionClick("size")}
                className="border-2 font-bold py-2 px-4 hover:bg-slate-500 hover:text-white rounded-lg flex items-center"
              >
                <FaTshirt className="mr-2" />
                Select Size
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="grid grid-cols-3 px-20">
      <div className="col-span-2">
        <CanvasComponent
          color={snap.backgroundColor}
          text={snap.text}
          imageURL={snap.uploadedImageUrl}
        />
      </div>

      <div className="col-span-1 flex justify-center items-center bg-[#f0f0f0]">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="border-2 px-6 py-4 sm:px-10 sm:py-5 rounded-lg bg-white shadow-xl">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Overlay;
