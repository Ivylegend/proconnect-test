import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      {/* HERO-TEXT */}
      <div className="hero-text">
        <h1>
          Admission <br />{" "}
          <span className="red-text small-text"> and Financing </span> <br />
          <span className="small-text">Processing AI Portal</span>
        </h1>
        <button className="google btn">Sign up with your Google Account</button>
      </div>

      {/* FORM */}
      <form className="hero-form">
        <p className="red-text header">Login Here</p>
        <div className="input-container">
          <label htmlFor="email">Email address or username</label>
          <input type="email" />
          <p className="error-message"></p>
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" />
          <p className="error-message"></p>
        </div>
        <div className="check-div">
          <input type="checkbox" className="check-box" />
          <p className="remember">Remember me</p>
        </div>
        <div className="login-btn">
          <button className="small-btn">Login</button>
          <p>Don't have an account? <br />
            <Link to="/signup" className="red-text">Sign up</Link> here
          </p>
        </div>
      </form>
    </div>
  );
};

export default Hero;
