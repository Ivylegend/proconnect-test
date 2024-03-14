import React, { useState } from "react";
import NIN from "../../components/NIN/NIN";
import Results from "../Results/Results";
import DocumentsUpload from "../../components/DocumentsUpload/DocumentsUpload";
import UploadIcon from "../../assets/images/upload.png";
import "./Review.css";

const dataValue = [
  { name: "WAEC Certificate", type: "waec" },
  { name: "NIN Slip", type: "nin" },
  { name: "NECO Certificate", type: "neco" },
  { name: "JAMB Result Slip", type: "jamb" },
  { name: "Passport Photograph - white background", type: "passport" },
  {
    name: "State of origin affidavit / certificate",
    type: "birth_certificate",
  },
  { name: "Certificate of Origin", type: "certificate_of_origin" },
];

const Review = ({ formData, onNextButtonClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [reviewPage, setReviewPage] = useState(0);
  const [uploads, setUploads] = useState([]);

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
    if (reviewPage === 3) {
      onNextButtonClick();
    } else {
      setReviewPage(reviewPage + 1);
    }
  };

  const renderReviewPage = () => {
    switch (reviewPage) {
      case 0:
        return (
          <div className="app_review_nin">
            {/* NIN REVIEW */}
            <h2 style={{ textAlign: "center" }}>NIN INFORMATION</h2>
            <div className="review-nin">
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
          <div className="review_results">
            {/* OLEVEL REVIEW */}
            <h2 className="result_title center">O'level Result</h2>

            <div className="review-result-div">
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
          <div className="review_results">
            {/* JAMB REVIEW */}
            <h2 className="result_title center">JAMB Result</h2>

            <div className="review-result-div">
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
          <div className="review_documents">
            {/* UPLOADED DOCUMENTS REVIEW */}
            <h2>Uploaded Documents</h2>
            <div className="review_upload_div">
              {dataValue.map((data, index) => {
                const upload = uploads[index] || {};
                return (
                  <div key={data.name}>
                    <b>{data.name}</b>
                    <img src={UploadIcon} alt="" />
                    <button className="btn_upload">
                      View File
                      <input type="file" accept=".pdf, .png, .jpg" />
                    </button>
                    {upload.picture && (
                      <span className="uploaded-doc">
                        <small>
                          <p>{upload.fileName}</p>
                          <p>{(upload.fileSize / 1024).toFixed(2)} KB</p>
                        </small>
                        <small>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_644_748)">
                              <path
                                d="M8.5 0.625C4.42679 0.625 1.125 3.92703 1.125 8C1.125 12.073 4.42703 15.375 8.5 15.375C12.573 15.375 15.875 12.073 15.875 8C15.875 3.92703 12.573 0.625 8.5 0.625ZM6.78531 12.425L6.7804 12.4201L6.77622 12.425L3.3375 8.885L5.06546 7.12385L6.78064 8.88992L11.9431 3.57525L13.6625 5.34475L6.78531 12.425Z"
                                fill="#DB251A"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_644_748">
                                <rect
                                  width="15.7333"
                                  height="15.7333"
                                  fill="white"
                                  transform="translate(0.632812 0.133301)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </small>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
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
      <h2 className="review_header">Review Your School Application Details</h2>
      <div>{renderReviewPage()}</div>
      <button className="btn review-btn" onClick={handleNextButtonClick}>
        {reviewPage === 3 ? "Continue" : "Next"}
      </button>
    </div>
  );
};

export default Review;
