import { useState } from "react";
import "./ApplyingTo.css";

const ApplyingTo = ({ selectedCategory, setSelectedCategory }) => {
  const handleChange = (event) => {
    setSelectedCategory("private_university");
    console.log(selectedCategory);
  };

  return (
    <div className="app_apply">
      <h2 className="font-medium text-3xl">Where are you applying to?</h2>
      <div className="uniType flex flex-col gap-2">
        <label htmlFor="" className="text-lg">
          Category
        </label>
        <select name="" id="" value={selectedCategory} onChange={handleChange}>
          <option value="private_university">Private University</option>
        </select>
      </div>
    </div>
  );
};

export default ApplyingTo;
