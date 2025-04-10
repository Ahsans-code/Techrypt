import React, { useState } from "react";
import "./Content.css";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6"; // Use Up arrow icon as well

export default function Content() {
  return (
    <>
      <div className="container-content">
        <div className="work">
          <h1 className="workHeading glowing-green">How we do it</h1>
          <button className="btn">Our Work</button>
        </div>
        <div className="line glowing-pink"></div>
        <div className="delivery-container">
          <h1 className="deliveryHeading glowing-green">Delivery</h1>
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
