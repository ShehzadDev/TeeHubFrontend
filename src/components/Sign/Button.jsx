import React from "react";

const Button = ({ text, onClick, styleClass }) => {
  return (
    <button className={`py-2 px-4 rounded ${styleClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
