import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import "./SupportedSchools.css";
import { Link, useNavigate } from "react-router-dom";

const schools = [
  "Covenant University",
  "Landmark University",
  "Babcock University",
  "Redeemers University",
  "University of Texas",
  "University of Chicago",
];

const SupportedSchools = () => {
  const history = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      history("/");
    }
  }, []);
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Application of Supported Schools" />
        <div className="dashboard">
          <p className="uni_name">Name of Institutions</p>
          <div className="uni_category">
            <p>Category</p>
            <select name="Private University" id="uni">
              <option className="option-one" value="uni">
                Private University
              </option>
              {schools.map((school, index) => {
                return (
                  <option value="" key={index}>
                    {school}
                  </option>
                );
              })}
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
