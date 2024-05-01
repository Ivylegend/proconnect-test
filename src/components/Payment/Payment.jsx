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
        <h2 className="font-medium text-3xl">Pay School Application Fee</h2>
        <div className="payment_form">
          <div className="payment_input">
            <label htmlFor="" className="text-lg">
              Name of Candidate
            </label>
            <input
              type="text"
              value={candidateName}
              onChange={(event) => setCandidateName(event.target.value)}
            />
          </div>
          <div className="payment_input">
            <label htmlFor="" className="text-lg">
              Email of Candidate
            </label>
            <input
              type="text"
              value={candidateEmail}
              onChange={(event) => setCandidateEmail(event.target.value)}
            />
          </div>
          <div className="payment_input">
            <label htmlFor="" className="text-lg">
              Amount
            </label>
            <div className="w-full mb-5 h-14 rounded-xl font-medium border border-[rgba(102, 102, 102, 0.35)] p-4">
              ₦ 280,000
            </div>
          </div>
          <button
            className="make_payment btn wide-btn font-medium"
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
