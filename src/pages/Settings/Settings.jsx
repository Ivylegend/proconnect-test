import DynamicNav from "../../components/DynamicNav/DynamicNav"
import Tabs from "../../components/Tabs/Tabs"
import SideNav from "../../containers/SideNav/SideNav"

const Settings = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Settings" />
        <div className="dashboard">
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default Settings