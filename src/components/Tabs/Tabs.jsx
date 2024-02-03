import { useState } from "react";
import "./Tabs.css";
import AccountSetting from "../../containers/AccountSetting/AccountSetting";
import LoginSecurity from "../../containers/Login-Security/LoginSecurity";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      {/* TAB HEADERS */}
      <div className="bloc-tabs">
        <div
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Account Setting
        </div>
        <div
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Login & Security
        </div>
        <div
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Notifications
        </div>
      </div>

      {/* TAB CONTENTS */}

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <AccountSetting />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <LoginSecurity />
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Notifications</h2>
          <p>
            No Notifications yet
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
