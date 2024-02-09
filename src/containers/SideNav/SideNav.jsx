import "./SideNav.css";
import Logo from "../../assets/images/elda-logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.4975 0.112793H11.5018C14.0525 0.112793 15.4925 1.55954 15.5 4.11029V11.1153C15.5 13.6653 14.0525 15.1128 11.5018 15.1128H4.4975C1.94675 15.1128 0.5 13.6653 0.5 11.1153V4.11029C0.5 1.55954 1.94675 0.112793 4.4975 0.112793ZM8.0368 12.0078C8.36005 12.0078 8.6293 11.7678 8.6593 11.4453V3.80279C8.6893 3.57029 8.57755 3.33704 8.37505 3.21029C8.1643 3.08279 7.9093 3.08279 7.70755 3.21029C7.5043 3.33704 7.39255 3.57029 7.4143 3.80279V11.4453C7.45255 11.7678 7.7218 12.0078 8.0368 12.0078ZM11.4875 12.0078C11.8025 12.0078 12.0718 11.7678 12.11 11.4453V8.98529C12.1318 8.74454 12.02 8.5203 11.8168 8.39279C11.615 8.2653 11.36 8.2653 11.15 8.39279C10.9468 8.5203 10.835 8.74454 10.865 8.98529V11.4453C10.8951 11.7678 11.1643 12.0078 11.4875 12.0078ZM5.16427 11.4453C5.13427 11.7678 4.86502 12.0078 4.54177 12.0078C4.21927 12.0078 3.94927 11.7678 3.92002 11.4453V6.26279C3.89752 6.02954 4.00927 5.79779 4.21252 5.67029C4.41427 5.54279 4.67002 5.54279 4.87252 5.67029C5.07427 5.79779 5.18752 6.02954 5.16427 6.26279V11.4453Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/dashboard",
  },
  {
    name: "Application Checklist",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.598 2.71049C1.5 3.80999 1.5 5.57699 1.5 9.11249C1.5 12.648 1.5 14.4157 2.598 15.5137C3.6975 16.6125 5.4645 16.6125 9 16.6125C12.5355 16.6125 14.3033 16.6125 15.4012 15.5137C16.5 14.4165 16.5 12.648 16.5 9.11249C16.5 5.57699 16.5 3.80924 15.4012 2.71049C14.304 1.61249 12.5355 1.61249 9 1.61249C5.4645 1.61249 3.69675 1.61249 2.598 2.71049ZM7.908 5.75024C7.95892 5.69671 7.9988 5.63367 8.02536 5.56473C8.05192 5.49579 8.06464 5.42229 8.06279 5.34843C8.06095 5.27458 8.04457 5.20181 8.0146 5.13428C7.98463 5.06675 7.94166 5.00578 7.88812 4.95486C7.83459 4.90394 7.77156 4.86406 7.70262 4.83751C7.63368 4.81095 7.56018 4.79823 7.48632 4.80007C7.41246 4.80192 7.33969 4.81829 7.27216 4.84826C7.20463 4.87823 7.14367 4.92121 7.09275 4.97474L5.35725 6.79724L4.90725 6.32474C4.85688 6.26907 4.79588 6.22406 4.72784 6.19234C4.6598 6.16061 4.5861 6.14284 4.51109 6.14004C4.43607 6.13725 4.36125 6.1495 4.29104 6.17608C4.22083 6.20265 4.15665 6.24301 4.10229 6.29477C4.04792 6.34654 4.00446 6.40866 3.97448 6.47748C3.94449 6.5463 3.92859 6.62043 3.9277 6.69549C3.92681 6.77056 3.94096 6.84504 3.9693 6.91455C3.99765 6.98407 4.03962 7.0472 4.09275 7.10024L4.95 8.00024C5.00253 8.05538 5.06572 8.09927 5.13572 8.12927C5.20573 8.15926 5.28109 8.17473 5.35725 8.17473C5.43341 8.17473 5.50877 8.15926 5.57878 8.12927C5.64878 8.09927 5.71197 8.05538 5.7645 8.00024L7.908 5.75024ZM9.75 6.29999C9.60082 6.29999 9.45774 6.35925 9.35225 6.46474C9.24676 6.57023 9.1875 6.7133 9.1875 6.86249C9.1875 7.01167 9.24676 7.15475 9.35225 7.26023C9.45774 7.36572 9.60082 7.42499 9.75 7.42499H13.5C13.6492 7.42499 13.7923 7.36572 13.8977 7.26023C14.0032 7.15475 14.0625 7.01167 14.0625 6.86249C14.0625 6.7133 14.0032 6.57023 13.8977 6.46474C13.7923 6.35925 13.6492 6.29999 13.5 6.29999H9.75ZM7.90725 11.0002C7.96038 10.9472 8.00235 10.8841 8.0307 10.8146C8.05904 10.745 8.07319 10.6706 8.0723 10.5955C8.07141 10.5204 8.05551 10.4463 8.02552 10.3775C7.99554 10.3087 7.95208 10.2465 7.89771 10.1948C7.84335 10.143 7.77917 10.1026 7.70896 10.0761C7.63875 10.0495 7.56393 10.0373 7.48891 10.04C7.4139 10.0428 7.3402 10.0606 7.27216 10.0923C7.20412 10.1241 7.14312 10.1691 7.09275 10.2247L5.35725 12.0472L4.90725 11.5747C4.85688 11.5191 4.79588 11.4741 4.72784 11.4423C4.6598 11.4106 4.5861 11.3928 4.51109 11.39C4.43607 11.3872 4.36125 11.3995 4.29104 11.4261C4.22083 11.4526 4.15665 11.493 4.10229 11.5448C4.04792 11.5965 4.00446 11.6587 3.97448 11.7275C3.94449 11.7963 3.92859 11.8704 3.9277 11.9455C3.92681 12.0206 3.94096 12.095 3.9693 12.1646C3.99765 12.2341 4.03962 12.2972 4.09275 12.3502L4.95 13.2502C5.00253 13.3054 5.06572 13.3493 5.13572 13.3793C5.20573 13.4093 5.28109 13.4247 5.35725 13.4247C5.43341 13.4247 5.50877 13.4093 5.57878 13.3793C5.64878 13.3493 5.71197 13.3054 5.7645 13.2502L7.90725 11.0002ZM9.75 11.55C9.60082 11.55 9.45774 11.6093 9.35225 11.7147C9.24676 11.8202 9.1875 11.9633 9.1875 12.1125C9.1875 12.2617 9.24676 12.4047 9.35225 12.5102C9.45774 12.6157 9.60082 12.675 9.75 12.675H13.5C13.6492 12.675 13.7923 12.6157 13.8977 12.5102C14.0032 12.4047 14.0625 12.2617 14.0625 12.1125C14.0625 11.9633 14.0032 11.8202 13.8977 11.7147C13.7923 11.6093 13.6492 11.55 13.5 11.55H9.75Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/application-checklist",
  },
  {
    name: "Supported Schools",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <path
          d="M3.74996 9.99751V12.105C3.74996 12.6525 4.04996 13.1625 4.52996 13.425L8.27996 15.4725C8.72996 15.72 9.26996 15.72 9.71996 15.4725L13.47 13.425C13.95 13.1625 14.25 12.6525 14.25 12.105V9.99751L9.71996 12.4725C9.26996 12.72 8.72996 12.72 8.27996 12.4725L3.74996 9.99751ZM8.27996 2.75251L1.95746 6.20251C1.43996 6.48751 1.43996 7.23751 1.95746 7.52251L8.27996 10.9725C8.72996 11.22 9.26996 11.22 9.71996 10.9725L15.75 7.68001V12.1125C15.75 12.525 16.0875 12.8625 16.5 12.8625C16.9125 12.8625 17.25 12.525 17.25 12.1125V7.30501C17.25 7.02751 17.1 6.78001 16.86 6.64501L9.71996 2.75251C9.49837 2.63433 9.2511 2.57251 8.99996 2.57251C8.74883 2.57251 8.50155 2.63433 8.27996 2.75251Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/supported-schools",
  },
  {
    name: "Documents",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.8575 0.612488H10.1432C12.46 0.612488 13.75 1.94749 13.75 4.23499V11.9825C13.75 14.3075 12.46 15.6125 10.1432 15.6125H3.8575C1.5775 15.6125 0.25 14.3075 0.25 11.9825V4.23499C0.25 1.94749 1.5775 0.612488 3.8575 0.612488ZM4.06011 4.10749V4.09999H6.30185C6.6251 4.09999 6.8876 4.36249 6.8876 4.68424C6.8876 5.01499 6.6251 5.27749 6.30185 5.27749H4.06011C3.73686 5.27749 3.47511 5.01499 3.47511 4.69249C3.47511 4.36999 3.73686 4.10749 4.06011 4.10749ZM4.06011 8.66749H9.9401C10.2626 8.66749 10.5251 8.40499 10.5251 8.08249C10.5251 7.75999 10.2626 7.49674 9.9401 7.49674H4.06011C3.73686 7.49674 3.47511 7.75999 3.47511 8.08249C3.47511 8.40499 3.73686 8.66749 4.06011 8.66749ZM4.06002 12.095H9.94002C10.2393 12.065 10.465 11.8092 10.465 11.51C10.465 11.2025 10.2393 10.9475 9.94002 10.9175H4.06002C3.83502 10.895 3.61752 11 3.49752 11.195C3.37752 11.3825 3.37752 11.63 3.49752 11.825C3.61752 12.0125 3.83502 12.125 4.06002 12.095Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/documents",
  },
  // {
  //   name: "Settings",
  //   image: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       viewBox="0 0 16 16"
  //       fill="none"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         clipRule="evenodd"
  //         d="M14.3018 9.29755C14.57 9.44005 14.777 9.66505 14.9226 9.89005C15.2062 10.3551 15.1832 10.9251 14.9073 11.4276L14.3707 12.3276C14.0871 12.8076 13.5583 13.1076 13.0141 13.1076C12.7458 13.1076 12.4469 13.0326 12.2016 12.8826C12.0024 12.7551 11.7724 12.7101 11.5271 12.7101C10.7683 12.7101 10.1322 13.3326 10.1092 14.0751C10.1092 14.9376 9.40403 15.6126 8.52259 15.6126H7.48019C6.59109 15.6126 5.88594 14.9376 5.88594 14.0751C5.87061 13.3326 5.23444 12.7101 4.47564 12.7101C4.2227 12.7101 3.99276 12.7551 3.80115 12.8826C3.55588 13.0326 3.24929 13.1076 2.98869 13.1076C2.43683 13.1076 1.90797 12.8076 1.62438 12.3276L1.09551 11.4276C0.811922 10.9401 0.796592 10.3551 1.08019 9.89005C1.20282 9.66505 1.43276 9.44005 1.69336 9.29755C1.90797 9.19255 2.04594 9.02005 2.17623 8.81755C2.55947 8.17255 2.32953 7.32505 1.67803 6.94255C0.919227 6.51505 0.673957 5.56255 1.11084 4.82005L1.62438 3.93505C2.06893 3.19255 3.01935 2.93005 3.78582 3.36505C4.45264 3.72505 5.31875 3.48505 5.70965 2.84755C5.83229 2.63755 5.90127 2.41255 5.88594 2.18755C5.87061 1.89505 5.95492 1.61755 6.10055 1.39255C6.38414 0.927549 6.89768 0.627549 7.4572 0.612549H8.53792C9.10511 0.612549 9.61864 0.927549 9.90223 1.39255C10.0402 1.61755 10.1322 1.89505 10.1092 2.18755C10.0938 2.41255 10.1628 2.63755 10.2855 2.84755C10.6764 3.48505 11.5425 3.72505 12.217 3.36505C12.9758 2.93005 13.9339 3.19255 14.3707 3.93505L14.8843 4.82005C15.3288 5.56255 15.0836 6.51505 14.3171 6.94255C13.6656 7.32505 13.4356 8.17255 13.8265 8.81755C13.9492 9.02005 14.0871 9.19255 14.3018 9.29755ZM5.83221 8.12005C5.83221 9.29755 6.80562 10.2351 8.00898 10.2351C9.21233 10.2351 10.1628 9.29755 10.1628 8.12005C10.1628 6.94255 9.21233 5.99755 8.00898 5.99755C6.80562 5.99755 5.83221 6.94255 5.83221 8.12005Z"
  //         fill="#969696"
  //       />
  //     </svg>
  //   ),
  //   link: "/settings",
  // },
  {
    name: "Profile",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="16"
        viewBox="0 0 12 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.97047 4.58078C9.97047 6.78355 8.2043 8.54982 5.99998 8.54982C3.7964 8.54982 2.02949 6.78355 2.02949 4.58078C2.02949 2.37801 3.7964 0.612488 5.99998 0.612488C8.2043 0.612488 9.97047 2.37801 9.97047 4.58078ZM6 15.6125C2.74678 15.6125 0 15.0837 0 13.0437C0 11.0029 2.76404 10.4929 6 10.4929C9.25397 10.4929 12 11.0217 12 13.0617C12 15.1025 9.23596 15.6125 6 15.6125Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/profile",
  },
  {
    name: "Help",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.7525 0.611877H11.255C13.7975 0.611877 15.5 2.39688 15.5 5.05188V11.1801C15.5 13.8276 13.7975 15.6119 11.255 15.6119H4.7525C2.21 15.6119 0.5 13.8276 0.5 11.1801V5.05188C0.5 2.39688 2.21 0.611877 4.7525 0.611877ZM7.99256 5.90764C7.64006 5.90764 7.34756 5.61439 7.34756 5.25514C7.34756 4.88764 7.64006 4.59514 8.00756 4.59514C8.36756 4.59514 8.66006 4.88764 8.66006 5.25514C8.66006 5.61439 8.36756 5.90764 7.99256 5.90764ZM8.65244 10.9476C8.65244 11.3076 8.35994 11.6001 7.99244 11.6001C7.63244 11.6001 7.33994 11.3076 7.33994 10.9476V7.63262C7.33994 7.27187 7.63244 6.97262 7.99244 6.97262C8.35994 6.97262 8.65244 7.27187 8.65244 7.63262V10.9476Z"
          fill="#969696"
        />
      </svg>
    ),
    link: "/help",
  },
];

const SideNav = ({ isOpen, toggleSideNav }) => {
  return (
    <>
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <NavLink to="/">
          <div className="side-nav_logo">
            <img src={Logo} alt="proconnect-logo" />
          </div>
        </NavLink>
        <div className="menu">
          <p>MENU</p>
          {menuItems.map((item, index) => {
            return (
              <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) => {
                  return isActive ? "active-nav" : "active";
                }}
                onClick={toggleSideNav}
              >
                <div className="menu__list">
                  {item.image}
                  <p>{item.name}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideNav;
