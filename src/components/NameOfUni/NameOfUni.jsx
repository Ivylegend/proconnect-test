import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const NameOfUni = ({ formData, setFormData }) => {
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
        <h2>Name of Institution</h2>
        <div className="uniType">
          <label htmlFor="">Category</label>
          <select name="" id="">
            <option value="WAEC">Private University</option>
            <option value="WAEC">Covenant University</option>
            <option value="WAEC">Babcock University</option>
            <option value="WAEC">Redeemers Polytechnic</option>
            <option value="WAEC">Texas Polytechnic</option>
            <option value="WAEC">Highlanders Polytechnic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default NameOfUni;
