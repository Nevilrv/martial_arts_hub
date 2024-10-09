import React from "react";
import "../../App.css";

const Spinner = () => {
  return (
    <div className="spnner">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
