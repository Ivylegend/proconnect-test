import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const FinanceOptions = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div className="app_olevel">
        <h2 className="font-medium text-3xl">Financing Options</h2>
        <p className="center text-lg mb-4">
          How Do You Intend to Fund Your Education
        </p>
        <div className="olevel_form">
          <label htmlFor="" className="text-lg">Financing Options</label>
          <select name="" id="">
            <option value="" className="text-center">--Choose one from the dropdown--</option>
            <option value="Parents/Guardians (Pay in Full at once)">
              Parents/Guardians (Pay in Full at once)
            </option>
            <option value="Parents/Guardians (Pay in installments)">
              Parents/Guardians (Pay in installments)
            </option>
            <option value="ProconnectPAY Private University Education Loans">
              ProconnectPAY Private University Education Loans
            </option>
            <option value="Scolarships from 3rd Parties">Scolarships from 3rd Parties</option>
            <option value="Federal Government Student Loans">Federal Government Student Loans</option>
            <option value="Crowdfunding from Friends and Acquaintance">
              Crowdfunding from Friends and Acquaintance
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FinanceOptions;
