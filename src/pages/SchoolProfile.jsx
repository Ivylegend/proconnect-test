import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AccountSetting from "../containers/AccountSetting/AccountSetting";

const SchoolProfile = () => {
  const history = useNavigate();
  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <AccountSetting />
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
