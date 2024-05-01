import React, { useState } from "react";
import "./Jamb.css";
import Results from "../../containers/Results/Results";
import { BASE_URL } from "../../constants";
import { useAuth } from "../../utils/AuthContext";

const Jamb = ({ formData, setFormData }) => {
  const [validated, setValidated] = useState(true);
  const [fullName, setFullName] = useState("");
  const [firstSubject, setFirstSubject] = useState("");
  const [firstResult, setFirstResult] = useState(0);
  const [secondResult, setSecondResult] = useState(0);
  const [secondSubject, setSecondSubject] = useState("");
  const [thirdSubject, setThirdSubject] = useState("");
  const [thirdResult, setThirdResult] = useState(0);
  const [fourthResult, setFourthResult] = useState(0);
  const [fourthSubject, setFourthSubject] = useState("");
  const [gender, setGender] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [examYear, setExamYear] = useState("");
  const [errors, setErrors] = useState({}); // State for error messages

  const { token } = useAuth();

  const courses = [
    {
      subject: firstSubject,
      grade: firstResult,
    },
    {
      subject: secondSubject,
      grade: secondResult,
    },
    {
      subject: thirdSubject,
      grade: thirdResult,
    },
    {
      subject: fourthSubject,
      grade: fourthResult,
    },
    {
      subject: "Total",
      grade:
        Number(firstResult) +
        Number(secondResult) +
        Number(thirdResult) +
        Number(fourthResult),
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {}; // Object to store individual field errors

    if (!fullName) {
      isValid = false;
      newErrors.fullName = "Full Name is required";
    }
    if (!regNumber) {
      isValid = false;
      newErrors.regNumber = "Registration Number is required";
    }
    if (!examYear) {
      isValid = false;
      newErrors.examYear = "Exam Year is required";
    } else if (examYear.length !== 4 || isNaN(examYear)) {
      newErrors.examYear = "Invalid Exam Year format (YYYY)";
    }
    if (!firstSubject || !firstResult) {
      isValid = false;
      newErrors.firstSubject = "First Subject and Score are required";
    } else if (isNaN(firstResult)) {
      newErrors.firstResult = "First Score must be a number";
    }
    if (!secondSubject || !secondResult) {
      isValid = false;
      newErrors.secondSubject = "First Subject and Score are required";
    } else if (isNaN(secondResult)) {
      isValid = false;
      newErrors.secondResult = "First Score must be a number";
    }
    if (!thirdSubject || !thirdResult) {
      isValid = false;
      newErrors.thirdSubject = "First Subject and Score are required";
    } else if (isNaN(thirdResult)) {
      isValid = false;
      newErrors.thirdResult = "First Score must be a number";
    }
    if (!fourthSubject || !fourthResult) {
      isValid = false;
      newErrors.fourthSubject = "First Subject and Score are required";
    } else if (isNaN(fourthResult)) {
      isValid = false;
      newErrors.fourthResult = "First Score must be a number";
    }
    setErrors(newErrors); // Update state with individual field errors

    if (!isValid) {
      // Display error messages
      console.error("Validation Errors:", newErrors);
      return; // Prevent sending API request if validation fails
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${token}`);

    const raw = JSON.stringify({
      full_name: fullName,
      exam_type: "JAMB",
      first_subject: firstSubject,
      first_result: Number(firstResult),
      second_subject: secondSubject,
      second_result: Number(secondResult),
      third_subject: thirdSubject,
      third_result: Number(thirdResult),
      fourth_subject: fourthSubject,
      fourth_result: Number(fourthResult),
      gender: gender,
      registration_number: regNumber,
      state_of_origin: stateOfOrigin,
      exam_year: examYear,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BASE_URL}jamb/result-submit/`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setValidated(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="sign-up-container">
      {validated ? (
        <div className="app_olevel">
          <h2 className="font-medium text-3xl">Ready your JAMB Details</h2>
          <div className="olevel_form">
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Type of Exam
              </label>
              <div className="w-full mb-5 h-14 rounded-xl border border-[rgba(102, 102, 102, 0.35)] p-4">
                UTME/JAMB
              </div>
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Examination Number
              </label>
              <input
                type="text"
                value={regNumber}
                onChange={(event) => setRegNumber(event.target.value)}
              />
              {errors.regNumber && <span className="">{errors.regNumber}</span>}
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Year Written
              </label>
              <input
                type="text"
                name="year"
                id="year"
                value={examYear}
                onChange={(event) => {
                  const newValue = event.target.value;
                  const regex = /^\d+$/;
                  if (regex.test(newValue)) {
                    setExamYear(newValue);
                  }
                }}
                maxLength={4}
              />
              {errors.examYear && (
                <span className="error">{errors.examYear}</span>
              )}
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="olevel_details mb-[1.2rem]">
              <label htmlFor="gender" className="text-lg">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                onChange={(event) => setGender(event.target.value)}
                className="bg-white"
              >
                <option value="">--Select your gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Prefer not to say</option>
              </select>
            </div>
            <div className="olevel_details mb-[1.2rem]">
              <label htmlFor="" className="text-lg">
                State of Origin
              </label>
              <select
                name="stateOfOrigin"
                id="stateOfOrigin"
                onChange={(event) => setStateOfOrigin(event.target.value)}
                className="bg-white"
              >
                <option value="">--Select State Of Origin--</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
                <option value="FCT">Federal Capital Territory</option>
              </select>
            </div>
            {/* SUBJECTS WRITTEN */}
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                First Subject
              </label>
              <input
                type="text"
                value={firstSubject}
                onChange={(event) => setFirstSubject(event.target.value)}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Score
              </label>
              <input
                type="number"
                value={firstResult}
                onChange={(event) => setFirstResult(event.target.value)}
                maxLength={2}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Second Subject
              </label>
              <input
                type="text"
                value={secondSubject}
                onChange={(event) => setSecondSubject(event.target.value)}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Score
              </label>
              <input
                type="number"
                value={secondResult}
                onChange={(event) => setSecondResult(event.target.value)}
                maxLength={2}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Third Subject
              </label>
              <input
                type="text"
                value={thirdSubject}
                onChange={(event) => setThirdSubject(event.target.value)}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Score
              </label>
              <input
                type="number"
                value={thirdResult}
                onChange={(event) => setThirdResult(event.target.value)}
                maxLength={2}
              />
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">
                Fourth Subject
              </label>
              <input
                type="text"
                value={fourthSubject}
                onChange={(event) => setFourthSubject(event.target.value)}
              />
            </div>
            <div className="olevel_details mb-8">
              <label htmlFor="" className="text-lg">
                Score
              </label>
              <input
                type="number"
                value={fourthResult}
                onChange={(event) => setFourthResult(event.target.value)}
                maxLength={2}
              />
            </div>
          </div>
          <button className="wide-btn btn" onClick={handleSubmit}>
            Validate
          </button>
        </div>
      ) : (
        <Results level={2} title="JAMB RESULT" courses={courses} />
      )}
    </div>
  );
};

export default Jamb;
