import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import "./WatchVideo.css";

const WatchVideo = ({ formData, setFormData }) => {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Background />
      </div>
      <div className="form-nav-logo">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="app_apply app_video">
        <h2>Watch this video before choosing a course</h2>
        <video controls={true} src=""></video>
      </div>
    </div>
  );
};

export default WatchVideo;
