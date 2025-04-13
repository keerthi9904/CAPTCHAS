import React, { useState, useEffect } from "react";
import "./DotsLoader.css";
import Recaptcha from "./captchas/Recaptcha";

function DotsLoader({ message = "Processing your order...", onVerified }) {
  const [isVerified, setIsVerified] = useState(false);  // State to track CAPTCHA verification

  // The dots will keep moving until CAPTCHA is verified
  useEffect(() => {
    if (isVerified) {
      const timer = setTimeout(() => {
        onVerified(); // Proceed after user clicks the CAPTCHA checkbox
      }, 500); // Optional delay after verification (2 seconds)
      return () => clearTimeout(timer);
    }
  }, [isVerified, onVerified]);

  return (
    <div className="dots-loader-container">
      <div className="dots-loader-text">{message}</div>
      <div className={`dots-loader-dots ${isVerified ? "stopped" : ""}`}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <div className="recaptcha">
        <Recaptcha onSuccess={() => setIsVerified(true)} />
      </div>
    </div>
  );
}

export default DotsLoader;
