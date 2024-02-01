import React, { useEffect } from "react";
import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import Exclamation from "../../assets/images/exclaim.png";
import "./Dashboard.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  // const location = useLocation();
  // const user = location.state?.user;
  const history = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    let googleToken = sessionStorage.getItem("googleToken");
  
    // Check if user is not logged in or missing necessary tokens
    if (!email || !googleToken) {
      history("/");
    }
  
    // Optional: Verify the validity of the Google token using Google API
  
  }, [history]);
  

  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Dashboard" />
        <div className="dashboard">
          <div className="complete-application">
            <img src={Exclamation} alt="" />
            <p>Complete your profile before you begin your application</p>
          </div>
          <div className="application_div">
            <span className="application_box">
              <Link to="/school-application">Start School Application</Link>
            </span>
            <span className="application_box">
              Skip School Application To Payment
            </span>
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
