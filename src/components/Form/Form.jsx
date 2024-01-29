import React, { useState, useEffect } from "react";
import OtherInfo from "../Success/Success";
import NIN from "../NIN/NIN";
import Payment from "../Payment/Payment";
import "./Form.css";
import Olevel from "../Olevel/Olevel";
import ReturnBtn from "../../assets/images/Iconsback.png";
import Jamb from "../Jamb/Jamb";
import ApplyingTo from "../ApplyingTo/ApplyingTo";
import NameOfUni from "../NameOfUni/NameOfUni";
import WatchVideo from "../WatchVideo/WatchVideo";
import CourseOptions from "../CourseOptions/CourseOptions";
import CourseRequirements from "../CourseRequirements/CourseRequirements";
import ReferenceInfo from "../ReferenceInfo/ReferenceInfo";
import DocumentsUpload from "../DocumentsUpload/DocumentsUpload";
import FinanceOptions from "../FinanceOptions/FinanceOptions";
import EducationLoans from "../EducationLoans/EducationLoans";
import LoanCalculator from "../LoanCalculator/LoanCalculator";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nameOfInstitution: "",
    amount: "",
    cardDetails: "",
    cvv: "",
    expiryDate: "",
    nin: "",
    typeOfExam: "",
    examinationNumber: "",
    yearWritten: "",
    gender: "",
    stateOfOrigin: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const [hasOwnButton, setHasOwnButton] = useState(false);

  const FormTitles = [
    "Payment",
    "NIN",
    "Olevel",
    "Jamb",
    "Applying to",
    "Name of uni",
    "watch video",
    "course options",
    "course requirements",
    "Reference Info",
    "Upload Documents",
    "Finance Options",
    "Education Loan",
    "Loan Calculator",
    "Application Form",
    "Other",
  ];

  useEffect(() => {
    // Load saved form data and current page from localStorage on component mount
    const savedFormData = JSON.parse(localStorage.getItem("formData"));
    const savedPage = parseInt(localStorage.getItem("currentPage"), 10);
    const savedHasOwnButton = localStorage.getItem("hasOwnButton") === "true";

    if (savedFormData) {
      setFormData(savedFormData);
    }

    if (!isNaN(savedPage)) {
      setPage(savedPage);
    }
    setHasOwnButton(savedHasOwnButton);
  }, []);

  useEffect(() => {
    // Save form data, current page, and hasOwnButton to localStorage whenever they change
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("currentPage", String(page));
    localStorage.setItem("hasOwnButton", String(hasOwnButton));
  }, [formData, page, hasOwnButton]);

  const handlePageChange = (newPage) => {
    setPage(newPage);

    setHasOwnButton(false);
  };

  const handleNextButtonClick = () => {
    if (hasOwnButton) {
      // Handle button click logic for pages with their own buttons
      // For example, set hasOwnButton to true and handle the button click
      setHasOwnButton(true);
      // Your additional logic for pages with their own buttons goes here
    } else {
      // Handle "Next" button click logic for pages without their own buttons
      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        handlePageChange(page + 1);
      }
    }
  };

  const PageDisplay = () => {
    let component;
    let hasOwnButton = false;

    if (page === 0) {
      component = (
        <Payment
          formData={formData}
          setFormData={setFormData}
          onButtonClick={() => setHasOwnButton(true)}
        />
      );
    } else if (page === 1) {
      component = <NIN formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      component = <Olevel formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      component = <Jamb formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      component = <ApplyingTo formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      component = <NameOfUni formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      component = <WatchVideo formData={formData} setFormData={setFormData} />;
    } else if (page === 7) {
      component = (
        <CourseOptions formData={formData} setFormData={setFormData} />
      );
    } else if (page === 8) {
      component = (
        <CourseRequirements formData={formData} setFormData={setFormData} />
      );
    } else if (page === 9) {
      component = (
        <ReferenceInfo formData={formData} setFormData={setFormData} />
      );
    } else if (page === 10) {
      component = (
        <DocumentsUpload formData={formData} setFormData={setFormData} />
      );
    } else if (page === 11) {
      component = (
        <FinanceOptions formData={formData} setFormData={setFormData} />
      );
    } else if (page === 12) {
      component = (
        <EducationLoans formData={formData} setFormData={setFormData} />
      );
    } else if (page === 13) {
      component = (
        <LoanCalculator formData={formData} setFormData={setFormData} />
      );
    } else if (page === 14) {
      component = (
        <ApplicationForm formData={formData} setFormData={setFormData} />
      );
    } else {
      component = <OtherInfo formData={formData} setFormData={setFormData} />;
    }

    return { component, hasOwnButton };
  };

  return (
    <div className="form">
      {/* <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div> */}
      <div className="form-container">
        {/* <div className="header">
          <h2>{FormTitles[page]}</h2>
        </div> */}
        <div className="body">{PageDisplay().component}</div>
        <div className="footer">
          {PageDisplay().hasOwnButton ? (
            /* Render the button from the component */
            PageDisplay().component.props.children.props.children
          ) : (
            <>
              <button
                disabled={page == 0}
                // onClick={() => {
                //   setPage((currPage) => currPage - 1);
                // }}
                onClick={() => handlePageChange(page - 1)}
                className="prev-btn"
              >
                <img src={ReturnBtn} alt="return-button" />
              </button>
              <div className="next-btn">
                <button
                  // onClick={() => {
                  //   if (page === FormTitles.length - 1) {
                  //     alert("FORM SUBMITTED");
                  //     console.log(formData);
                  //   } else {
                  //     // setPage((currPage) => currPage + 1);
                  //     handlePageChange(page + 1);
                  //   }
                  // }}
                  onClick={handleNextButtonClick}
                  className="wide-btn btn"
                >
                  {page === FormTitles.length - 1
                    ? "Submit Application Form"
                    : "Next"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
