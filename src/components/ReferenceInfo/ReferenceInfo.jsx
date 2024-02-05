import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ReferenceInfo = ({ formData, setFormData }) => {
  const [countriesData, setCountriesData] = useState([]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountriesData(response.data);
      } catch (error) {
        // console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []);

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
            <div className="flags">
              <div>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {countriesData.map((countriesArray, index) => (
                    <MenuItem className="flag-item" key={index}>
                      <img src={countriesArray.flags.png} alt="" />
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <input
                type="text"
                value={formData.number}
                onChange={(event) =>
                  setFormData({ ...formData, number: event.target.value })
                }
              />
            </div>
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
