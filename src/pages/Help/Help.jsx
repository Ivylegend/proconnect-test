import SideNav from "../../containers/SideNav/SideNav"
import DynamicNav from "../../components/DynamicNav/DynamicNav"

const Help = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Application School Checklist" />
        <div className="dashboard">
          <div className="dashboard_lower">
            <p className="explainer">Watch Explainer Video</p>
            <video src="" controls className="explainer-video"></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help