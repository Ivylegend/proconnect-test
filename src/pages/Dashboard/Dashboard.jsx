import React, { useEffect, useState } from "react";
import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import Exclamation from "../../assets/images/exclaim.png";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();
  const [profileCompleted, setProfileCompleted] = useState(false);

  useEffect(() => {
    // Check if profile completion status is stored in localStorage
    const storedProfileCompletion = localStorage.getItem("profileCompleted");
    if (storedProfileCompletion) {
      setProfileCompleted(true);
    }
  }, []);

  // useEffect(() => {
  //   const email = sessionStorage.getItem("email");
  //   const googleToken = sessionStorage.getItem("googleToken"); // Assuming sessionStorage is appropriate

  //   if (!email || !googleToken) {
  //     history("/");
  //   }
  // }, [history, email, googleToken]);

  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <div className="complete-application">
            <img src={Exclamation} alt="" />
            <p>
              {profileCompleted
                ? "Profile Completed"
                : "Complete your profile before you begin your application"}
            </p>
          </div>
          <div className="application_div">
            <Link to="/school-application">
              <span className="application_box">Start School Application</span>
            </Link>
            <Link to="/school-application">
              <span className="application_box">
                Skip School Application To Payment
              </span>
            </Link>
          </div>
          <div className="dashboard_lower">
            <p className="explainer">Watch Explainer Video</p>
            <video src="" controls className="explainer-video"></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
