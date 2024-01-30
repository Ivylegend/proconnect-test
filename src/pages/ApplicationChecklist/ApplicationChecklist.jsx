import DynamicNav from "../../components/DynamicNav/DynamicNav";
import SideNav from "../../containers/SideNav/SideNav";
import Checkmark from '../../assets/images/checkmark.png'
import './ApplicationChecklist.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ApplicationChecklist = () => {
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
        <DynamicNav title="Application School Checklist" />
        <div className="dashboard">
          <div className="application-completed">
            Application Completed
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="check">Checklist</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChecklist;
