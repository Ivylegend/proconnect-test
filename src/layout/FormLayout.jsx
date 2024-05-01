import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";
// import Logo from "../assets/images/elda-logo.png";
import Logo from "../assets/images/5.png";

const FormLayout = ({ children }) => {
  return (
    <div>
      <div className="absolute -z-10">
        <Background />
      </div>
      <div className="form-nav-logo bg-white">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FormLayout;
