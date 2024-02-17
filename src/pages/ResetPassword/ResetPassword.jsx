import Background from "../../components/Background/Background";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/5.png";
import GoogleAuth from "../../components/GoogleAuth";
import { useEffect, useState } from "react";
import {
  FaExclamationCircle,
  FaEye,
  FaEyeSlash,
  FaRegCheckCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [visibility, setVisibility] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [validationResults, setValidationResults] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    specialChar: false,
  });

  const token = localStorage.getItem("authToken");

  const history = useNavigate();

  useEffect(() => {
    updateValidationResults();
  }, [password]);

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

  const passwordShow = () => {
    setVisibility((prev) => !prev);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
    }
  };

  const handleResetPassword = () => {
    const isPasswordValid = Object.values(validationResults).every(
      (valid) => valid
    );

    if (!isPasswordValid) {
      setErrorMessage("Password does not meet the criteria");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Token ${token}`);

    var raw = JSON.stringify({
      current_password: "chelsies",
      new_password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://dev-api.eldanic.com/api/v1/user/change-password/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // Check if the response indicates success
        if (result.status === true) {
          // If successful, display a success toast with the message
          toast.success(result.message);
          history("/");
        } else {
          // If unsuccessful, display an error toast with the message
          toast.error(result.message);
        }
      })
      .catch((error) => console.log("error", error));
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
        <h2>Reset Password</h2>
        <div className="uniType help_form">
          <div>
            <span className="password-visibility">
              <label htmlFor="password">New Password</label>
              <span>
                {!visibility ? (
                  <>
                    <FaEye onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                    <p>show</p>
                  </>
                ) : (
                  <>
                    <FaEyeSlash
                      onClick={() => passwordShow()}
                      cursor={"pointer"}
                    />{" "}
                    <p>hide</p>
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
          </div>
          <div>
            <span className="password-visibility">
              <label htmlFor="password">Confirm Password</label>
              <span>
                {!visibility ? (
                  <>
                    <FaEye onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                    <p>show</p>
                  </>
                ) : (
                  <>
                    <FaEyeSlash
                      onClick={() => passwordShow()}
                      cursor={"pointer"}
                    />{" "}
                    <p>hide</p>
                  </>
                )}
              </span>
            </span>
            <input
              type={visibility ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
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
            {errorMessage && (
              <p style={{ color: "red" }}>Passwords do not match</p>
            )}
          </div>
          <button
            onClick={handleResetPassword}
            className="btn wide-btn"
            // style={{
            //   display: "flex",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
            // to={"/"}
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
