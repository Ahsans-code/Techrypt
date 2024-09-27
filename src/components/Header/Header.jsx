import React, { useState } from "react";
import "./Header.css";
import icon from "../../assets/svgs/logo.svg";
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

  return (
    <>
      <nav className="navbar">
        <div className="leftNav">
          <a href="/">
            <img src={icon} alt="" className="icon" />
          </a>
          <hr className="hr1" />
        </div>

        <div className="midNav">
  <ul className="navList">
    <li className="listItems">
      <Link to="/Influence" className="anchor" onClick={handleLinkClick}>
        Influence
      </Link>
    </li>
    <li className="listItems">
      <Link to="/Performance" className="anchor" onClick={handleLinkClick}>
        Performance
      </Link>
    </li>
    <li className="listItems">
      <Link to="/Creative" className="anchor" onClick={handleLinkClick}>
        Creative
      </Link>
    </li>
    <li className="listItems">
      <Link to="/Work" className="anchor" onClick={handleLinkClick}>
        Work
      </Link>
    </li>
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

          {isDropdownVisible && (
            <div className={`dropdown ${isDropdownVisible ? "dropdown-visible" : "dropdown-hidden"}`}>
              <div className="yellowDiv">
                <ul className="navList">
                  <li className="dropDownList">
                    <Link
                      to="/About"
                      className="dropDownAnchor"
                      style={{ color: "black" , textDecoration:"underline" }}
                      onClick={handleLinkClick} // Hide dropdown on click
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="dropDownList">
                    <Link
                      to="/Calendar"
                      className="dropDownAnchor"
                      style={{ color: "black" , textDecoration:"underline"}}
                      onClick={handleLinkClick} // Hide dropdown on click
                    >
                      Events Calendar
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="inputDiv">
                <div className="leftInput">
                  <input type="text" placeholder="Your name" className="input" />
                  <input type="text" placeholder="Your email" className="input" />
                </div>
                <div className="rightInput">
                  <input type="text" placeholder="Your company name" className="input" />
                  <input type="text" placeholder="How did you hear about us?" className="input" />
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
    </>
  );
}
