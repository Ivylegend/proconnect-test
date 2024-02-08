import React, { useState } from "react";
import DynamicNav from "../components/DynamicNav/DynamicNav";
import SideNav from "../containers/SideNav/SideNav";

const DashboardLayout = ({ children, title }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div>
      <div>
        <DynamicNav title={title} toggleSideNav={toggleSideNav}/>
      </div>
      <div>
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav}/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
