import React from "react";

const TextInput = ({ label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>
  );
};

export default TextInput;
