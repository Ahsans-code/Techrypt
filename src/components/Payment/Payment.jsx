import React from "react";
import "./Payment.css";

export default function Payment() {
  return (
    <>
      <div className="payment">
        <div className="left">
          <h1 className="paymentHeading">Payment models</h1>
          <p className="text">CPI + Soft / Hard KPI </p>
          <p className="text">CPA + Soft / Hard KPI</p>
          <p className="text">Agency Fee</p>
          <p className="text">Revenue Share</p>
        </div>
        <div className="rightDiv">
          <h1 className="paymentHeading2">Optimization formats</h1>
          <p className="text2">Ad campaign optimization for conversions</p>
          <p className="text2">
            Testing of creative approaches and hypotheses (increase CTR/VTR)
          </p>
          <p className="text2">Traffic quality monitoring</p>
          <p className="text2">Placement optimization</p>
          <p className="text2">Testing of target and lookalike audiences</p>
        </div>
      </div>
    </>
  );
}
