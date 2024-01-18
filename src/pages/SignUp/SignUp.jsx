import Background from "../../components/Background/Background";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Eldanic-logo.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div style={{ position: "absolute" }}>
        <Background />
      </div>
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="signup__main">
        <p className="form-title">Sign Up</p>
        <form action="">
          <div className="input-container">
            <label htmlFor="email">Email address or user name</label>
            <input type="text" id="email" />
            <p className="error-message"></p>
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
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
        <p className="center question">
          Do you have an account?{" "}
          <span className="underlined login">Login</span>
        </p>
        <span className="continue-div">
          <hr />
          <p className="continue center">Or continue with</p>
          <hr />
        </span>
        <button type="button" className="btn google">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M23.001 12.7332C23.001 11.8699 22.9296 11.2399 22.7748 10.5865H12.7153V14.4832H18.62C18.501 15.4515 17.8582 16.9099 16.4296 17.8898L16.4096 18.0203L19.5902 20.435L19.8106 20.4565C21.8343 18.6249 23.001 15.9298 23.001 12.7332Z"
              fill="#4285F4"
            />
            <path
              d="M12.714 23C15.6068 23 18.0353 22.0666 19.8092 20.4567L16.4282 17.8899C15.5235 18.5083 14.3092 18.9399 12.714 18.9399C9.88069 18.9399 7.47596 17.1083 6.61874 14.5766L6.49309 14.5871L3.18583 17.0954L3.14258 17.2132C4.90446 20.6433 8.5235 23 12.714 23Z"
              fill="#34A853"
            />
            <path
              d="M6.62046 14.5767C6.39428 13.9234 6.26337 13.2233 6.26337 12.5C6.26337 11.7767 6.39428 11.0767 6.60856 10.4234L6.60257 10.2842L3.25386 7.7356L3.14429 7.78667C2.41814 9.21002 2.00146 10.8084 2.00146 12.5C2.00146 14.1917 2.41814 15.79 3.14429 17.2133L6.62046 14.5767Z"
              fill="#FBBC05"
            />
            <path
              d="M12.7141 6.05997C14.7259 6.05997 16.083 6.91163 16.8569 7.62335L19.8807 4.73C18.0236 3.03834 15.6069 2 12.7141 2C8.52353 2 4.90447 4.35665 3.14258 7.78662L6.60686 10.4233C7.47598 7.89166 9.88073 6.05997 12.7141 6.05997Z"
              fill="#EB4335"
            />
          </svg>
          Sign in with your Google account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
