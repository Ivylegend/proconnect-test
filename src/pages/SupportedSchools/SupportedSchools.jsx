import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import "./SupportedSchools.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SupportedSchools.css";
import { useAuth } from "../../utils/AuthContext";

const SupportedSchools = () => {
  const history = useNavigate();
  const [institutionNames, setInstitutionNames] = useState([]);
  const [schoolType, setSchoolType] = useState("state_college");
  // const token = localStorage.getItem("authToken");
  const { token } = useAuth(); // Access token from context

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      history("/");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${token}`);
        myHeaders.append(
          "Cookie",
          "sessionid=jzs5i5nqdcasueaq9chtoji3c55nvpqb"
        );

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          `https://dev-api.eldanic.com/api/v1/fetch_school/?school_type=${schoolType}`, // Dynamically change the endpoint based on schoolType
          requestOptions
        );
        const result = await response.json();
        const { data } = result;
        const names = data.map((school) => school["Name of Institution"]);
        setInstitutionNames(names);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [schoolType, token]); // Fetch data whenever schoolType changes

  const handleSchoolTypeChange = (type) => {
    setSchoolType(type);
  };

  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <p className="uni_name">Name of Institutions</p>
          <div className="uni_category">
            <p>Select your School Category</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button onClick={() => handleSchoolTypeChange("state_college")}>
                State College
              </button>
              <button
                onClick={() => handleSchoolTypeChange("state_university")}
              >
                State University
              </button>
              <button
                onClick={() => handleSchoolTypeChange("private_university")}
              >
                Private University
              </button>
              <button
                onClick={() => handleSchoolTypeChange("federal_university")}
              >
                Federal University
              </button>
              <button onClick={() => handleSchoolTypeChange("federal_college")}>
                Federal College
              </button>
            </div>
            <select>
              {institutionNames.map((name, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
            <Link to="/documents">
              <button className="btn wide-btn">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedSchools;
