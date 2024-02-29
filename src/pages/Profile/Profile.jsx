import { useNavigate } from "react-router-dom";
import AccountSetting from "../../containers/AccountSetting/AccountSetting";
import { useEffect } from "react";

const Profile = () => {
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

export default Profile;
