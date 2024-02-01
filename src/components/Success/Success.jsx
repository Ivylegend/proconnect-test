import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import SuccessImg from "../../assets/images/successful.png"
import { Link } from "react-router-dom";
import './Success.css';

function Success({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Background />
      </div>
      <div className="form-nav-logo">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="app_successful">
        <h2>Application Sent Successfully</h2>
        <div className="successful">
          <img src={SuccessImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Success;
