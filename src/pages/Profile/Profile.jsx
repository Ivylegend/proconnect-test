import SideNav from "../../containers/SideNav/SideNav"
import DynamicNav from "../../components/DynamicNav/DynamicNav"
import { useNavigate } from "react-router-dom";
import AccountSetting from "../../containers/AccountSetting/AccountSetting";
import { useEffect } from "react";


const Profile = () => {
  const history = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      history("/");
    }
  }, []);
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Profile" />
        <div className="dashboard">
          <AccountSetting />
        </div>
      </div>
    </div>
  )
}

export default Profile