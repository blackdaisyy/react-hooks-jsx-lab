// src/components/About.js
import React from "react";
import { image } from "../data/data.js";

function About() {
  return (
    <div id="about" data-testid="about">
      <h2>About Me</h2>
      <p>I enjoy solving real-world problems with code and continuous learning.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
