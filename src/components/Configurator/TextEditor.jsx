import React, { useState } from "react";
import Heading from "../Heading";

const TextEditor = ({ initialText, onSave, onDiscard }) => {
  const [text, setText] = useState(initialText);
  const [originalText, setOriginalText] = useState(initialText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDiscard = () => {
    setText(originalText);
    onDiscard(); // Call onDiscard prop
  };

  const handleSave = () => {
    onSave(text); // Call onSave prop with updated text
    setOriginalText(text);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-4">
        <Heading className="text-center" text="Text Editor" />
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Enter your text here..."
        />
        <div>
          <button
            onClick={handleDiscard}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
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
