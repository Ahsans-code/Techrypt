import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-bg glow-green">
          <div className="card-block">
            <h3 className="card-title glowing-green">Nexters</h3>
            <p className="p">
            How to take a fresh look at mobile games marketing: techrypt.Agency’s creative approach to a commercial video
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
      <div className="card1 ">
        <div className="card-bg glow-green">
          <div className="card-block ">
            <h3 className="card-title glowing-green">InDrive</h3>
            <p className="p">
            Five years of successful cooperation, thousands of users and new countries. How we helped inDrive grow from a startup to a major international company
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
      <div className="card2">
        <div className="card-bg glow-green">
          <div className="card-block">
            <h3 className="card-title glowing-green">Plarium</h3>
            <p className="p">The world-famous game developer has been working with our team practically since the inception of Influencer Marketing
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
