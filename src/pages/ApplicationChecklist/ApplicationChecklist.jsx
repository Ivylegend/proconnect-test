import DynamicNav from "../../components/DynamicNav/DynamicNav";
import SideNav from "../../containers/SideNav/SideNav";
import Checkmark from "../../assets/images/checkmark.png";
import "./ApplicationChecklist.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const checkListData = [
  "Profile Update",
  "NIN",
  "O'level",
  "Jamb Result",
  "Select School of Choice",
  "Fill Application Form",
  "Course of choice",
];
const checkListData2 = [
  "Upload Documents",
  "Birth Certificate",
  "Certificate of origin",
  "Reference Letter",
  "Expense Loan Coverage",
  "Loan Calculator",
  "Pay Application Fee",
];

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
      <div className="margleft">
        <div className="dashboard">
          <div className="application-completed">
            Application Completed
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="check">Checklist</p>
          <div className="checklist">
            <div>
              {checkListData.map((data, index) => {
                return (
                  <span key={index}>
                    <input type="checkbox" className="checkbox" name="" id="" />
                    <p>{data}</p>
                  </span>
                );
              })}
            </div>
            <div>
              {checkListData2.map((data2, index) => {
                return (
                  <span key={index}>
                    <input type="checkbox" name="" id="" />
                    <p>{data2}</p>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChecklist;
