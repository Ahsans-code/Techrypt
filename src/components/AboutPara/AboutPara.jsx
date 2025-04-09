import React from "react";
import "./AboutPara.css";

export default function AboutPara() {
  return (
    <>
      <div className="aboutpara-container">
        <div className="aboutpara">
          <div className="heading-para">
            <h2>
            Techrypt.io is a forward-thinking team of experts dedicated to reshaping the future of learning and business. We equip individuals with in-demand digital skills and help businesses grow through smart, scalable solutions in AI automation, branding, development, and marketing.
            </h2>
          </div>
          <div className="bordered-para glowing-pink">
            <h3>At Techrypt , We treat our clients as our partners</h3>
          </div>
          <span className="seperator glowing-pink"></span>
          <div className="para">
            <p>
            To build a future where individuals master high-value digital skills, and businesses leverage next-gen technology to innovate, automate, and scale.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
