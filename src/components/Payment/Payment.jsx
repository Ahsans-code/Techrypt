import React from "react";
import "./Payment.css";

export default function Payment() {
  return (
    <>
      <div className="payment">
        <div className="left">
          <h1 className="paymentHeading">Payment Options</h1>
          <p className="text">
            We offer a variety of payment methods to suit your needs:
          </p>
          <ul
            style={{
              listStyle: "none",
            }}
          >
            <li className="text">Credit/Debit Cards</li>
            <li className="text">Bank Transfers</li>
            <li className="text">
              Mobile Payments (e.g., Apple Pay, Google Pay)
            </li>
          </ul>
          <p className="text">Secure and flexible options for all customers!</p>
        </div>
        <div className="rightDiv">
          <h1 className="paymentHeading2">Industries</h1>
          <p className="text2">High School Advertising</p>
          <p className="text2">Mobile Apps</p>
          <p className="text2">Consumer Packaged Goods</p>
          <p className="text2">Direct to Consumer</p>
          <p className="text2">Healthcare</p>
        </div>
      </div>
    </>
  );
}
