import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import UploadIcon from "../../assets/images/upload.png";
import Laptop from "../../assets/images/laptop.png";
import bank from "../../assets/images/bank.png";
import health from "../../assets/images/health.png";
import living from "../../assets/images/living.png";
import phone from "../../assets/images/phone.png";
import miscellaneous from "../../assets/images/miscellaneous.png";
import "./EducationLoans.css";

const dataValue = [
  {
    name: "Health Insurance",
    icon: health,
    key: "1",
  },
  {
    name: "New Laptop",
    icon: Laptop,
    key: "2",
  },
  {
    name: "New Phone",
    icon: phone,
    key: "3",
  },
  {
    name: "Tuition",
    icon: bank,
    key: "4",
  },
  {
    name: "Miscellaneous Cost",
    icon: miscellaneous,
    key: "5",
  },
  {
    name: "Cost of living",
    icon: living,
    key: "6",
  },
];

const EducationLoans = ({ formData, setFormData }) => {
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
      <div className="app_loan">
        <h2>Our Education Loans covers the following</h2>
        <p className="center" style={{ marginBottom: "1rem" }}>
          Choose the expenses you would love ProconnectPAY to cover
        </p>
        <div className="loan_div">
          {dataValue.map((data, key) => {
            return (
              <div key={key} className="loan_options">
                <img src={data.icon} alt="" />
                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationLoans;
