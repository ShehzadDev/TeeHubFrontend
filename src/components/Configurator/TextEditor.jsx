import React, { useState } from "react";
import Heading from "../Heading";
import { state, setTextState } from "../../state";

const TextEditor = ({ initialText, onSave, onDiscard }) => {
  const [text, setText] = useState(initialText);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setTextState(e.target.value);
  };

  const handleDiscard = () => {
    setText(initialText);
    onDiscard(); // Call onDiscard prop
  };

  const handleSave = (e) => {
    onSave(text); // Call onSave prop with updated text
    setText(text); // Update valtio state
  };

  return (
    <div className="container max-w-md mx-auto p-4">
      <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md">
        <Heading className="text-center" text="Text Editor" />
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Enter your text here..."
        />
        <div className="flex space-x-2">
          <button
            onClick={handleDiscard}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Discard
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
