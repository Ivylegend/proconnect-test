import "./Help.css";

const Help = () => {
  return (
    <div className="flex">
      <div className="margleft">
        <div className="dashboard">
          <div className="dashboard_lower">
            <p className="explainer text-2xl">Get In touch</p>
            <form action="" className="help_form">
              <div className="">
                <label htmlFor="email">Full Name</label>
                <input type="text" id="email" name="email" className="" />
              </div>
              <div className="">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="" />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <textarea name=""></textarea>
              </div>
              <button className="btn wide-btn">Send a Message</button>
              <div className="center">or</div>
              <a href="mailto:sales@proconnectpay.com">
                <div className="btn outline">Contact Sales</div>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
