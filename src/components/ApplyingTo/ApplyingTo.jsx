import { useState } from "react";
import "./ApplyingTo.css";

const ApplyingTo = ({ selectedCategory, setSelectedCategory }) => {
  const handleChange = (event) => {
    setSelectedCategory("private_university");
    console.log(selectedCategory);
  };

  return (
    <div className="app_apply">
      <h2>Are you applying to?</h2>
      <div className="uniType">
        <label htmlFor="">Category</label>
        <select name="" id="" value={selectedCategory} onChange={handleChange}>
          <option value="private_university">Private University</option>
          {/* <option value="federal_university">Federal University</option>
          <option value="state_university">State University</option>
          <option value="federal_college">Private Polytechnic</option>
          <option value="federal_college">Federal Polytechnic</option>
          <option value="state_college">State Polytechnic</option> */}
        </select>
      </div>
    </div>
  );
};

export default ApplyingTo;
