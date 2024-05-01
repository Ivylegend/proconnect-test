import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAuth } from "../../utils/AuthContext";
import { BASE_URL } from "../../constants";

const ReferenceInfo = ({ formData, setFormData }) => {
  const initialValues = {
    contactno: "",
    country_code: "",
  };
  const [referenceData, setReferenceData] = useState(initialValues);

  const { token } = useAuth();

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

  const sendReference = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${token}`);

    const raw =
      '{\r\n	"rel_name": Shirley Erdman,\r\n	"email_address": Salvatore9@yahoo.com,\r\n	"phone": 440-272-7253,\r\n	"profession": "Trader",\r\n	"relationship": "Uncle"\r\n}';

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div className="sign-up-container">
      <div className="app_olevel">
        <h2 className="font-medium text-3xl">Fill Reference Information</h2>
        <div className="olevel_form">
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Full Name
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(event) =>
                setFormData({ ...formData, fullName: event.target.value })
              }
            />
          </div>
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
          </div>
          <div className="olevel_details mb-5">
            <label htmlFor="" className="text-lg">
              Phone Number
            </label>
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
            <label htmlFor="" className="text-lg">
              Profession
            </label>
            <input type="text" />
          </div>
          <div className="olevel_details mb-12">
            <label htmlFor="" className="text-lg">
              Relationship
            </label>
            <select name="" id="">
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Uncle">Uncle</option>
              <option value="Aunty">Aunty</option>
            </select>
          </div>
        </div>
        <button className="wide-btn btn" onClick={sendReference}>
          Send Reference Request
        </button>
      </div>
    </div>
  );
};

export default ReferenceInfo;
