// SignIn.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { toast } from "react-toastify";
import Eye from "../assets/images/exclaim.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(false);

  const history = useNavigate();

  const passwordShow = () => {
    setVisibility((prev) => !prev);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (validated()) {
      try {
        const response = await fetch(
          "https://dev-api.eldanic.com/api/v1/auth/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
          }
        );

        // console.log(JSON.stringify({ email, password }));

        // if (Object.keys(response).length === 0) {
        //   toast.error("Please enter a valid email address");
        // } else {
        //   if (response.password === password) {
        //     toast.success("Log in successful");
        //     history("/dashboard");
        //   } else {
        //     toast.error("Please enter a correct password");
        //   }
        // }

        if (response.ok) {
          const userData = await response.json();
          const token = userData.data.token;

          sessionStorage.setItem("email", email);
          sessionStorage.setItem("authToken", token);
          toast.success("Sign in Successful");

          // Calling the signIn function from your AuthContext
          signIn({
            isGoogleSignIn: false,
            localUserId: userData.id,
            localUserName: userData.name,
            localUserEmail: userData.data.email,
          });

          // Redirecting to the dashboard or another page upon successful sign-in
          history("/dashboard");
        } else {
          toast.error("Sign-in failed");
        }
      } catch (error) {
        toast.error("Error during sign-in:", error);
      }
    }
  };

  const validated = () => {
    let result = true;
    let errorMessage = "Please enter a value in ";
    if (email === null || email === "") {
      result = false;
      errorMessage += "email";
    }
    if (password === null || password === "") {
      result = false;
      errorMessage += " password";
    }
    if (!result) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        result = false;
        toast.warning("Please enter a valid email");
      }
    }
    return result;
  };

  return (
    <form className="hero-form">
      <p className="red-text header">Login Here</p>
      <div className="input-container">
        <label htmlFor="email">Email address or username</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="error-message"></p>
      </div>
      <div className="input-container">
        <span className="password-visibility">
          <label htmlFor="password">Password</label>
          <span>
            {!visibility ? (
              <>
                <FaEye onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                <p>show</p>
              </>
            ) : (
              <>
                <FaEyeSlash onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                <p>hide</p>
              </>
            )}
          </span>
        </span>
        <input
          type={visibility ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="error-message"></p>
      </div>
      <div className="forgot_div">
        <div className="check-div">
          <input type="checkbox" className="check-box" />
          <p className="remember">Remember me</p>
        </div>
        <Link to="reset-password">Forgot Password</Link>
      </div>
      <div className="login-btn">
        <button onClick={handleSignIn} className="small-btn">
          Login
        </button>
        <p>
          Don't have an account? <br />
          <Link to="/signup" className="underlined red-text">
            Sign up
          </Link>
          here
        </p>
      </div>
    </form>
  );
};

export default SignIn;
