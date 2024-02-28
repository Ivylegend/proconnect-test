import React, { useState } from "react";
import NIN from "../../components/NIN/NIN";
import Results from "../Results/Results";
import DocumentsUpload from "../../components/DocumentsUpload/DocumentsUpload";

const Review = ({ formData, onNextButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [reviewPage, setReviewPage] = useState(0);

  const courses = [
    {
      title: "Mathematics",
      grade: "A1",
    },
    {
      title: "English Language",
      grade: "A1",
    },
    {
      title: "Biology",
      grade: "A1",
    },
    {
      title: "Chemistry",
      grade: "A1",
    },
    {
      title: "Physics",
      grade: "A1",
    },
    {
      title: "Marketing",
      grade: "A1",
    },
    {
      title: "Further Mathematics",
      grade: "A1",
    },
    {
      title: "Civic Education",
      grade: "A1",
    },
    {
      title: "Book Keping",
      grade: "A1",
    },
  ];

  const handleNextButtonClick = () => {
    // If it's the last review page, call the parent component's onNextButtonClick function
    if (reviewPage === 3) {
      onNextButtonClick();
    } else {
      // Otherwise, proceed to the next review page
      setReviewPage(reviewPage + 1);
    }
  };

  const renderReviewPage = () => {
    switch (reviewPage) {
      case 0:
        return (
          <div className="app_nin">
            {/* NIN REVIEW */}
            <h2 style={{ textAlign: "center" }}>NIN INFORMATION</h2>
            <div className="nin-info">
              <div className="nin-text">
                <p className="title">Full Name</p>
                <p className="nin-detail">{formData.name}</p>
              </div>
              <div className="nin-text">
                <p className="title">Date of Birth</p>
                <p className="nin-detail">{formData.dateOfBirth}</p>
              </div>
              <div className="nin-text">
                <p className="title">House Address</p>
                <p className="nin-detail">Alabata road, akoka</p>
              </div>
              <div className="nin-text">
                <p className="title">Gender</p>
                <p className="nin-detail">{formData.gender}</p>
              </div>
              <div className="nin-text">
                <p className="title">State of Origin</p>
                <p className="nin-detail">Kwara State</p>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="app_results">
            {/* OLEVEL REVIEW */}
            <h2 className="result_title center">O'level Result</h2>

            <div className="result-div">
              {courses.map((course, index) => {
                return (
                  <span key={index}>
                    <p className="course_title">{course.title}</p>
                    <p>{course.grade}</p>
                  </span>
                );
              })}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="app_results">
            {/* JAMB REVIEW */}
            <h2 className="result_title center">JAMB Result</h2>

            <div className="result-div">
              {courses.map((course, index) => {
                return (
                  <span key={index}>
                    <p className="course_title">{course.title}</p>
                    <p>{course.grade}</p>
                  </span>
                );
              })}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="app_documents">
            {/* UPLOADED DOCUMENTS REVIEW */}
            <DocumentsUpload />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        Review Your School Application Details
      </h2>
      <div>{renderReviewPage()}</div>
      <button className="wide-btn next-btn btn" onClick={handleNextButtonClick}>
        {reviewPage === 3 ? "Continue" : "Next"}
      </button>
    </div>
  );
};

export default Review;
