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

const ApplicationChecklist = (formData, setFormData) => {
  const [applicationCompleted, setApplicationCompleted] = useState(false);

  useEffect(() => {
    const storedProfileCompletion = localStorage.getItem("profileCompleted");
    if (storedProfileCompletion === true) {
      setApplicationCompleted(true);
    }
  }, []);
  

  // Set up checkListData and checkListData2 with completion status
  const checkListDataWithCompletion = checkListData.map((item) => ({
    label: item,
    completed: formData[item] !== "",
  }));
  const checkListData2WithCompletion = checkListData2.map((item) => ({
    label: item,
    completed: formData[item] !== "",
  }));

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
              {/* {checkListData.map((data, index) => {
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
              })} */}

              {/* // In the render function, map over checklists with completion status */}
              {checkListDataWithCompletion.map((data, index) => (
                <span key={index}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={data.completed}
                    disabled={applicationCompleted}
                    readOnly
                  />
                  <p>{data.label}</p>
                </span>
              ))}
            </div>
            <div>
              {/* {checkListData2.map((data2, index) => {
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
              })} */}

              {checkListData2WithCompletion.map((data, index) => (
                <span key={index}>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={data.completed}
                    disabled={applicationCompleted}
                    readOnly
                  />
                  <p>{data.label}</p>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChecklist;
