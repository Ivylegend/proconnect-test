import "./DynamicNav.css";
import Profile from "../../assets/images/Profile.png";
import Down from "../../assets/images/chevron_down.png";
import Bell from "../../assets/images/notification icon.png";
import { useAuth } from "../../utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const DynamicNav = (props) => {
  const { user, signOut } = useAuth();

  const history = useNavigate();

  if (!user) {
    // Redirect unauthenticated users to the login page
    history('/');
    return null; // Render nothing while redirecting
  }

  return (
    <div className="dynamic">
      <h2>{props.title}</h2>
      {user && (
        <div className="dynamic-end">
          <span className="profile-bg">
            <img src={user.picture} alt="profile-picture" />
          </span>
          <p>{user.name}</p>
          <img src={Down} alt="chevron-down" />
          <span className="notifs">
            <img src={Bell} alt="notification-bell" />
            <span className="notif-circle"></span>
          </span>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default DynamicNav;
