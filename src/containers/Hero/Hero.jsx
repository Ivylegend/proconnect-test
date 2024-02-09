import { useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import SignIn from "../../components/SignIn";
import GoogleSignInButton from "../../../GoogleSignInButton";
import GoogleAuth from "../../components/GoogleAuth";
import axios from "axios";

const Hero = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // const token = localStorage.getItem("authToken");
  // console.log(token);

  // fetch(
  //   "https://dev-api.eldanic.com/api/v1/user/fetch-nin/?nin_number=13482049208&dob=2003-09-10",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Token ${token}`,
  //     },
  //   }
  // )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.json();
  //   })
  //   .then((data) => {
  //     // Handle the API response data
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("There was a problem with the fetch operation:", error);
  //   });

  return (
    <div className="hero">
      {/* HERO-TEXT */}
      <div className="hero-text">
        <h1>
          Admission <br />{" "}
          <span className="red-text small-text"> and Financing </span> <br />
          <span className="small-text">Processing AI Portal</span>
        </h1>
        {/* <GoogleSignInButton /> */}
        <GoogleAuth />
      </div>

      {/* FORM */}
      <SignIn />
    </div>
  );
};

export default Hero;
