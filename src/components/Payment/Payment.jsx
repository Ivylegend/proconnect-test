import React from "react";
import Background from "../Background/Background";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Eldanic-logo.png";
import "./Payment.css";
import { toast } from "react-toastify";

const Payment = ({ formData, setFormData, handlePayment }) => {
  const handleMakePayment = () => {
    toast.warning("Payment not yet integrated")
    handlePayment(formData); // Pass the payment data to the parent component
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
            <input
              type="number"
              value={formData.amount}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  amount: event.target.value,
                })
              }
            />
          </div>
          <div className="payment_input">
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
          </div>
          <button
            className="make_payment btn wide-btn"
            onClick={handleMakePayment}
          >
            Make Payment
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
