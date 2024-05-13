import React, { useState } from "react";
import Heading from "../Heading";
import { useProxy, setBackgroundColor } from "../../state";

const ColorPicker = ({ initialColor, onSave, onDiscard }) => {
  const [color, setColor] = useState(initialColor);
  const state = useProxy();

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setBackgroundColor(newColor);
  };

  const handleDiscard = () => {
    setColor(initialColor);
    onDiscard(initialColor);
  };

  const handleSave = () => {
    onSave(color);
  };

  const defaultColors = [
    "#ff0000", // red
    "#ff6600", // orange
    "#ffff00", // yellow
    "#00ff00", // lime
    "#00ffff", // cyan
    "#0000ff", // blue
    "#9900ff", // purple
    "#ff00ff", // fuchsia
    "#800000", // maroon
    "#808000", // olive
  ];

  return (
    <div className="container">
      <div className="flex flex-col">
        <Heading className="text-center" text="Choose Product Color" />
        <p className="mb-4">Select your favorite color or choose default</p>
      </div>

      <div className="flex flex-grow justify-center items-center mb-4">
        {defaultColors.map((defaultColor, index) => (
          <button
            key={index}
            className="h-5 w-5 rounded-full border border-gray-400 mx-2 focus:outline-none"
            style={{ backgroundColor: defaultColor }}
            onClick={() => handleColorChange(defaultColor)} // Pass the color directly to handleColorChange
          />
        ))}
      </div>

      <div className="flex justify-center items-center mb-4">
        <label htmlFor="color" className="mr-2">
          Choose:
        </label>
        <input
          id="color"
          type="color"
          value={color} // Make sure color input value is controlled by state
          onChange={(e) => handleColorChange(e.target.value)} // Pass the selected color to handleColorChange
          className="w-10 h-10 border-gray-400 focus:outline-none"
        />
      </div>

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
