import React, { useState } from "react";
import "./LoanCalculator.css";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants";
import { useAuth } from "../../utils/AuthContext";

const LoanCalculator = ({ formData, setFormData }) => {
  const [pricipal, setPricipal] = useState("");
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");
  const [monthly, setMonthly] = useState("");

  const { token } = useAuth();
  const calculateReturn = () => {
    const principalAmount = parseFloat(pricipal);

    if (isNaN(principalAmount) || principalAmount <= 0) {
      toast.error("Please enter a valid positive number");
    } else {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Token ${token}`);

      const raw = JSON.stringify({
        amount: principalAmount,
        repayment_duration: 1,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${BASE_URL}loan/calculate-loan/`, requestOptions)
        .then((response) => response.json()) // Parse JSON response
        .then((result) => {
          const { data } = result; // Destructure the 'data' object from the response
          const { interest, total_amount } = data; // Destructure properties from the 'data' object

          setResult("$ " + interest.toFixed(2)); // Output: The interest value from the response
          setTotal("$ " + total_amount.toFixed(2)); // Output: The total amount value from the response
          setMonthly("$ " + (total_amount / 12).toFixed(2));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="sign-up-container">
      <div className="app_olevel">
        <h2 className="font-medium text-3xl">Calculate your LOAN</h2>
        <p className="center text-lg mb-4">LOAN CALCULATOR</p>
        <div className="olevel_form">
          <div className="calculator_div">
            <div>
              <p className="font-semibold">TOTAL LOAN AMOUNT</p>
              <input
                type="number"
                value={pricipal}
                onChange={(e) => setPricipal(e.target.value)}
              />
            </div>
            <div>
              <p className="font-semibold">ANNUAL INTEREST RATE</p>
              <input type="text" placeholder="30%" disabled />
            </div>
            <div>
              <p className="font-semibold">TOTAL REPAYMENT DURATION</p>
              <input type="text" placeholder="72 MONTHS" />
            </div>
          </div>
          <span className="compute">
            <button className="btn font-semibold" onClick={() => calculateReturn()}>
              COMPUTE
            </button>
          </span>
          <div className="calculator_div">
            <div>
              <p className="font-semibold">YOUR MONTHLY PAYMENT</p>
              <input type="text" value={monthly} disabled />
            </div>
            <div>
              <p className="font-semibold">YOUR TOTAL PAYMENT</p>
              <input type="text" value={total} disabled />
            </div>
            <div>
              <p className="font-semibold">YOUR TOTAL INTEREST PAYMENT</p>
              <input type="text" placeholder="" value={result} disabled />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
