import { Link } from "react-router-dom";
import Background from "../../components/Background/Background";
import Logo from "../../assets/images/5.png";
import GoogleAuth from "../../components/GoogleAuth";
import { useState } from "react";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleForgot = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      callback_url: "http://localhost:5173/reset-password/",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://dev-api.eldanic.com/api/v1/auth/forgot-password/",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

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
            <label htmlFor="">Enter your Email address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            className="btn wide-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleForgot}
          >
            Forgot Password
          </button>
          <Link to="/" style={{ color: "black" }} className="center underlined">
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
