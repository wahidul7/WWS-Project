import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Integrated Technology Solutions</h1>
      <p>
        Our tech team is committed to providing high-quality personalized IT
        consulting services to meet our client’s requirements.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
