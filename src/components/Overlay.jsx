import React from "react";
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
import Heading from "../components/Heading";
import { FaPalette, FaImage, FaFont } from "react-icons/fa";

function Overlay() {
  const snap = useSnapshot(state);

  const handleOptionClick = (option) => {
    state.activeOption = option;
  };

  const handleImageUpload = (imageUrl) => {
    setUploadedImageUrl(imageUrl);
  };

  const handleTextChange = (newText) => {
    setTextState(newText); // Update text in valtio state (state.text
  };

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleDiscard = () => {
    // Handle discard action
  };

  const handleSave = (color) => {
    // Handle save action
  };

  const renderActiveComponent = () => {
    switch (snap.activeOption) {
      case "color":
        return (
          <ColorPicker
            color={snap.backgroundColor}
            setColor={handleColorChange}
            onDiscard={handleDiscard}
            onSave={handleSave}
            discardDisabled={false} // Enable discard button
            saveDisabled={false} // Enable save button
          />
        );
      case "image":
        return (
          <ImageUpload onSave={handleImageUpload} onDiscard={handleDiscard} />
        );
      case "text":
        return (
          <TextEditor
            initialText={""}
            setTextState={handleTextChange} // Pass the function to update text
            onSave={handleSave}
            onDiscard={handleDiscard}
          />
        );
      default:
        return null;
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
          {snap.activeOption ? (
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
