import React, { useEffect, useState } from "react";
import "./ScarcitySidebar.css";

const scarcityImages = [
  "/images/limited1.jpg",
  "/images/limited2.jpg",
  "/images/limited3.jpg"
];

function ScarcitySidebar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scarcityImages.length);
    }, 5000); // switch image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="scarcity-sidebar">
      <h3>🔥 Hurry, Selling Fast!</h3>
      <img
        src={scarcityImages[currentIndex]}
        alt="Limited stock"
        className="scarcity-image"
      />
      <p className="scarcity-text">Only a few left in stock!</p>
    </div>
  );
}

export default ScarcitySidebar;
