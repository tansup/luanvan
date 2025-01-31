import React from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import "../../pages/User.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/public/videos/video-2.mp4" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
