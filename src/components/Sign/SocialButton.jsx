import React from "react";

const SocialButton = ({ text, icon }) => {
  return (
    <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded mb-2">
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default SocialButton;
