import React from "react";
import "../App.css";

import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Politique 360</h1>
      <p>Deviens le héro des électiosn!</p>
    </div>
  );
}
/**  
 * import { Button } from "./Button";
 *  <Button
className="btns"
buttonStyle="btn--primary"
buttonSize="btn--large"
onClick={console.log("hey")}
>
Voir la démo <i className="far fa-play-circle" />
</Button>*/
export default HeroSection;
