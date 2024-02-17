import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pcp-logo-1.png";
import Buisness from "../../assets/images/company.png";
import Location from "../../assets/images/location.png";
import SocialIcons1 from "../../assets/images/Social icons1.png";
import SocialIcons2 from "../../assets/images/Social icons2.png";
import SocialIcons3 from "../../assets/images/Social icons3.png";
import SocialIcons4 from "../../assets/images/Social icons4.png";
import SocialIcons5 from "../../assets/images/Social icons5.png";
import SocialIcons6 from "../../assets/images/Social icons6.png";
import "./Footer.css";

const buisnessLinks = [
  {
    url: "",
    name: "Pricing",
  },
  {
    url: "",
    name: "List of Supported Schools",
  },
  {
    url: "",
    name: "Signify your interest",
  },
  {
    url: "",
    name: "Local loan",
  },
  {
    url: "",
    name: "Global Loan",
  },
  {
    url: "",
    name: "Privacy Policy",
  },
  {
    url: "",
    name: "Terms and Condition",
  },
];

const locationLinks = [
  {
    url: "",
    name: "Global HQ US",
  },
  {
    url: "",
    name: "Africa HQ Lagos",
  },
  {
    url: "",
    name: "Accra Office",
  },
  {
    url: "",
    name: "Kampala Office",
  },
  {
    url: "",
    name: "Nairobi Office",
  },
  {
    url: "",
    name: "Kigali Office",
  },
  {
    url: "",
    name: "Toronto Office",
  },
];

const socialIcons = [
  { name: SocialIcons1, url: "" },
  { name: SocialIcons2, url: "" },
  { name: SocialIcons3, url: "" },
  { name: SocialIcons4, url: "" },
  { name: SocialIcons5, url: "" },
  { name: SocialIcons6, url: "" },
];

const Footer = () => {
  return (
    <div className="app_footer">
      <div className="footer_top">
        <div className="footer_logo_div">
          <img src={Logo} alt="pcp-logo" />
          <p className="footer_logo_text">
            ProconnectPAY is an African Edu-FinTech Company that works with
            other financial institutions to drive adoption of Education-oriented
            Loans ProconnectPAY is legally registered in Nigeria and the United
            States. RC Number in Nigeria is{" "}
            <span style={{ color: "#1E4580" }}>
              1884617 (Proconnect Tech Solutions Limited) ,
            </span>{" "}
            Assigned Filling No in the United States is{" "}
            <span style={{ color: "#DB251A" }}>
              7044965 (ProconnectPAY EduFinTech Inc.)
            </span>
          </p>
        </div>

        <div>
          <p className="link_list_title">
            <img src={Buisness} alt="buisness" /> BUISNESS
          </p>
          <ul className="link_list">
            {buisnessLinks.map((footerLink) => {
              return (
                <Link key={footerLink.name} to={footerLink.url}>
                  <li className="link_item">{footerLink.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div>
          <p className="link_list_title">
            <img src={Location} alt="location" /> LOCATIONS
          </p>
          <ul className="link_list">
            {locationLinks.map((locationLink, index) => {
              return (
                <Link key={index} to={locationLink.url}>
                  <li className="link_item">{locationLink.name}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <p>@ 2024 Proconnectpay . All rights reserved</p>
        <div className="footer_icons">
          {socialIcons.map((icon, index) => {
            return (
              <Link key={index} to={icon.url}>
                <img src={icon.name} alt="icon" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
