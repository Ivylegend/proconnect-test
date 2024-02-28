import React, { useState } from "react";
import "./Payment.css";
import { toast } from "react-toastify";
import PaystackPop from "@paystack/inline-js";

const Payment = ({ formData, setFormData, handlePayment }) => {
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");

  // const handleMakePayment = () => {
  //   toast.warning("Payment Still In Test Mode");
  //   handlePayment(formData); // Pass the payment data to the parent component
  // };

  const payWithPayStack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_8bf2b4700c3fcc36408da11bebbb7a1619c3f3ce", // Provide the customer's email
      amount: 280000 * 100, // Paystack expects amount in kobo (multiply by 100 for naira)
      email: candidateEmail,
      name: candidateName,
      onSuccess(transaction) {
        handlePayment(formData);
        toast.success(`Payment successful ${transaction.reference}`);
      },
      onClose() {
        toast.error("Payment canceled");
      },
    });
  };

  return (
    <div>
      <div className="app_payment">
        <h2>Pay School Application Fee</h2>
        <div className="payment_form">
          <div className="payment_input">
            <label htmlFor="">Name of Candidate</label>
            <input
              type="text"
              value={candidateName}
              onChange={(event) => setCandidateName(event.target.value)}
            />
          </div>
          <div className="payment_input">
            <label htmlFor="">Email of Candidate</label>
            <input
              type="text"
              value={candidateEmail}
              onChange={(event) => setCandidateEmail(event.target.value)}
            />
          </div>
          <div className="payment_input">
            <label htmlFor="">Amount</label>

            <input
              type="text" // Change type to "text" to allow custom formatting
              value="₦ 280,000" // Use a formatting function to display the formatted amount
              placeholder="280,000"
              disabled
            />
          </div>
          <button
            className="make_payment btn wide-btn"
            onClick={payWithPayStack}
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
