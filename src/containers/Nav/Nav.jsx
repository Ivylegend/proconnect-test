import React from "react";
import { Link } from "react-router-dom";
// import Logo from '../../assets/images/elda-logo.png'
import Logo from '../../assets/images/5.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className="navbar-home">
      <div className="nav-logo">
        <img src={Logo} alt="logo"  />
      </div>
      <Link to='/signup' target="blank"><button className="small-btn">Sign Up</button></Link> 
    </div>
  );
};

export default Nav;
