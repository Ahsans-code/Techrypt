import React from 'react'
import "./Payment.css"

export default function Payment() {
  return (
    <>
        <div className="payment">
            <div className="left">
                <h1 className="paymentHeading">Payment models</h1>
                <p className="text">CPI + Soft / Hard KPI</p>
                <p className="text">CPA + Soft / Hard KPI</p>
                <p className="text">Agency Fee</p>
                <p className="text">Revenue Share</p>
            </div>
            <div className="rightDiv">
                <h1 className="paymentHeading">Optimization formats</h1>
                <p className="text">Ad campaign optimization for conversions</p>
                <p className="text" style={{width:"450px"}}>Testing of creative approaches and hypotheses (increase CTR/VTR)</p>
                <p className="text">Traffic quality monitoring</p>
                <p className="text">Placement optimization</p>
                <p className="text">Testing of target and lookalike audiences</p>
            </div>
        </div>
    </>
  )
}
