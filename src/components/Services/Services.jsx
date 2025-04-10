import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="container-main">
        <div className="headingDiv">
          <h1 className="servicesHeading">
            You will get high quality services
          </h1>
        </div>
        <div className="mainBox">
          <div className="firstRow glowing-green">
            <div className="firstBox">
              <p className="boxText  ">UGC Marketing</p>
            </div>
            <div className="secondBox">
              <p className="boxText">Landing pages</p>
            </div>
            <div className="thirdBox">
              <p className="boxText" style={{ width: "198px" }}>
                Tiktok Marketing
              </p>
            </div>
          </div>
          <div className="secondRow glowing-green">
            <div className="firstBox">
              <p className="boxText" style={{ width: "266px" }}>
                Tiktok Shop
              </p>
            </div>
            <div className="secondBox">
              <p className="boxText" style={{ width: "266px" }}>
                Performance Creative
              </p>
            </div>
            <div className="thirdBox">
              <p className="boxText" style={{ width: "266px" }}>
                User Acquisition
              </p>
            </div>
          </div>
          <div className="thirdRow glowing-green">
            <div className="firstBox">
              <p className="boxText" style={{ width: "266px" }}>
                Paid Media
              </p>
            </div>
            <div className="secondBox">
              <p className="boxText" style={{ width: "266px" }}>
                Media market overview and competitors analysis
              </p>
            </div>
            <div className="thirdBox">
              <p className="boxText" style={{ width: "266px" }}>
                Panel Recruitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
