import DynamicNav from "../../components/Background/DynamicNav/DynamicNav"
import SideNav from "../../containers/SideNav/SideNav"

const Settings = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Application School Checklist" />
        <div className="dashboard">
          
        </div>
      </div>
    </div>
  )
}

export default Settings