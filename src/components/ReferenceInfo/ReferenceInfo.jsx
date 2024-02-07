import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import "react-phone-input-2/lib/material.css";

const ReferenceInfo = ({ formData, setFormData }) => {
  const initialValues = {
    contactno: "",
    country_code: "",
  };
  const [referenceData, setReferenceData] = useState(initialValues);

  const handleChange = (e, value, name) => {
    console.log("value", value);
    console.log("name", name);
    if (name === "contactno") {
      let splitMobile = e?.split(value?.dialCode);
      setReferenceData({
        ...referenceData,
        country_code: value?.dialCode,
        contactno: splitMobile?.[1] || "",
      });
    } else
      setReferenceData({ ...referenceData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-up-container">
      <div className="app_olevel">
        <h2>Fill Reference Information</h2>
        <div className="olevel_form">
          <div className="olevel_details">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
            />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
          <div
            className="olevel_details"
            style={{
              marginBottom: "1.2rem",
            }}
          >
            <label htmlFor="">Phone Number</label>
            <PhoneInput
              country="ng"
              regions={"africa"}
              inputStyle={{
                height: "56px",
                width: "100%",
                borderRadius: "10px",
              }}
              onChange={(e, phone) => handleChange(e, phone, "contactno")}
              value={`${referenceData.country_code}${referenceData.contactno}`}
            />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Profession</label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Relationship</label>
            <select name="" id="">
              <option value="state">Father</option>
              <option value="WAEC">Mother</option>
              <option value="WAEC">Uncle</option>
              <option value="WAEC">Aunty</option>
            </select>
          </div>
        </div>
        <button className="wide-btn btn" onClick={() => setvalidated(true)}>
          Send Reference Request
        </button>
      </div>
    </div>
  );
};

export default ReferenceInfo;
