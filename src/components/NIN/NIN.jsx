import React, { useState } from "react";
import "./NIN.css";
import { toast } from "react-toastify";
import { useAuth } from "../../utils/AuthContext";

function NIN({ formData, setFormData, onButtonClick }) {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nin, setNin] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [houseAddress, setHouseAddress] = useState("");
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [verificationOption, setVerificationOption] = useState("nin");
  const [setstateOfOrigin, setSetstateOfOrigin] = useState("");

  // const token = localStorage.getItem("authToken");
  const { token } = useAuth(); // Access the user object from AuthContext

  const handleValidation = () => {
    const formattedDate = displayLocalDate();
    fetch(
      `https://dev-api.eldanic.com/api/v1/user/fetch-nin/?nin_number=${nin}&dob=${formattedDate}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setName(
          data.data.first_name +
            " " +
            data.data.middle_name +
            " " +
            data.data.last_name
        );
        setDateOfBirth(data.data.date_of_birth);
        setGender(data.data.gender);
        toast.success(data.message);
      })
      .catch((error) => {
        toast.error("There was a problem with the fetch operation:", error);
      });
    setValidated(true);
  };

  const handleDateChange = (event) => {
    // Extract the selected date from the event
    const newDate = event.target.value;

    // Update the state with the selected date
    setSelectedDate(newDate);
  };

  const displayLocalDate = () => {
    // Convert UTC date string to local date with time zone offset
    const localDate = new Date(selectedDate + "T00:00:00");
    const offset = localDate.getTimezoneOffset() * 60000; // in milliseconds
    const localDateWithOffset = new Date(localDate - offset);
    return localDateWithOffset.toISOString().split("T")[0];
  };

  return (
    <div className="sign-up-container">
      <div className="app_nin">
        <div className={validated ? "none" : "nin-container"}>
          <h2>Input your NIN</h2>
          <div>
            <label htmlFor="verification-option">
              Choose your form of verification
            </label>
            <select
              id="verification-option"
              value={verificationOption}
              onChange={(e) => setVerificationOption(e.target.value)}
            >
              <option value="nin">NIN Number</option>
              <option value="passport">International Passport</option>
            </select>
          </div>
          <div>
            <label htmlFor="verification-input">
              Input your{" "}
              {verificationOption === "nin" ? "NIN number" : "Passport number"}
            </label>
            <input
              type="text"
              id="verification-input"
              placeholder=""
              value={nin}
              onChange={(e) => setNin(e.target.value)}
            />
          </div>

          <label htmlFor="">Date of Birth</label>
          <input
            type="date"
            id="datePicker"
            name="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
            className="date-time"
          />
          {selectedDate && <p>Selected Date: {displayLocalDate()}</p>}
          <p className="hidden">Wrong NIN</p>
          {!validated && (
            <button className="wide-btn btn" onClick={handleValidation}>
              Validate
            </button>
          )}
        </div>
        {validated && (
          <div>
            <h2>Ready your NIN</h2>
            <p className="info_nin">Your Information</p>
            <div className="nin-info">
              <div className="nin-text">
                <p className="title">Full Name</p>
                <p className="nin-detail">{name}</p>
              </div>
              <div className="nin-text">
                <p className="title">Date of Birth</p>
                <p className="nin-detail">{dateOfBirth}</p>
              </div>
              <div className="nin-text">
                <p className="title">House Address</p>
                <p className="nin-detail">Alabata road, akoka</p>
              </div>
              <div className="nin-text">
                <p className="title">Gender</p>
                <p className="nin-detail">{gender}</p>
              </div>
              <div className="nin-text">
                <p className="title">State of Origin</p>
                <p className="nin-detail">Kwara State</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NIN;
