// SignIn.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const SignIn = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleSignIn = async () => {
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

      if (response.ok) {
        const userData = await response.json();

        // Calling the signIn function from your AuthContext
        signIn({
          isGoogleSignIn: false,
          localUserId: userData.id,
          localUserName: userData.name,
          localUserEmail: userData.email,
        });

        // Redirecting to the dashboard or another page upon successful sign-in
        history("/dashboard");
      } else {
        console.error("Sign-in failed");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    // <div>
    //   {/* SignIn form */}
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSignIn}>Sign In</button>
    // </div>

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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="error-message"></p>
      </div>
      <div className="check-div">
        <input type="checkbox" className="check-box" />
        <p className="remember">Remember me</p>
      </div>
      <div className="login-btn">
        <Link to={"/dashboard"}>
          <button className="small-btn">Login</button>
        </Link>
        <p>
          Don't have an account? <br />
          <Link to="/signup" className="underlined red-text">
            Sign up
          </Link>{" "}
          here
        </p>
      </div>
    </form>
  );
};

export default SignIn;
