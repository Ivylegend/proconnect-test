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
import { BASE_URL } from "../../constants";

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

    fetch(`${BASE_URL}user/change-password/`, requestOptions)
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
      <div className="absolute -z-10">
        <Background />
      </div>
      <div className="form-nav-logo">
        <Link to="/profile">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="app_apply">
        <h2>Reset Password</h2>
        <form className="flex flex-col gap-4">
          <div className="input-container">
            <label htmlFor="password">New Password</label>
            <span className="password-visibility">
              <input
                type={visibility ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {!visibility ? (
                <>
                  <FaEye onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                </>
              ) : (
                <>
                  <FaEyeSlash
                    onClick={() => passwordShow()}
                    cursor={"pointer"}
                  />{" "}
                </>
              )}
            </span>
          </div>
          <div className="input-container">
            <label htmlFor="password">Confirm Password</label>
            <span className="password-visibility">
              <input
                type={visibility ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!visibility ? (
                <>
                  <FaEye onClick={() => passwordShow()} cursor={"pointer"} />{" "}
                </>
              ) : (
                <>
                  <FaEyeSlash
                    onClick={() => passwordShow()}
                    cursor={"pointer"}
                  />{" "}
                </>
              )}
            </span>

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
          </div>
          <button onClick={handleResetPassword} className="btn wide-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
