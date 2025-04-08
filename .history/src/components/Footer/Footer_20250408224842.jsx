import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import img1 from "../../assets/Images/clutch.png";
import img2 from "../../assets/Images/google.png";
import img3 from "../../assets/Images/meta.png";
import icon from "../../assets/Images/TapoosLogo.png";

import "./Footer.css";
import { techryptLogo } from "../../assets/mainImages";

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
        <div className="heading ">
          <img className="footer-img" src={techryptLogo} width={500} alt="av" />
          <h1 className="main"></h1>
          <h3 className="sub">Influencer & Performance Marketing Agency</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              paddingTop: "30px",
            }}
          >
            <div
              style={{
                background: "white",
                height: "100px",
                width: "2px",
              }}
            ></div>
          </div>
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
          <div className="left1">
            <a href="/" className="link" style={{ fontSize: "12px" }}>
              INFO@ZORKA.AGENCY
            </a>
          </div>
          <div className="middle">
            <a href="/" className="middleText" style={{ color: "gray" }}>
              DOWNLOAD MEDIAKIT
            </a>
            <a href="/" className="middleText" style={{ color: "gray" }}>
              PRIVACY POLICY
            </a>
            <a href="/" className="middleText" style={{ color: "gray" }}>
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
