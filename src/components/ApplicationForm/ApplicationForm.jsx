import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const ApplicationForm = ({ formData, setFormData }) => {
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
        <h2>Fill The Application Form</h2>
        <div className="olevel_form">
          <div className="olevel_details">
            <label htmlFor="">Full name</label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Gender</label>
            <input
              type="text"
              value={formData.examinationNumber}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  examinationNumber: event.target.value,
                })
              }
            />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Date of Birth</label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Current House Address</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
            />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Father's Name</label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Mother's Name</label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Phone Number of One Parent</label>
            <input type="number" />
          </div>
          <div className="olevel_details">
            <label htmlFor="">Whose Number</label>
            <select name="" id="">
              <option value="state">Mother</option>
              <option value="WAEC">Father</option>
              <option value="WAEC">Sister</option>
              <option value="WAEC">Brother</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
