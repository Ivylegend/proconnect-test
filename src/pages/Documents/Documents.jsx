import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/Background/DynamicNav/DynamicNav";
import "./Documents.css";

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
  {
    title: "Passport Photograph",
    text: "Upload your Passport Photograph",
    number: "5",
  },
];

const Documents = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Documents" />
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
