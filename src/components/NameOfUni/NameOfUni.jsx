// const NameOfUni = ({ formData, setFormData }) => {
//   return (
//     <div>
//       <div className="app_apply">
//         <h2>Name of Institution</h2>
//         <div className="uniType">
//           <label htmlFor="">Category</label>
//           <select name="" id="">
//             <option value="WAEC">Private University</option>
//             <option value="WAEC">Covenant University</option>
//             <option value="WAEC">Babcock University</option>
//             <option value="WAEC">Redeemers Polytechnic</option>
//             <option value="WAEC">Texas Polytechnic</option>
//             <option value="WAEC">Highlanders Polytechnic</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NameOfUni;

const NameOfUni = ({ selectedCategory }) => {
  const universities = {
    "Private University": [
      "Covenant University",
      "Babcock University",
      // Add more private universities here
    ],
    "Federal University": [
      "FUNAAB University",
      "FOUYE University",
      // Add federal universities here
    ],
    "State University": [
      "Kwasu University",
      "Eksu University",
      // Add state universities here
    ],
    "Private Polytechnic": [
      "Lautech University",
      "Babcock University",
      // Add private polytechnics here
    ],
    "Federal Polytechnic": [
      "Kwara Poly",
      "Babcock Poly",
      // Add federal polytechnics here
    ],
    "State Polytechnic": [
      "Covenant University",
      "State Polytechnics",
      // Add state polytechnics here
    ],
  };

  return (
    <div className="app_apply">
      <h2>Name of Institution</h2>
      <div className="uniType">
        <label htmlFor="">Name</label>
        <select name="" id="">
          {universities[selectedCategory]?.map((uni, index) => (
            <option key={index} value={uni}>
              {uni}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default NameOfUni;
