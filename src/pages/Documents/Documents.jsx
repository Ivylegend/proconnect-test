import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import "./Documents.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const docs = [
  {
    title: "NIN",
    text: "Upload your NIN slip",
    number: "1",
  },
  {
    title: "JAMB RESULT",
    text: "Upload your JAMB RESULT",
    number: "2",
  },
  {
    title: "O'level RESULT",
    text: "Upload your O'level RESULT",
    number: "3",
  },
  {
    title: "Passport Photograph",
    text: "Upload your Passport Photograph",
    number: "4",
  },
];

const Documents = () => {
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
          <p className="doc-header">Documents</p>
          <div className="documents">
            {docs.map((doc, index) => {
              return (
                <div className="doc-div" key={index}>
                  <div className="number_title">
                    <span className="number">{doc.number}</span>
                    <div className="doc_title-div">
                      <span className="doc_title">{doc.title}</span>
                      <span>{doc.text}</span>
                    </div>
                  </div>
                  <button className="btn btn_upload">
                    Choose File
                    <input type="file" />
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
