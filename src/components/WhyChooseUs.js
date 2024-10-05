import React, { useState } from "react";
import "./StrategicAlliances.css";

const logos = [
  "public/WWS/logo1.png",
  "public/WWS/logo2.png",
  "public/WWS/logo3.png",
  "public/WWS/logo4.png",
  "public/WWS/logo5.png",
  "public/WWS/logo6.png",
  // Add more logos as needed
];

function StrategicAlliances() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + logos.length) % logos.length
    );
  };

  const displayedLogos = logos.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slider-container">
      <button className="nav-button" onClick={prevSlide}>
        ◀
      </button>
      <div className="logos">
        {displayedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo"
          />
        ))}
      </div>
      <button className="nav-button" onClick={nextSlide}>
        ▶
      </button>
    </div>
  );
}

export default StrategicAlliances;
