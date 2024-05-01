import React from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import { Link } from "react-router-dom";

const CourseOptions = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div className="app_apply">
        <h2 className="font-medium text-3xl">Course Options</h2>
        <div className="uniType flex flex-col gap-2">
          <label htmlFor="" className="text-lg">
            Courses
          </label>
          <select name="" id="">
            <option value="B.Sc Mathematics">B.Sc Mathematics</option>
            <option value="B.sc Chemistry">B.sc Chemistry</option>
            <option value="B.Sc Microbiology">B.Sc Microbiology</option>
            <option value="B.Sc Marine Science">B.Sc Marine Science</option>
            <option value="B.Sc Industrial Chemistry">
              B.Sc Industrial Chemistry
            </option>
            <option value="B.sc Estate Management">
              B.sc Estate Management
            </option>
            <option value="B.Sc Building">B.Sc Building</option>
            <option value="B.Sc Urban and Regional Planning">
              B.Sc Urban and Regional Planning
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseOptions;
