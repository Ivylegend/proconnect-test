import Background from "../../components/Background/Background";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/elda-logo.png";
import "./SignUp.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { gapi } from "gapi-script";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";
import {
  FaEye,
  FaEyeSlash,
  FaExclamationCircle,
  FaRegCheckCircle,
  FaRegCircle,
} from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setuser] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [validationResults, setValidationResults] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
  });
  const history = useNavigate();

  const passwordShow = () => {
    setVisibility((prev) => !prev);
  };

  // In SignUp.js
  // history("/dashboard", { state: { user } });

  const clientId =
    "700918527543-o711lm59d7t83amp3ccmh5jhhcvreins.apps.googleusercontent.com";

  const updateValidationResults = () => {
    const lengthValid = password.length >= 8;
    const uppercaseValid = /[A-Z]/.test(password);
    const lowercaseValid = /[a-z]/.test(password);
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setValidationResults({
      length: lengthValid,
      uppercase: uppercaseValid,
      lowercase: lowercaseValid,
      specialChar: specialCharValid,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    updateValidationResults();
  }, [password]);

  const isValidated = () => {
    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = Object.values(validationResults).every(
      (valid) => valid
    );

    if (!isEmailValid) {
      toast.warning("Please enter a valid email");
    }

    if (!isPasswordValid) {
      toast.warning("Password does not meet the criteria");
    }

    return isEmailValid && isPasswordValid && email !== "" && password !== "";
  };

  const postData = (e) => {
    e.preventDefault();

    if (isValidated()) {
      axios
        .post(
          "https://dev-api.eldanic.com/api/v1/auth/register/",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json ",
            },
          }
        )
        .then((res) => {
          toast.success("Registration successful");
          // Redirect to home after successful registration
          history("/", { state: { user: res.data } });
        })
        .catch((err) => toast.error("Failed " + err.message));
    }
  };

  return (
    <div>
      <div style={{ position: "absolute" }}>
        <Background />
      </div>
      <div className="form-nav-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="signup__main">
        <p className="form-title">Sign Up</p>
        <form>
          <div className="input-container">
            <label htmlFor="email">Email address or user name</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="error-message">{error}</p>
          </div>
          <div className="input-container">
            <span className="password-visibility">
              <label htmlFor="password">Password</label>
              <span>
                {!visibility ? (
                  <>
                    <FaEye onClick={() => passwordShow()} cursor={"pointer"}/> <p>show</p>
                  </>
                ) : (
                  <>
                    <FaEyeSlash onClick={() => passwordShow()} cursor={"pointer"}/> <p>hide</p>
                  </>
                )}
              </span>
            </span>
            <input
              type={visibility ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="tracker-box">
              <div>
                At least 8 characters
                {validationResults.length ? (
                  <FaRegCheckCircle color="green" />
                ) : (
                  <FaExclamationCircle color="orange" />
                )}
              </div>
              <div>
                At least one lowercase letter
                {validationResults.lowercase ? (
                  <FaRegCheckCircle color="green" />
                ) : (
                  <FaExclamationCircle color="orange" />
                )}
              </div>
              <div>
                At least one uppercase letter
                {validationResults.uppercase ? (
                  <FaRegCheckCircle color="green" />
                ) : (
                  <FaExclamationCircle color="orange" />
                )}
              </div>
              <div>
                At least one special character
                {validationResults.specialChar ? (
                  <FaRegCheckCircle color="green" />
                ) : (
                  <FaExclamationCircle color="orange" />
                )}
              </div>
            </div>
            <p className="error-message">{error}</p>
          </div>
          <div className="check-div">
            <input type="checkbox" className="check-box" />
            <p className="remember">Remember me</p>
          </div>
          <p className="terms">
            By continuing, you agree to the{" "}
            <Link
              target="_blank"
              to="https://proconnectpay.com/#terms-and-conditions"
            >
              <span className="underlined">Terms and conditions</span>
            </Link>{" "}
            and{" "}
            <Link
              target="_blank"
              to="https://proconnectpay.com/#terms-and-conditions"
            >
              <span className="underlined">Privacy Policy</span>
            </Link>
          </p>

          <button
            type="button"
            className="btn wide-btn sign__up"
            onClick={postData}
          >
            Sign Up
          </button>
        </form>
        <p className="center question">
          Do you have an account?{" "}
          <span className="underlined login">
            <Link to="/">Login</Link>{" "}
          </span>
        </p>
        <span className="continue-div">
          <hr />
          <p className="continue center">Or continue with</p>
          <hr />
        </span>
        <GoogleAuth />
        {/* <GoogleSignInButton /> */}
      </div>
    </div>
  );
};

export default SignUp;
