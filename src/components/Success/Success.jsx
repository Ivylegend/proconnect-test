import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import SuccessImg from "../../assets/images/successful.png";
import { Link } from "react-router-dom";
import "./Success.css";

function Success({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div className="app_successful">
        <h2 className="font-medium text-3xl">Application Sent Successfully</h2>
        <div className="successful">
          <img src={SuccessImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Success;
