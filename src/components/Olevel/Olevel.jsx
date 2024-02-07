import { useState } from "react";
import Logo from "../../assets/images/elda-logo.png";
import Background from "../Background/Background";
import "./Olevel.css";
import { Link } from "react-router-dom";
import Results from "../../containers/Results/Results";

const courses = [
  {
    title: "Mathematics",
    grade: "A1",
  },
  {
    title: "English Language",
    grade: "A1",
  },
  {
    title: "Biology",
    grade: "A1",
  },
  {
    title: "Chemistry",
    grade: "A1",
  },
  {
    title: "Physics",
    grade: "A1",
  },
  {
    title: "Marketing",
    grade: "A1",
  },
  {
    title: "Further Mathematics",
    grade: "A1",
  },
  {
    title: "Civic Education",
    grade: "A1",
  },
  {
    title: "Book Keping",
    grade: "A1",
  },
];

const Olevel = ({ formData, setFormData }) => {
  const [validated, setValidated] = useState(true);

  const courses = [
    {
      title: "Mathematics",
      grade: "A1",
    },
    {
      title: "English Language",
      grade: "A1",
    },
    {
      title: "Biology",
      grade: "A1",
    },
    {
      title: "Chemistry",
      grade: "A1",
    },
    {
      title: "Physics",
      grade: "A1",
    },
    {
      title: "Marketing",
      grade: "A1",
    },
    {
      title: "Further Mathematics",
      grade: "A1",
    },
    {
      title: "Civic Education",
      grade: "A1",
    },
    {
      title: "Book Keping",
      grade: "A1",
    },
  ];

  return (
    <div className="sign-up-container">
      {validated ? (
        <div className="app_olevel">
          <h2>Ready your O'level Details</h2>
          <div className="olevel_form">
            <div className="olevel_details">
              <label htmlFor="">Type of Exam</label>
              <select name="" id="">
                <option value="WAEC">WAEC</option>
                <option value="WAEC">NECO</option>
              </select>
            </div>
            <div className="olevel_details">
              <label htmlFor="">Examination Number</label>
              <input
                type="number"
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
              <label htmlFor="">Year Written</label>
              <select name="" id="">
                <option value="WAEC">2020</option>
                <option value="WAEC">2021</option>
                <option value="WAEC">2022</option>
                <option value="WAEC">2023</option>
              </select>
            </div>
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
              <label htmlFor="">Gender</label>
              <select name="" id="">
                <option value="WAEC">Male</option>
                <option value="WAEC">Female</option>
                <option value="WAEC">Prefer not to say</option>
              </select>
            </div>
            <div className="olevel_details">
              <label htmlFor="">State of Origin</label>
              <select name="" id="">
                <option value="state">Abia</option>
                <option value="WAEC">Adamawa</option>
                <option value="WAEC">Akwa-Ibom</option>
                <option value="WAEC">Anambra</option>
              </select>
            </div>
          </div>
          <button className="wide-btn btn" onClick={() => setValidated(false)}>
            Validate
          </button>
        </div>
      ) : (
        <Results level={1} title="WAEC RESULT" courses={courses} />
      )}
    </div>
  );
};

export default Olevel;
