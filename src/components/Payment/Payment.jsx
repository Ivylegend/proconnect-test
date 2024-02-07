import React from "react";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/elda-logo.png";
import "./Payment.css";
import { toast } from "react-toastify";

const Payment = ({ formData, setFormData, handlePayment }) => {
  const handleMakePayment = () => {
    toast.warning("Payment not yet integrated");
    handlePayment(formData); // Pass the payment data to the parent component
  };

  const formatAmount = (amount) => {
    // Remove any non-numeric characters from the input
    const numericAmount = amount.replace(/[^\d.]/g, "");
    // Convert the numeric string to a number
    const parsedAmount = parseFloat(numericAmount);
    // Check if the parsed amount is a valid number
    if (!isNaN(parsedAmount)) {
      // Use Intl.NumberFormat to format the number with commas and decimal places
      return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2, // Ensure two decimal places
        maximumFractionDigits: 2, // Ensure two decimal places
      }).format(parsedAmount);
    }
    // Return an empty string if the input is not a valid number
    return "";
  };

  const handleAmountChange = (inputValue) => {
    // Remove any non-numeric characters from the input
    const numericInput = inputValue.replace(/[^\d.]/g, "");
    // Update the form data state with the numeric input
    setFormData({
      ...formData,
      amount: numericInput,
    });
  };

  return (
    <div>
      <div className="app_payment">
        <h2>Pay School Application Fee</h2>
        <div className="payment_form">
          <div className="payment_input">
            <label htmlFor="">Name of Institution</label>
            <input
              type="text"
              value={formData.nameOfInstitution}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  nameOfInstitution: event.target.value,
                })
              }
            />
          </div>
          <div className="payment_input">
            <label htmlFor="">Amount</label>
            {/* <input
              type="number"
              value={formData.amount}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  amount: event.target.value,
                })
              }
            /> */}
            <input
              type="text" // Change type to "text" to allow custom formatting
              value={formatAmount(formData.amount)} // Use a formatting function to display the formatted amount
              onChange={(event) => handleAmountChange(event.target.value)} // Use a custom function to handle input changes
            />
          </div>
          {/* <div className="payment_input">
            <label htmlFor="">Card Details</label>
            <input
              type="text"
              value={formData.cardDetails}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  cardDetails: event.target.value,
                })
              }
            />
          </div>
          <div className="payment_details">
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Expiry Date" />
          </div> */}
          <button
            className="make_payment btn wide-btn"
            onClick={handleMakePayment}
          >
            Proceed with Payment
          </button>
          <p className="payment_text">
            FINAL SUBMISSION AND ACKNOWLEDGEMENT EMAIL SENT TO LET YOU KNOW NEXT
            STEPS AND EXPECTATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
