import DynamicNav from "../../components/DynamicNav/DynamicNav";
import SideNav from "../../containers/SideNav/SideNav";
import Checkmark from '../../assets/images/checkmark.png'
import './ApplicationChecklist.css';

const ApplicationChecklist = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Application School Checklist" />
        <div className="dashboard">
          <div className="application-completed">
            Application Completed
            <img src={Checkmark} alt="checkmark" />
          </div>
          <p className="check">Checklist</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationChecklist;
