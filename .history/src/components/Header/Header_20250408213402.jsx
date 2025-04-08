import React, { useState } from "react";
import "./Header.css";
import icon from "../../assets/Images/TapoosLogo.png";
import navIcon from "../../assets/svgs/close.svg";
import close from "../../assets/svgs/open.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLinkClick = () => {
    setDropdownVisible(false); // Hide dropdown on link click
  };

  const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // Set the clicked button as active
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="leftNav">
          <a href="/">
            <img src={icon} width={100} alt="" className="icon" />
          </a>
          <hr className="hr1" />
        </div>

        <div className="midNav">
          <ul className="navList">
            {["About", "Performance", "Creative", "Work"].map((tab) => (
              <li className="listItems" key={tab}>
                <Link to={`/${tab}`} className="anchor">
                  <button
                    className={`navButton ${
                      activeButton === tab ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(tab)}
                  >
                    {tab}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rightNav">
          <hr className="hr2" />
          <img
            src={isDropdownVisible ? close : navIcon}
            alt="navIcon"
            className="icon"
            onClick={toggleDropdown}
          />

          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div
              className={`dropdown ${
                isDropdownVisible ? "dropdown-visible" : "dropdown-hidden"
              }`}
            >
              <div className="yellowDiv">
                <ul className="navList">
                  <li className="dropDownList">
                    <Link
                      to="/About"
                      className="dropDownAnchor"
                      onClick={handleLinkClick}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="dropDownList">
                    <Link
                      to="/Calendar"
                      className="dropDownAnchor"
                      onClick={handleLinkClick}
                    >
                      Events Calendar
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="inputDiv">
                <div className="leftInput">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="Your email"
                    className="input"
                  />
                </div>
                <div className="rightInput">
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="input"
                  />
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    className="input"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="What are your strategic goals, plans & KPIs?"
                className="Secondinput"
              />
              <button className="submit">Submit</button>
              <p className="footerText">
                By clicking submit, you agree to our{" "}
                <Link to="/" className="footerText">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/" className="footerText">
                  Terms and Conditions
                </Link>
              </p>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="small-nav">
        <div className="leftNav">
          <a href="/">
            <img src={icon} alt="" width={100} className="icon" />
          </a>
        </div>
        <div className="linehor"></div>
        <div className="rightNav">
          <img
            src={isDropdownVisible ? close : navIcon}
            alt="navIcon"
            className="icon"
            onClick={toggleDropdown}
          />
        </div>

        {/* Mobile Dropdown Menu */}
        {isDropdownVisible && (
          <div className="dropdown-mobile">
            <ul className="navList">
              <li
                className="dropDownList"
                style={{
                  fontSize: "32px",
                  marginRight: "auto",
                }}
              >
                <Link to="/Influence" onClick={handleLinkClick}>
                  Influence
                </Link>
              </li>
              <li className="dropDownList" style={{ fontSize: "32px" }}>
                <Link to="/Calendar" onClick={handleLinkClick}>
                  Events Calendar
                </Link>
              </li>
            </ul>
            <div className="inputDiv">
              <div className="leftInput">
                <input type="text" placeholder="Your name" className="input" />
                <input type="text" placeholder="Your email" className="input" />
              </div>
              <div className="rightInput">
                <input
                  type="text"
                  placeholder="Your company name"
                  className="input"
                />
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  className="input"
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="What are your strategic goals, plans & KPIs?"
              className="Secondinput"
            />
            <button className="submit">Submit</button>
          </div>
        )}
      </div>

      <div className="small-main">
        <div className="small-main-tab">
          <ul className="navList">
            {["Influence", "Performance", "Creative", "Work"].map((tab) => (
              <li
                className="listItems"
                style={{
                  marginRight: "0px",
                  marginLeft: "0px",
                }}
                key={tab}
              >
                <Link to={`/${tab}`} className="anchor">
                  <button
                    className={`navButton ${
                      activeButton === tab ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(tab)}
                  >
                    {tab}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
