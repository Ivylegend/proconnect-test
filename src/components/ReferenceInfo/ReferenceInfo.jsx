import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const ReferenceInfo = ({ formData, setFormData }) => {
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
          <div className="olevel_details">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              value={formData.number}
              onChange={(event) =>
                setFormData({ ...formData, number: event.target.value })
              }
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
