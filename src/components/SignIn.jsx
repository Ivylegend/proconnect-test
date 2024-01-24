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
      // Example: Perform your local sign-in logic
      // This might involve making an API request to your server for authentication
      // Replace this with your actual authentication logic

      const response = await fetch("your-auth-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Example: Assume the response includes user data
        const userData = await response.json();

        // Call the signIn function from your AuthContext
        signIn({
          isGoogleSignIn: false, // Indicate that this is a local sign-in
          localUserId: userData.id,
          localUserName: userData.name,
          localUserEmail: userData.email,
        });

        // Redirect to the dashboard or another page upon successful sign-in
        // You can use react-router-dom's useHistory or useNavigate for navigation
        // Replace '/dashboard' with your actual dashboard route
        history("/dashboard");
        // history.push('/dashboard');
      } else {
        // Handle authentication error, show an error message, etc.
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
        <button className="small-btn" onClick={handleSignIn}>
          <Link>Login</Link>
        </button>
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
