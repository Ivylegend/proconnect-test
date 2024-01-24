import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const FinanceOptions = ({ formData, setFormData }) => {
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
      <div className="app_olevel">
        <h2>Financing Options</h2>
        <p className="center" style={{marginBottom: '1rem'}}>How Do You Intend to Fund Your Education</p>
        <div className="olevel_form">
          <label htmlFor="">Financing Options</label>
          <select name="" id="">
            <option value="WAEC">Parents/Guardians</option>
            <option value="WAEC">ProconnectPAY Education Loans</option>
            <option value="WAEC">Scolarships from 3rd Parties</option>
            <option value="WAEC">Redeemers Polytechnic</option>
            <option value="WAEC">Federal Government Student Loans</option>
            <option value="WAEC">
              Crowdfunding from friends and acquintaince
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FinanceOptions;
