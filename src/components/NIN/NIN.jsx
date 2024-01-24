import React, { useState } from "react";
import Nav from "../../containers/Nav/Nav";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import "./NIN.css";
import { Link } from "react-router-dom";
import Loading from "../../containers/Loading";

function NIN({ formData, setFormData, onButtonClick }) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);

  // const handleButtonClick = () => {
  //   const isInputValid = validateNIN(formData.nin);

  //   if (isInputValid) {
  //     setSuccess(true);
  //     setValidated(true); // Set validated to true when the input is valid
  //     if (onButtonClick) {
  //       onButtonClick();
  //     }
  //   } else {
  //     // Handle invalid input case if needed
  //     setValidated(false);
  //   }
  // };

  const handleValidation = () => {
    setTimeout( <Loading />, 1000);
    setValidated(true);
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
      <div className="app_nin">
        <div className={validated ? "none" : "nin-container"}>
          <h2>Input your NIN</h2>
          <label htmlFor="">Input your NIN number</label>
          <input
            type="text"
            placeholder=""
            value={formData.nin}
            onChange={(event) =>
              setFormData({ ...formData, nin: event.target.value })
            }
          />
          <p className="hidden">Wrong NIN</p>

          {!validated && (
            <button className="wide-btn btn" onClick={handleValidation}>
              Validate
            </button>
          )}
        </div>
        {validated && (
          <div>
            <h2>Ready your NIN</h2>
            <p className="info_nin">Your Information</p>
            <div className="nin-info">
              <div className="nin-text">
                <p className="title">Full Name</p>
                <p className="nin-detail">Joy Chinonso</p>
              </div>
              <div className="nin-text">
                <p className="title">Date of Birth</p>
                <p className="nin-detail">04-07-2003</p>
              </div>
              <div className="nin-text">
                <p className="title">House Address</p>
                <p className="nin-detail">Alabata road, akoka</p>
              </div>
              <div className="nin-text">
                <p className="title">Gender</p>
                <p className="nin-detail">Female</p>
              </div>
              <div className="nin-text">
                <p className="title">State of Origin</p>
                <p className="nin-detail">Kwara State</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NIN;

const validateNIN = (nin) => {
  return nin.length === 11; // Example: NIN must be 11 characters long
};
