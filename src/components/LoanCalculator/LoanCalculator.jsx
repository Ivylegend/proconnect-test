import React, { useState } from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import "./LoanCalculator.css";
import { toast } from "react-toastify";

const LoanCalculator = ({ formData, setFormData }) => {
  const [pricipal, setPricipal] = useState("");
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null);
  const [monthly, setMonthly] = useState(null);

  const calculateReturn = () => {
    const principalAmount = parseFloat(pricipal);

    if (isNaN(principalAmount) || principalAmount <= 0) {
      toast.error("Please enter a valid positive number");
    } else {
      const annualReturn = principalAmount * 0.3;
      setResult("$" + annualReturn.toFixed(2));
      setMonthly("$" + ((principalAmount + annualReturn)/12).toFixed(2));
      setTotal("$" + (principalAmount + annualReturn).toFixed(2));
    }
  };

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
              <input
                type="number"
                value={pricipal}
                onChange={(e) => setPricipal(e.target.value)}
              />
            </div>
            <div>
              <p>ANNUAL INTEREST RATE</p>
              <input type="text" placeholder="30%" disabled/>
            </div>
            <div>
              <p>TOTAL REPAYMENT DURATION</p>
              <input type="text" placeholder="72 MONTHS" />
            </div>
          </div>
          <span className="compute">
            <button className="btn" onClick={() => calculateReturn()}>
              COMPUTE
            </button>
          </span>
          <div className="calculator_div">
            <div>
              <p>YOUR MONTHLY PAYMENT</p>
              <input type="text" value={monthly} disabled/>
            </div>
            <div>
              <p>YOUR TOTAL PAYMENT</p>
              <input type="text" value={total} disabled/>
            </div>
            <div>
              <p>YOUR TOTAL INTEREST PAYMENT</p>
              <input type="text" placeholder="" value={result} disabled/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
