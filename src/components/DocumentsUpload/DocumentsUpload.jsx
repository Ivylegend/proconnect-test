import React from "react";
import Logo from "../../assets/images/Eldanic-logo.png";
import Background from "../Background/Background";
import UploadIcon from "../../assets/images/upload.png";
import { Link } from "react-router-dom";
import "./DocumentsUpload.css";

const dataValue = [1, 2, 3, 4, 5, 6, 7, 8];

const DocumentsUpload = ({ formData, setFormData }) => {
  return (
    <div className="sign-up-container">
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Background />
      </div>
      <div className="form-nav-logo">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="upload">
        <h2>Upload Documents</h2>
        <div className="upload_div">
          {dataValue.map((data, key) => {
            return (
              <div key={key}>
                <img src={UploadIcon} alt="" />
                <p>Drag or drop your document here to upload</p>
                <button className="btn_upload">
                  Choose File
                  <input type="file" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DocumentsUpload;
