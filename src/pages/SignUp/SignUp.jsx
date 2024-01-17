import Background from "../../components/Background/Background";
import { Link } from "react-router-dom";
import Nav from "../../containers/Nav/Nav";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <Background />
      </div>
      <Nav />
      <div className="signup__main">
        <p className="form-title">Sign Up</p>
        <form action="">
          <div className="input-container">
            <label htmlFor="email">Email address or username</label>
            <input type="email" />
            <p className="error-message"></p>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" />
            <p className="error-message"></p>
          </div>
          <div className="check-div">
            <input type="checkbox" className="check-box" />
            <p className="remember">Remember me</p>
          </div>
          <p className="terms">
            By continuing, you agree to the{" "}
            <span className="underlined">Terms of use</span> and{" "}
            <span className="underlined">Privacy Policy</span>
          </p>

          <Link to="/dashboard">
            <button className="btn wide-btn sign__up">Sign Up</button>
          </Link>
        </form>
        <p className="center">
          Do you have an account? <span className="underlined">Login</span>
        </p>
        <p className="continue center">Or continue with</p>
        <button className="btn google__btn">Sign in with your Google account</button>
      </div>
    </div>
  );
};

export default SignUp;
