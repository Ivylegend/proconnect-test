import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import "./Documents.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../utils/AuthContext";

const docs = [
  {
    title: "NIN",
    text: "Upload your NIN slip",
    number: "1",
    submitted: "nin_submitted",
  },
  {
    title: "JAMB RESULT",
    text: "Upload your JAMB RESULT",
    number: "2",
    submitted: "jamb_submitted",
  },
  {
    title: "WAEC Certificate",
    text: "Upload your O'level RESULT here",
    number: "3",
    submitted: "waec_submitted",
  },
  {
    title: "NECO Certificate",
    text: "Upload your O'level Result here",
    number: "4",
    submitted: "neco_submitted",
  },
  {
    title: "Passport Photograph",
    text: "Upload your Passport Photograph here",
    number: "5",
    submitted: "passport_submitted",
  },
  {
    title: "Birth Certificate",
    text: "Upload your original copy of your Birth Certificate here",
    number: "6",
    submitted: "birth_certificate_submitted",
  },
  {
    title: "Certificate of Origin",
    text: "Upload your original copy of your Certificate here",
    number: "7",
    submitted: "certificate_of_origin_submitted",
  },
];

const Documents = () => {
  const [submissionStatus, setSubmissionStatus] = useState([{}]);
  const history = useNavigate();

  const { token } = useAuth();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://dev-api.eldanic.com/api/v1/user/document-uploads/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { status, message, data } = result;
        setSubmissionStatus(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <p className="doc-header">Upload these Documents</p>
          <div className="documents">
            {docs.map((doc, index) => {
              const isSubmitted = submissionStatus[`${doc.submitted}`];
              return (
                <div className="doc-div" key={index}>
                  <div className="number_title">
                    <span className="number">{doc.number}</span>
                    <div className="doc_title-div">
                      <span className="doc_title">{doc.title}</span>
                      <span>{doc.text}</span>
                    </div>
                  </div>
                  <button
                    className={`btn btn_upload ${
                      isSubmitted && "btn_upload_success"
                    }`}
                  >
                    {isSubmitted ? "Uploaded" : "Not Uploaded"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
