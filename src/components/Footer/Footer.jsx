import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import img1 from "../../assets/Images/clutch.png";
import img2 from "../../assets/Images/google.png";
import img3 from "../../assets/Images/meta.png";

import "./Footer.css";

function VerticalLine() {
  return (
    <div
    className="verticle"
      style={{
        borderRight: "2px solid white",
        height: "80px",
        position: "relative",
        right: "34rem",
        top: "2rem",
      }}
    />
  );
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="heading">
          <h1 className="main">Zorka.Agency</h1>
          <h3 className="sub">Influencer & Performance Marketing Agency</h3>
          <VerticalLine />
        </div>
        <br />
        <div className="formDiv">
          <div className="form">
            <div className="leftForm">
              <input
                type="text"
                placeholder="Your name"
                className="inputField"
              />
              <input
                type="text"
                placeholder="Your email"
                className="inputField"
              />
            </div>
            <div className="rightForm-footer">
              <input
                type="text"
                placeholder="Your company name"
                className="inputField"
              />
              <select
                // style={{
                //   width:"400px",
                //   border:"none",
                //   fontSize:"24px",
                //   color:"white",
                //   borderBottom:"2px solid white",
                //   borderRadius:"0"
                // }}    
                className="select"            
              >
                <option value="0">How did you hear about us</option>
                <option value="1">I found your profile on social media</option>
                <option value="2">You appeared while googling</option>
                <option value="3">Someone recommended you</option>
                <option value="4">I saw your ads</option>
                <option value="5">Find your article or company profile</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="What are your strategic goals, plans & KPIs?"
              className="lastInput"
            />
          </div>

          <button className="btn-footer">Submit</button>
        </div>

        <div className="PrivacyPolicy">
          <span>
            By clicking submit, you agree to our{" "}
            <a href="/" className="link">
              Privacy Policy
            </a>
          </span>
          <span>
            and{" "}
            <a href="/" className="link">
              Terms and Conditions
            </a>
          </span>
        </div>
        <div className="IconDiv">
          <a href="/">
            <FaLinkedin className="icon" />
          </a>
          <a href="/">
            {" "}
            <FaYoutube className="icon" />
          </a>
          <a href="/">
            <RiInstagramFill className="icon" />
          </a>
          <a href="/">
            <FaFacebookSquare className="icon" />
          </a>
          <a href="/">
            <FaTwitter className="icon" />
          </a>
        </div>

          <div className="Arrow" onClick={scrollToTop}></div>
        <div className="lastDiv">
          <div className="left">
            <a href="/" className="link" style={{ fontSize: "12px" }}>
              INFO@ZORKA.AGENCY
            </a>
          </div>
          <div className="middle">
            <a href="/" style={{ fontSize: "12px"  , color:"gray"}}>
              DOWNLOAD MEDIAKIT
            </a>
            <a href="/" style={{ fontSize: "12px" , color:"gray" }}>
              PRIVACY POLICY
            </a>
            <a href="/" style={{ fontSize: "12px" , color:"gray" }}>
              TERMS&CONDITIONS
            </a>
          </div>
          <div className="right">
            <img src={img1} alt="" className="image" />
            <img src={img2} alt="" className="image" />
            <img src={img3} alt="" className="image" />
          </div>
        </div>
      </div>
    </>
  );
}
