import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

const TestGoogle = () => {
  const [user, setUser] = useState("");

  function handleCallback(response) {
    // console.log("Encoded JWT ID Token: " + response.credential);

    console.log("Decoded", jwtDecode(response.credential));
    const userObject = jwtDecode(response.credential);
    console.log("Decoded", userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "700918527543-o711lm59d7t83amp3ccmh5jhhcvreins.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="signInDiv"></div>
      {user && (
        <div>
          <img src={user.picture} alt="" />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
};

export default TestGoogle;
