import React, { useState } from "react";
import UploadIcon from "../../assets/images/upload.png";
import "./DocumentsUpload.css";

// const dataValue = [
//   "WAEC Certificate",
//   "NIN Slip",
//   "NECO Certificate",
//   "JAMB Result Slip",
//   "Passport Photograph - white background",
//   "State of origin affidavit / certificate",
//   "Certificate of Origin",
// ];

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

const DocumentsUpload = ({ formData, setFormData }) => {
  const [picture, setPicture] = useState(false);
  const [file, setFile] = useState();
  const [uploads, setUploads] = useState([]);

  const handleFileChange = async (index, event) => {
    const newUploads = [...uploads];
    const file = event.target.files[0];

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 881e119b08c9c22234180e6193394d848aaa994d"
    );
    myHeaders.append("Cookie", "sessionid=jzs5i5nqdcasueaq9chtoji3c55nvpqb");

    var formdata = new FormData();
    formdata.append("file", file, "[PROXY]");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://dev-api.eldanic.com/api/v1/edu/upload-document/?document_type=nin",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    const fileName = file.name;
    const fileSize = file.size;

    const reader = new FileReader();
    reader.onload = () => {
      newUploads[index] = {
        file: reader.result,
        picture: true,
        fileName,
        fileSize,
      };
      setUploads(newUploads);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="sign-up-container">
      <div className="upload">
        <h2>Upload Documents</h2>
        <div className="upload_div">
          {dataValue.map((data, index) => {
            const upload = uploads[index] || {};
            return (
              <div key={data.name}>
                <b>{data.name}</b>
                <img src={UploadIcon} alt="" />
                <button className="btn_upload">
                  Choose File
                  <input
                    type="file"
                    accept=".pdf, .png, .jpg"
                    onChange={(event) => handleFileChange(index, event)}
                  />
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
          {/* {!picture ? (
            <div className="pics-upload">
              <input type="file" onChange={getImage} className="file-upload" />
              <p>Upload your photo</p>
            </div>
          ) : (
            <div className="my-pics">
              <img src={file} alt={file} />
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DocumentsUpload;
