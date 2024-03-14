import React, { useState, useEffect } from "react";
import Success from "../Success/Success";
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
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Review from "../../containers/Review/Review";

function Form() {
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState("Private University");
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
    success: "true",
  });
  const [hasOwnButton, setHasOwnButton] = useState(false);
  const [nextStep, setNextStep] = useState(1);

  // FORM TITLES
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
    "Review",
    "Application Form",
    "Success",
  ];

  // GETTING STORED DATA
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

  // STORING DATA TO LOCAL STORAGE
  useEffect(() => {
    // Save form data, current page, and hasOwnButton to localStorage whenever they change
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("currentPage", String(page));
    localStorage.setItem("hasOwnButton", String(hasOwnButton));
  }, [formData, page, hasOwnButton]);

  // HANDLE PAGE CHANGE
  const handlePageChange = (newPage) => {
    setPage(newPage);
    setHasOwnButton(false);
  };

  // HANDLE NEXT BUTTON CLICKS
  const handleNextButtonClick = () => {
    if (hasOwnButton) {
      setHasOwnButton(true);
      // Your additional logic for pages with their own buttons goes here
    } else {
      if (page === FormTitles.length - 1) {
      } else {
        handlePageChange(page + 1);
      }
    }
  };

  // FORM SUBMISSION
  const handleFormSubmission = () => {
    toast.success("APPLICATION SUBMITTED");
    console.log(formData);
    handlePageChange(page + 1);
    localStorage.setItem("profileCompleted", "true");
  };

  // BUTTON RENDERING
  const renderButtons = () => {
    if (page === 0) {
      return;
    } else if (page === FormTitles.length - 3) {
      return (
        <>
          <button
            onClick={() => handlePageChange(page - 1)}
            className="prev-btn"
          >
            <img src={ReturnBtn} alt="arrow left" />
          </button>
        </>
      );
    } else if (page === FormTitles.length - 2) {
      return (
        <>
          <button
            onClick={() => handlePageChange(page - 1)}
            className="prev-btn"
          >
            <img src={ReturnBtn} alt="return button" />
          </button>
          {page === FormTitles.length - 2 && (
            <div className="next-btn">
              <button onClick={handleFormSubmission} className="btn wide-btn">
                Submit
              </button>
            </div>
          )}
        </>
      );
    } else if (page === FormTitles.length - 1) {
      return (
        <>
          <button
            onClick={() => handlePageChange(page - 1)}
            className="prev-btn"
          >
            <img src={ReturnBtn} alt="arrow left" />
          </button>
          <Link to="/dashboard" className="next-btn">
            <button className="wide-btn btn">Return to Dashboard</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() => handlePageChange(page - 1)}
            className="prev-btn btn"
          >
            <img src={ReturnBtn} alt="previous-button" />
          </button>
          <div className="next-btn">
            {/* Existing "Next" button logic for other pages */}
            <button
              onClick={handleNextButtonClick}
              className="btn next-btn wide-btn"
            >
              Next
            </button>
          </div>
        </>
      );
    }
  };

  // HANDLE PAYMENT
  const handlePayment = (paymentData) => {
    setPage(nextStep);
    setNextStep(1);
  };

  const handleReview = () => {
    handlePageChange(page + 1);
  };

  // PAGE DISPLAY
  const PageDisplay = () => {
    let component;
    let hasOwnButton = false;

    if (page === 0) {
      component = (
        <Payment
          formData={formData}
          setFormData={setFormData}
          onButtonClick={() => setHasOwnButton(true)}
          handlePayment={handlePayment}
        />
      );
    } else if (page === 1) {
      component = <NIN formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      component = <Olevel formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      component = <Jamb formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      component = (
        <ApplyingTo
          formData={formData}
          setFormData={setFormData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      );
    } else if (page === 5) {
      component = (
        <NameOfUni
          formData={formData}
          setFormData={setFormData}
          selectedCategory={selectedCategory}
        />
      );
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
        <Review
          formData={formData}
          setFormData={setFormData}
          onNextButtonClick={handleReview}
        />
      );
    } else if (page === 15) {
      component = (
        <ApplicationForm formData={formData} setFormData={setFormData} />
      );
    } else {
      component = <Success formData={formData} setFormData={setFormData} />;
    }

    return { component, hasOwnButton };
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="body">{PageDisplay().component}</div>
        <div className="footer">{renderButtons()}</div>
      </div>
    </div>
  );
}

export default Form;
