import React from "react";

const OutlineBtn = ({text,className,icon}) => {
  return (
    <div className={`px-5 py-3 rounded-full border border-gay-300 flex items-center justify-center ${className}`}>
      {icon} {text}
    </div>
  );
};

export default OutlineBtn;
