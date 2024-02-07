import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const CourseOptions = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div className="app_apply">
        <h2>Course Options</h2>
        <div className="uniType">
          <label htmlFor="">Courses</label>
          <select name="" id="">
            <option value="WAEC">B.sc Chemistry</option>
            <option value="WAEC">B.sc Chemistry</option>
            <option value="WAEC">B.sc Chemistry</option>
            <option value="WAEC">B.sc Chemistry</option>
            <option value="WAEC">B.sc Chemistry</option>
            <option value="WAEC">B.sc Chemistry</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseOptions;
