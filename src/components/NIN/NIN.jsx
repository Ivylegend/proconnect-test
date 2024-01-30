import React, { useState } from "react";
import Nav from "../../containers/Nav/Nav";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import "./NIN.css";
import { Link } from "react-router-dom";
import Loading from "../../containers/Loading";
import { toast } from "react-toastify";

function NIN({ formData, setFormData, onButtonClick }) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nin, setNin] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [gender, setGender] = useState("");
  const [setstateOfOrigin, setSetstateOfOrigin] = useState("");

  const token = localStorage.getItem("authToken");
  const handleValidation = () => {
    fetch(
      `https://dev-api.eldanic.com/api/v1/user/fetch-nin/?nin_number=${nin}&dob=2003-09-10`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setName(
          data.data.first_name +
            " " +
            data.data.middle_name +
            " " +
            data.data.last_name
        );
        setDateOfBirth(data.data.date_of_birth);
        setGender(data.data.gender);
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error("There was a problem with the fetch operation:", error);
      });
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
            value={nin}
            onChange={(e) => setNin(e.target.value)}
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
                <p className="nin-detail">{name}</p>
              </div>
              <div className="nin-text">
                <p className="title">Date of Birth</p>
                <p className="nin-detail">{dateOfBirth}</p>
              </div>
              <div className="nin-text">
                <p className="title">House Address</p>
                <p className="nin-detail">Alabata road, akoka</p>
              </div>
              <div className="nin-text">
                <p className="title">Gender</p>
                <p className="nin-detail">{gender}</p>
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
