import React from "react";
import "./DotsLoader.css";

function DotsLoader({ message = "Processing your order..." }) {
  return (
    <div className="dots-loader-container">
      <div className="dots-loader-text">{message}</div>
      <div className="dots-loader-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </div>
  );
}

export default DotsLoader;
