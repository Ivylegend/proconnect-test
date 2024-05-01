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
import SocialIcons6 from "../../assets/images/youtube.png";
import "./Footer.css";

const businessLinks = [
  {
    url: "https://proconnectpay.com/pricing",
    name: "Service Fee Pricing",
  },
  {
    url: "https://proconnectpay.com/supported-schools",
    name: "List of Supported Schools",
  },
  {
    url: "https://proconnectpay.com/interest",
    name: "Signify your interest",
  },
  {
    url: "https://proconnectpay.com/local-loan",
    name: "Local loan",
  },
  {
    url: "https://proconnectpay.com/global-loan",
    name: "Global Loan",
  },
  {
    url: "https://proconnectpay.com/privacy-policy",
    name: "Privacy Policy",
  },
  {
    url: "https://proconnectpay.com/global-loan#terms-conditions",
    name: "Terms and Conditions",
  },
];

const locationLinks = [
  {
    url: "https://proconnectpay.com/contact",
    name: "Global HQ US",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Africa HQ Lagos",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Accra Office",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Kampala Office",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Nairobi Office",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Kigali Office",
  },
  {
    url: "https://proconnectpay.com/contact",
    name: "Toronto Office",
  },
];

const socialIcons = [
  { name: SocialIcons1, url: "https://web.facebook.com/proconnectpay" },
  { name: SocialIcons3, url: "https://twitter.com/ProconnectPAY" },
  { name: SocialIcons4, url: "https://www.instagram.com/proconnectpay/" },
  { name: SocialIcons5, url: "https://ng.linkedin.com/company/proconnectpay" },
  {
    name: SocialIcons6,
    url: "https://www.youtube.com/channel/UCsX-weJpSWORcMUAQ-g0HdA",
  },
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
            Loans.{" "}
          </p>
          <p className="footer_logo_text">
            ProconnectPAY is legally registered in Nigeria and the United
            States. RC Number in Nigeria is{" "}
            <span className="text-[#1E4580]">
              1884617 (Proconnect Tech Solutions Limited) ,
            </span>{" "}
            Assigned Filling No in the United States is{" "}
            <span className="text-[#DB251A]">
              7044965 (ProconnectPAY EduFinTech Inc.)
            </span>
          </p>
        </div>

        <div>
          <p className="link_list_title">
            <img src={Buisness} alt="buisness" /> BUISNESS
          </p>
          <ul className="link_list">
            {businessLinks.map((footerLink) => {
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
