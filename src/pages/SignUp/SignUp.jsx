import Background from "../../components/Background/Background";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Eldanic-logo.png";
import "./SignUp.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { gapi } from "gapi-script";
import GoogleSignInButton from "../../components/GoogleSignInButton";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setuser] = useState(null);

  const history = useNavigate();

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // });

  // In SignUp.js
  // history("/dashboard", { state: { user } });

  const clientId =
    "700918527543-o711lm59d7t83amp3ccmh5jhhcvreins.apps.googleusercontent.com";

  // const handleReg = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://dev-api.eldanic.com/api/v1/auth/register",
  //       { email, password }
  //     );
  //     alert(`Registration successful: ${JSON.stringify(response.data)}`);
  //   } catch (error) {
  //     if (error.response) {
  //       // The request was made, but the server responded with a status code that falls out of the range of 2xx
  //       setError(`Server error: ${error.response.data.message}`);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       setError("No response from server");
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       setError(`Error: ${error.message}`);
  //     }
  //   }
  // };

  const isValidated = () => {
    let isProceed = true;
    let errorMessage = "Please enter a value in ";
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += "email";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " password";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
    return isProceed;
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
        .catch((err) => toast.error("failed " + err.message));
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="error-message">{error}</p>
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
