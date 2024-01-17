import React from "react";
import Round from "../../assets/images/round.png";
import "./Background.css";

const Background = () => {
  return (
    <div className="circle-background">
      <img src={Round} alt="circle" className="one" />
      <img src={Round} alt="circle" className="two"/>
      <img src={Round} alt="circle" className="three"/>
      <img src={Round} alt="circle" className="four"/>
    </div>
  );
};

export default Background;
