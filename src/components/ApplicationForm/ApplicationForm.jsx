import React, { useState } from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ApplicationForm = ({ formData, setFormData }) => {
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
        <h2 className="font-medium text-3xl">Fill The Application Form</h2>
        <div className="olevel_form">
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Full name
            </label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Gender
            </label>
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
            <label htmlFor="" className="text-lg">
              Date of Birth
            </label>
            <input type="date" name="" id="" className="date-time" />
          </div>
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Current House Address
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
              Father's Name
            </label>
            <input type="text" />
          </div>
          <div className="olevel_details">
            <label htmlFor="" className="text-lg">
              Mother's Name
            </label>
            <input type="text" />
          </div>
          <div className="olevel_details mb-5">
            <label htmlFor="" className="text-lg">
              Phone Number of One Parent
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
              Whose Number
            </label>
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
