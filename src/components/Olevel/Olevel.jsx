import { useState } from "react";
import "./Olevel.css";
import Results from "../../containers/Results/Results";
import { useAuth } from "../../utils/AuthContext";
import { BASE_URL } from "../../constants";

const Olevel = ({ formData, setFormData }) => {
  const [validated, setValidated] = useState(true);
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [typeOfExam, setTypeOfExam] = useState("");
  const [examYear, setExamYear] = useState("");
  const [errors, setErrors] = useState({}); // State for error messages
  const [studentResults, setStudentResults] = useState([]); // Empty array for results

  const { token } = useAuth();

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
      exam_type: typeOfExam,
      exam_no: regNumber,
      exam_year: examYear,
      full_name: fullName,
      gender: gender,
      state_of_origin: stateOfOrigin,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BASE_URL}waec/result-checker/`, requestOptions)
      .then((response) => response.text())

      .then((result) => {
        const apiResponse = JSON.parse(result);
        const studentResults = apiResponse.data.student_result;
        const processedResults = studentResults.map(({ subject, grade }) => ({
          subject,
          grade,
        }));
        setStudentResults(processedResults);
        setValidated(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="sign-up-container">
      {validated ? (
        <div className="app_olevel">
          <h2 className="font-medium text-3xl">Ready your O'level Details</h2>
          <div className="olevel_form">
            <div className="olevel_details mb-[1.2rem]">
              <label htmlFor="tpeOfExam" className="text-lg">Type of Exam</label>
              <select
                name="tpeOfExam"
                id="typeOfExam"
                onChange={(event) => setTypeOfExam(event.target.value)}
                className="bg-white"
              >
                <option value="">--Select type of Exam--</option>
                <option value="1">WAEC</option>
                <option value="2">NECO</option>
              </select>
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">Examination Number</label>
              <input
                type="text"
                value={regNumber}
                onChange={(event) => setRegNumber(event.target.value)}
              />
              {errors.regNumber && <span className="">{errors.regNumber}</span>}
            </div>
            <div className="olevel_details">
              <label htmlFor="" className="text-lg">Year Written</label>
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
              <label htmlFor="" className="text-lg">Full Name</label>
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
              <label htmlFor="gender" className="text-lg">Gender</label>
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
            <div className="olevel_details mb-16">
              <label htmlFor="" className="text-lg">State of Origin</label>
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
          </div>
          <button className="wide-btn btn" onClick={handleSubmit}>
            Validate
          </button>
        </div>
      ) : (
        <Results level={1} title="WAEC RESULT" courses={studentResults} />
      )}
    </div>
  );
};

export default Olevel;
