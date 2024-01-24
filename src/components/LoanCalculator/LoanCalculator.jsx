import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import "./LoanCalculator.css";

const LoanCalculator = ({ formData, setFormData }) => {
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
        <h2>Calculate your LOAN</h2>
        <p className="center" style={{ marginBottom: "1rem" }}>
          LOAN CALCULATOR
        </p>
        <div className="olevel_form">
          <div className="calculator_div">
            <div>
              <p>TOTAL LOAN AMOUNT</p>
              <input type="text" />
            </div>
            <div>
              <p>ANNUAL INTEREST RATE</p>
              <input type="text" />
            </div>
            <div>
              <p>TOTAL REPAYMENT DURATION</p>
              <input type="text" placeholder="72 MONTHS" />
            </div>
          </div>
          <span className="compute">
            <button className="btn">COMPUTE</button>
          </span>
          <div className="calculator_div">
            <div>
              <p>YOUR MONTHLY PPAYMENT</p>
              <input type="text" />
            </div>
            <div>
              <p>YOUR TOTAL PAYMENT</p>
              <input type="text" />
            </div>
            <div>
              <p>YOUR TOTAL INTEREST PAYMENT</p>
              <input type="text" placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
