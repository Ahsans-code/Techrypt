import React, { useState } from "react";
import "./Content.css";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6"; // Use Up arrow icon as well

export default function Content() {
  const [isContentOpen, setContentOpen] = useState(false);
  const [isBrandOpen, setBrandOpen] = useState(false);

  const toggleContent = () => setContentOpen(!isContentOpen);
  const toggleBrand = () => setBrandOpen(!isBrandOpen);

  return (
    <>
      <div className="container-content">
        <div className="dropdown">
          <div className="content" onClick={toggleContent}>
            <h1 className="ContentHeading">Content</h1>
            {isContentOpen ? (
              <FaCircleArrowUp className="icon" />
            ) : (
              <FaCircleArrowDown className="icon" />
            )}
          </div>
          {isContentOpen && (
            <div
              className="accordionContent"
              style={{ backgroundColor: "#ee6464" }}
            >
              <div className="leftContent">
                <p className="number">01</p>
                <p className="subText">CONTENT</p>
              </div>
              <div className="rightContent">
                <div className="textDiv">
                  <h3 className="textContent">
                    {" "}
                    We translate ideas into content. We tell relevant and new
                    stories at the cutting edge of trends across all media. And
                    we craft content in all visual formats
                  </h3>
                </div>
              </div>
            </div>
          )}
          {/* Accordion for Content */}

          {/* Accordion for Brand */}
          <div className="brand" onClick={toggleBrand}>
            <h1 className="ContentHeading">Brand Experience</h1>
            {isBrandOpen ? (
              <FaCircleArrowUp className="icon" />
            ) : (
              <FaCircleArrowDown className="icon" />
            )}
          </div>
          {isBrandOpen && (
            <div
              className="accordionContent"
              style={{ backgroundColor: "#d1f453" }}
            >
              <div className="leftContent">
                <p className="number">01</p>
                <p className="subText">BRAND EXPERIENCE</p>
              </div>
              <div className="rightContent">
                <div className="textDiv">
                  <h3 className="textContent">
                    We combine creativity and technology to help brands stay
                    ahead of the curve. We transform unique ideas into
                    interactive and immersive experiences
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="line"></div>

        <div className="work">
          <h1 className="workHeading">How we do it</h1>
          <button className="btn">Our Work</button>
        </div>

        <div className="line"></div>

        <div className="delivery-container">
          <h1 className="deliveryHeading">Delivery</h1>
          <p className="para">
            Using an end-to-end content creation and production solution, we
            ensure not only flawless execution but also delivery through the
            ecosystem of our agency
          </p>
        </div>
      </div>
    </>
  );
}
