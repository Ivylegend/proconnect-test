import { useState } from "react";
import "./ApplyingTo.css";

const ApplyingTo = ({
  selectedCategory,
  setSelectedCategory,
  formData,
  setFormData,
}) => {
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="app_apply">
      <h2>Are you applying to?</h2>
      <div className="uniType">
        <label htmlFor="">Category</label>
        <select name="" id="" value={selectedCategory} onChange={handleChange}>
          <option value="Private University">Private University</option>
          <option value="Federal University">Federal University</option>
          <option value="State University">State University</option>
          <option value="Private Polytechnic">Private Polytechnic</option>
          <option value="Federal Polytechnic">Federal Polytechnic</option>
          <option value="State Polytechnic">State Polytechnic</option>
        </select>
      </div>
    </div>
  );
};

export default ApplyingTo;
