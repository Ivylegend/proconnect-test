import SideNav from "../../containers/SideNav/SideNav";
import DynamicNav from "../../components/DynamicNav/DynamicNav";
import "./Help.css";

const Help = () => {
  return (
    <div className="flex">
      <SideNav />
      <div style={{ marginLeft: "16rem" }}>
        <DynamicNav title="Help" />
        <div className="dashboard">
          <div className="dashboard_lower">
            <p className="explainer">Get In touch</p>
            <form action="" className="help_form">
              <div className="">
                <label htmlFor="">Full Name</label>
                <input type="text" className="" />
              </div>
              <div className="">
                <label htmlFor="">Email Address</label>
                <input type="email" className="" />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea name=""></textarea>
              </div>
              <button className="btn wide-btn">Send a Message</button>
              <div className="center">or</div>
              <div className="btn outline">Contact Sales</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
