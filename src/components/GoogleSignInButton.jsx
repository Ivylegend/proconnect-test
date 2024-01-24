import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = () => {
  const { signIn } = useAuth();
  const history = useNavigate();

  function handleCallback(response) {
    const userObject = jwtDecode(response.credential);
    signIn(userObject);
    history("/dashboard");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "700918527543-o711lm59d7t83amp3ccmh5jhhcvreins.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled",
      size: "large",
      text: "Sign in with Google", // Customize the text
      shape: "rectangular", // Customize the shape
      width: "500", // Customize the width
      height: "100",
    });
  }, [signIn, history]);

  return <div id="signInDiv" className="google btn"></div>;
};

export default GoogleSignInButton;
