import React from "react";

function Link({ href, text, isStyled, isCurrent }) {
  return (
    <a
      href={href}
      className={`mr-4 ${
        isStyled
          ? "rounded-full text-white hover:opacity-90 bg-purple-500 flex-shrink-0 flex justify-center items-center py-1 px-4"
          : "text-blue-500 py-1" && isCurrent
          ? "font-bold text-purple-500 py-1"
          : "text-blue-500 py-1"
      }`}
    >
      {text}
    </a>
  );
}

export default Link;
