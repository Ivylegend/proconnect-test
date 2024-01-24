import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import "./ApplyingTo.css";
import { Link } from "react-router-dom";

const ApplyingTo = ({ formData, setFormData }) => {
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
      <div className="app_apply">
        <h2>Are you applying to?</h2>
        <div className="uniType">
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="WAEC">Private University</option>
            <option value="WAEC">Federal University</option>
            <option value="WAEC">State University</option>
            <option value="WAEC">Private Polytechnic</option>
            <option value="WAEC">Federal Polytechnic</option>
            <option value="WAEC">State Polytechnic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ApplyingTo;
