import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <label htmlFor="">Input your NIN number</label>
      <input
        type="text"
        placeholder=""
        value={formData.nin}
        onChange={(event) =>
          setFormData({ ...formData, nin: event.target.value })
        }
      />
      <button>Validate</button>
      {/* <input
        type="text"
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      /> */}
    </div>
  );
}

export default SignUpInfo;