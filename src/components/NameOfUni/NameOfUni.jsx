import { useEffect, useState } from "react";
import { useAuth } from "../../utils/AuthContext";

const NameOfUni = () => {
  const { token } = useAuth();

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
  const [institutionNames, setInstitutionNames] = useState([]);

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
          "https://dev-api.eldanic.com/api/v1/fetch_school/?school_type=private_university", // Dynamically change the endpoint based on schoolType
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
  }, [token]);

  return (
    <div className="app_apply">
      <h2>Name of Institution</h2>
      <div className="uniType">
        <label htmlFor="">Name</label>
        <select name="" id="">
          {institutionNames.map((uni, index) => (
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
