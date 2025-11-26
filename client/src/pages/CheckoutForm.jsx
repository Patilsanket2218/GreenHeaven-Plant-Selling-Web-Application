import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!stripe || !elements) {
      setError("Stripe has not been loaded.");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3001/api/payment", {
        amount: 5000, // Amount in cents (e.g., 50.00 USD = 5000 cents)
      });

      const { paymentIntent, error } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        navigate("/payment-success");
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="border p-3 rounded" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
      >
        {loading ? "Processing..." : "Pay $50"}
      </button>
    </form>
  );
};

export default CheckoutForm;
