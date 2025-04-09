import React from "react";
import { PiArrowBendDownRightThin } from "react-icons/pi";
import { CgCalendarDates } from "react-icons/cg";
import { FaTruck, FaStar, FaUserFriends } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoBagHandleSharp } from "react-icons/io5";
import { RiBox3Fill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import "./Plans.css"; // We'll create this CSS file

export const priceData = [
  {
    smBtn: "starter",
    title: "The very basics to start automating operations",
    price: "£49/mo",
    priceInfo: "Check price in EU €",
    demoBtn: "Book a demo",
    serviceTitle: "What is included:",
    services: [
      { icon: <FaTruck />, label: "Optimised carrier selection" },
      { icon: <FaStar />, label: "Buyer satisfaction email" },
      { icon: <SlEnergy />, label: "2 basic integrations" },
      { icon: <FaUserFriends />, label: "Access for 2 users" },
    ],
  },
  {
    smBtn: "starter",
    title: "The very basics to start automating operations",
    price: "£49/mo",
    priceInfo: "Check price in EU €",
    demoBtn: "Book a demo",
    serviceTitle: "What is included:",
    services: [
      { icon: <FaBangladeshiTakaSign />, label: "Bundles" },
      { icon: <RiBox3Fill />, label: "Custom unboxing" },
      { icon: <SlEnergy />, label: "2 basic integrations" },
      { icon: <FaUserFriends />, label: "Access for 2 users" },
    ],
  },
  {
    smBtn: "starter",
    title: "The very basics to start automating operations",
    price: "£49/mo",
    priceInfo: "Check price in EU €",
    demoBtn: "Book a demo",
    serviceTitle: "What is included:",
    services: [
      { icon: <BsStars />, label: "Omnichannel experience" },
      { icon: <BiSolidReport />, label: "Smart reports" },
      { icon: <SlEnergy />, label: "2 basic integrations" },
      { icon: <FaUserFriends />, label: "Access for 2 users" },
    ],
  },
];

const Plans = () => {
  return (
    <>
     
      <div className="pricing-container">
        <h1 className="text-7xl font-semibold text-center text-white glowing-green">Our Plan</h1>
        <div className="pricing-grid">
          <div className="pricing-header">
            <h1 className="pricing-title">
              <span className=" text-primary">Grow your business</span> with our
              CX tools and affordable fulfilment
            </h1>
            <div>
              <button className="calculate-button bg-primary hover:text-primary hover:bg-white">
                <span className="calendar-icon">
                  <CgCalendarDates />
                </span>
                Calculate your fulfilment prices
              </button>
            </div>
            <div className="pricing-subtext">
              <span className="arrow-icon glowing-green">
                <PiArrowBendDownRightThin />
              </span>
              <p>BtoC and BtoB logistics to scale your brand</p>
            </div>
          </div>
          <div className="pricing-cards-container">
            <div className="pricing-cards">
              {priceData.map((e, i) => {
                return (
                  <div
                    className={`pricing-card-wrapper ${
                      i == 1 ? "popular" : ""
                    }`}
                    key={i}
                  >
                    <p className={`popular-label ${i === 1 ? "visible" : ""} `}>
                      Most Popular
                    </p>
                    <div
                      className={`pricing-card ${i === 1 ? "popular-card glowing-green" : ""}`}
                    >
                      <div className="card-header">
                        <div>
                          <button className="plan-button">{e.smBtn}</button>
                        </div>
                        <p className="card-description">{e.title}</p>
                        <h1 className="card-price">{e.price}</h1>
                        <p className="price-info">{e.priceInfo}</p>
                      </div>
                      <div>
                        <button
                          className={`demo-button ${
                            i === 1 ? "primary-button glow-hover" : "secondary-button"
                          }`}
                        >
                          {e.demoBtn}
                        </button>
                      </div>
                      <div className="card-features">
                        <h4 className="features-title">{e.serviceTitle}</h4>
                        {e.services.map((val, index) => {
                          return (
                            <div className="feature-item" key={index}>
                              <span className="feature-icon">{val.icon}</span>
                              <p>{val.label}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;