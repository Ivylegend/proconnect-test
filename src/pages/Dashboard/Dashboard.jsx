import React from "react";
import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import Exclamation from "../../assets/images/exclaim.png";
import "./Dashboard.css";

const Dashboard = () => {
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
            <span className="application_box">Start School Application</span>
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
