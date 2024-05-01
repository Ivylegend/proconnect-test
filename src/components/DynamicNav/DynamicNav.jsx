import "./DynamicNav.css";
import Profile from "../../assets/images/Profile.png";
import Down from "../../assets/images/chevron_down.png";
import Bell from "../../assets/images/notification icon.png";
import { useAuth } from "../../utils/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const DynamicNav = (props) => {
  const { user, signOut } = useAuth();
  const { toggleSideNav } = props;

  // const profilePicture = user.isGoogleSignIn
  //   ? user.googlePicture
  //   : user.localPicture || Profile;

  const email = sessionStorage.getItem("email");

  const history = useNavigate();
  const handleSignOut = () => {
    // Clear session storage
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("googleToken"); // Clear other session data as needed

    // Sign out using AuthContext
    signOut();

    // Redirect to the home page
    history("/");
  };

  return (
    <div className="dynamic">
      <h2>{props.title}</h2>
      {/* {user && ( */}
      <div className="dynamic-end">
        <span className="profile-bg">
          {/* <img src={picture} alt="profile-picture" /> */}
          <img src={Profile} alt="profile-picture" />
        </span>
        <p className="usermail">{email}</p>
        {/* <p>{user.isGoogleSignIn ? user.googleName : user.localName}</p>
          <p>{user.isGoogleSignIn ? user.googleEmail : user.localEmail}</p> */}
        <img className="chevron-down" src={Down} alt="chevron-down" />
        <span className="notifs">
          <img src={Bell} alt="notification-bell" />
          <span className="notif-circle"></span>
        </span>
        <button onClick={handleSignOut} className="border rounded-md border-black">Sign Out</button>
        <div className="mobile-menu_btn">
          <MdMenu onClick={() => toggleSideNav()} />
        </div>
      </div>
      {/* // )} */}
    </div>
  );
};

export default DynamicNav;
