import "./DynamicNav.css";
import Profile from "../../../assets/images/profile.png";
import Down from "../../../assets/images/chevron_down.png";
import Bell from "../../../assets/images/notification icon.png";

const DynamicNav = (props) => {
  return (
    <div className="dynamic">
      <h2>{props.title}</h2>
      <div className="dynamic-end">
        <span className="profile-bg">
          <img src={Profile} alt="profile-picture" />
        </span>
        <p>Samuel John</p>
        <img src={Down} alt="chevron-down" />
        <span>
            <img src={Bell} alt="notification-bell" />
        </span>
      </div>
    </div>
  );
};

export default DynamicNav;
