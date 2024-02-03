import { useState } from "react";
import GalleryAdd from "../../assets/images/gallery-add.png";
import "./AccountSetting.css";

const AccountSetting = () => {
  const [picture, setPicture] = useState(false);
  const [file, setFile] = useState();

  // const getImage = (event) => {
  //   setFile(URL.createObjectURL(event.target.files[0]));
  //   setPicture(true);
  // };

  const getImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result); // Store the Data URL in the state
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUpdateProfile = () => {
    localStorage.setItem("profilePicture", file);
    setFile(localStorage.getItem("profilePicture")); // Fetch and set again to trigger re-render
  };

  // const handleUpdateProfile = () => {
  //   localStorage.setItem("profilePicture", file)
  //   console.log(file);
  // };

  const savedPicture = localStorage.getItem("profilePicture");

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
              <img src={file} alt={file} />
            </div>
          )}
        </span>
      </div>
      <hr className="profile-line" />
      <form action="" className="app_profileForm">
        <div className="profile_form">
          <label htmlFor="name">Full name</label>
          <input type="text" placeholder="Please enter your full name" />
        </div>
        <div className="profile_form">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Please enter your email" />
        </div>
        <div className="profile_form">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Please enter your username" />
        </div>
        <div className="profile_form">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Please enter your phone number"
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
