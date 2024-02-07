import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const FinanceOptions = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div className="app_olevel">
        <h2>Financing Options</h2>
        <p className="center" style={{ marginBottom: "1rem" }}>
          How Do You Intend to Fund Your Education
        </p>
        <div className="olevel_form">
          <label htmlFor="">Choose one from the dropdown</label>
          <select name="" id="">
            <option value="WAEC">
              Parents/Guardians (Pay in Full at once)
            </option>
            <option value="WAEC">
              Parents/Guardians (Pay in installments)
            </option>
            <option value="WAEC">
              ProconnectPAY Private University Education Loans
            </option>
            <option value="WAEC">Scolarships from 3rd Parties</option>
            <option value="WAEC">Federal Government Student Loans</option>
            <option value="WAEC">
              Crowdfunding from Friends and Acquaintance
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FinanceOptions;
