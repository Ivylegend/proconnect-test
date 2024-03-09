import Checkmark from "../../assets/images/checkmark.png";
import "./ApplicationChecklist.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [applicationCompleted, setApplicationCompleted] = useState(false);

  useEffect(() => {
    // Check if profile completion status is stored in localStorage
    const storedProfileCompletion = localStorage.getItem("profileCompleted");
    if (storedProfileCompletion) {
      setApplicationCompleted(true);
    }
  }, []);

  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <div className="application-completed">
            {applicationCompleted
              ? "Application Completed"
              : "Application Not Completed"}
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="check">Checklist</p>
          <div className="checklist">
            <div>
              {checkListData.map((data, index) => {
                return (
                  <span key={index}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name=""
                      id={data}
                      checked={applicationCompleted}
                      disabled={applicationCompleted}
                      readOnly
                    />
                    <p>{data}</p>
                  </span>
                );
              })}
            </div>
            <div>
              {checkListData2.map((data2, index) => {
                return (
                  <span key={index}>
                    <input
                      type="checkbox"
                      name=""
                      id={data2}
                      checked={applicationCompleted}
                      disabled={applicationCompleted}
                      readOnly
                    />
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
