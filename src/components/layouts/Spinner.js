import React from "react";
import "../../App.css";

const Spinner = () => {
  return (
    <div className="spnner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
