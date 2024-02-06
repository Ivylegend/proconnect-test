import { useEffect, useState } from "react";
import GalleryAdd from "../../assets/images/gallery-add.png";
import "./AccountSetting.css";

const AccountSetting = () => {
  const [picture, setPicture] = useState(false);
  const [file, setFile] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [savedPicture, setSavedPicture] = useState(
    localStorage.getItem("profilePicture")
  );

  useEffect(() => {
    setSavedPicture(localStorage.getItem("profilePicture"));
  }, [file]);

  const getImage = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
    setPicture(true);
  };

  const handleUpdateProfile = () => {
    localStorage.setItem("profilePicture", file);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("phoneNumber", phoneNumber);
  };

  // const savedPicture = localStorage.getItem("profilePicture");

  return (
    <div>
      <div className="profile-pics">
        <p className="pp">Your Profile Picture</p>
        <span>
          {!picture ? (
            <div className="pics-upload">
              <input type="file" onChange={getImage} className="file-upload" />
              <img src={GalleryAdd} alt="" />
              <p>Upload your photo</p>
            </div>
          ) : (
            <div className="my-pics">
              <img src={savedPicture || file} alt={file || savedPicture} />
            </div>
          )}
        </span>
      </div>
      <hr className="profile-line" />
      <form action="" className="app_profileForm">
        <div className="profile_form">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            placeholder="Please enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="profile_form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="profile_form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Please enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="profile_form">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Please enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </form>
      <div className="buttons">
        <button className="update btn" onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <p className="reset btn">Reset</p>
      </div>
    </div>
  );
};

export default AccountSetting;
