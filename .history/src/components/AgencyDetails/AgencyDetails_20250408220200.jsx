import React from "react";
import "./AgencyDetails.css";
import icon from "../../assets/Images/TapoosLogo.png";

const AgencyDetails = () => {
  return (
    <>
      <div className="zorka-agency">
        <img src={icon} alt="" width={300} className="img-agency" />
        {/* <h1 className="agency-name">TAPOOS</h1> */}
        <div className="agency-info">
          <div className="info-item">
            <span>Founded in 2025</span>
            <span>Ever-evolving digital landscape</span>
            <span>Driven By Expertise</span>
            <span>Empowering Brands</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgencyDetails;
