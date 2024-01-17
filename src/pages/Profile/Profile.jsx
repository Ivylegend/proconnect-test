import SideNav from "../../containers/SideNav/SideNav"
import DynamicNav from "../../components/Background/DynamicNav/DynamicNav"


const Profile = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Application School Checklist" />
        <div className="dashboard">
          <div className="complete-application">
            <p>Complete your profile before you begin your application</p>
          </div>
          <div className="application_div">
            <span className="application_box">Start School Application</span>
            <span className="application_box">
              Skip School Application To Payment
            </span>
          </div>
          <div className="dashboard_lower">
            <p className="explainer">Watch Explainer Video</p>
            <video src="" controls className="explainer-video"></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile