import { useEffect, useState } from "react";
import GalleryAdd from "../../assets/images/gallery-add.png";
import "./AccountSetting.css";
import { useAuth } from "../../utils/AuthContext";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants";

const AccountSetting = () => {
  const [picture, setPicture] = useState(false);
  const [file, setFile] = useState(localStorage.getItem("profilePicture"));
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [savedPicture, setSavedPicture] = useState(
    localStorage.getItem("profilePicture")
  );

  const { token } = useAuth();

  useEffect(() => {
    setSavedPicture(localStorage.getItem("profilePicture"));
  }, [file]);

  async function getImage(event) {
    const newFile = event.target.files[0];

    if (newFile) {
      setFile(newFile);
      setPicture(true);

      const formData = new FormData();
      formData.append("photo", newFile); // Use newFile, not file

      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Token ${token}`);

      try {
        const response = await fetch(
          `${BASE_URL}user/upload-profile-photo/`,
          {
            method: "POST",
            headers: myHeaders,
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Profile picture uploaded successfully:", data);

          toast.success("Changed successfully!");
          setFile(data.data.photo);
        } else {
          console.error(
            "Error uploading profile picture:",
            response.statusText
          );
          toast.error("Error updating profile picture."); // Display error toast
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        toast.error("Error updating profile picture."); // Display error toast
      }
    }
  }

  const handleUpdateProfile = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${token}`);
  
    const raw = JSON.stringify({
      first_name: fullName,
      last_name: username,
      gender: "Male",
      middle_name: email,
      phone_number: phoneNumber,
      date_of_birth: "2000-02-10",
      customer: token,
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `${BASE_URL}user/save-profile/`,
        requestOptions
      );
  
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        toast.success("Profile updated successfully!");
      } else {
        const error = await response.text();
        console.error(error);
        toast.error("Error updating profile. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile. Please try again.");
    }
  };

  return (
    <div className="account_profile">
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
              {/* <img src={savedPicture || file} alt={file || savedPicture} /> */}
              <img src={file} alt="Uploaded Profile" />
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
          <label htmlFor="email">Email Address</label>
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
