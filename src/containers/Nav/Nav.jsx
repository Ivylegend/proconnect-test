import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/images/5.png'
import './Nav.css'

const Nav = () => {
  return (
    <div className="h-[100px] pr-[30px] flex items-center justify-between bg-white sm:h-[150px] sm:pr-[80px] overflow-y-hidden">
      <div className="nav-logo">
        <img src={Logo} alt="logo"  />
      </div>
      <Link to='/signup' target="blank"><button className="small-btn">Sign Up</button></Link> 
    </div>
  );
};

export default Nav;
