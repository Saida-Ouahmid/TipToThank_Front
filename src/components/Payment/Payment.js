import React, { Component } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../assets/components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

class Payment extends Component {
  render() {
    return (
      <div>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}

export default Payment;
