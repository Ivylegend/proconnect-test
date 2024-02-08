const NameOfUni = ({ selectedCategory }) => {
  const token = sessionStorage.getItem("authToken");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  fetch(
    "http://localhost:3005/api/v1/fetch_school/?school_type=state_university",
    {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

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
