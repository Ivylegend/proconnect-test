import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import "./WatchVideo.css";

const WatchVideo = ({ formData, setFormData }) => {
  return (
    <div>
      <div className="app_apply app_video">
        <h2>Watch this video before choosing a course</h2>
        <video controls={true} src=""></video>
      </div>
    </div>
  );
};

export default WatchVideo;
