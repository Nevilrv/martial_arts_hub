import React from "react";

const OutlineBtn = ({ text, className, icon, endicon, onClick, id }) => {
  return (
    <button id={id} className={`px-5 py-3 rounded-full border border-gay-300 flex items-center justify-center ${className}`} onClick={onClick}>
      {icon} {text}  {endicon}
    </button>
  );
};

export default OutlineBtn;
