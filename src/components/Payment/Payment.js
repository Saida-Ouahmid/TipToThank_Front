import React, { Component } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../assets/components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

import "./payment.css";

const promise = loadStripe(
  "pk_test_51HB1h7BOgY8YXSrNpdYnU4BaQSHEnD5FVzxoSsRAJwCL22oNSBeog2fCLK8UmmVYEVNTMFsX7CG3Of0kAYSfVecP00zEdRuCGV"
);

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
