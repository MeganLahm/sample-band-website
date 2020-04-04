import React from "react";
import "./BackgroundImage.css";
import background from "../images/fallduluth.JPG";

const BackgroundImage = () => {
  return (
    <div className="bg">
      <img src={background} alt="img" />
    </div>
  );
};

export default BackgroundImage;
