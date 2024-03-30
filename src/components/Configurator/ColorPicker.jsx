import React, { useState } from "react";
import Heading from "../Heading";

const ColorPicker = ({ initialColor, onSave, onDiscard }) => {
  const [color, setColor] = useState(initialColor);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDiscard = () => {
    setColor(initialColor);
    onDiscard(initialColor);
  };

  const handleSave = () => {
    onSave(color);
  };

  // Default colors
  const defaultColors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

  return (
    <div className="container">
      <div className="flex flex-col">
        <Heading className="text-center" text="Choose Product Color" />
        <p className="mb-4">Select your favorite color or choose default</p>
      </div>

      {/* Default color options */}
      <div className="flex justify-center items-center mb-4">
        {defaultColors.map((defaultColor, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-full border border-gray-400 mx-2 focus:outline-none"
            style={{ backgroundColor: defaultColor }}
            onClick={() => setColor(defaultColor)}
          />
        ))}
      </div>

      {/* Color picker UI */}
      <div className="flex justify-center items-center mb-4">
        <label htmlFor="color" className="mr-2">
          Choose:
        </label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={handleColorChange}
          className="w-10 h-10 border border-gray-400 focus:outline-none"
        />
      </div>

      {/* Discard, Save, and Reset buttons */}
      <div className="flex justify-center items-center">
        <button
          onClick={handleDiscard}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Discard
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
