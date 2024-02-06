import { Link } from "react-router-dom";
import Background from "../../components/Background/Background";
import Logo from "../../assets/images/elda-logo.png";
import GoogleAuth from "../../components/GoogleAuth";

const PasswordReset = () => {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Background />
      </div>
      <div className="form-nav-logo">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="app_apply">
        <h2>Forget Password</h2>
        <div className="uniType help_form">
          <div>
            <label htmlFor="">Email address or Username</label>
            <input type="text" />
          </div>
          <Link
            className="btn wide-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            to={"/reset-password"}
          >
            Forgot Password
          </Link>
          <Link to="/" style={{ color: "black" }} className="center">
            <span>Go back to Login</span>
          </Link>
          <span className="continue-div" style={{ margin: 0 }}>
            <hr />
            <p className="continue center">Or continue with</p>
            <hr />
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
