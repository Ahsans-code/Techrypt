import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div class="card">
        <div class="card-bg">
          <div class="card-block">
            <h3 class="card-title">inDrive</h3>
            <p className="p">
              Five years of successful cooperation, thousands of users and new
              countries. How we helped inDrive grow from a startup to a major
              international company
            </p>
          </div>
          <a class="card-text">Learn More</a>
        </div>
      </div>
      <div class="card1">
        <div class="card-bg">
          <div class="card-block">
            <h3 class="card-title">Plarium</h3>
            <p className="p">
              The world-famous game developer has been working with our team
              practically since the inception of Influencer Marketing
            </p>
          </div>
          <a class="card-text">Learn More</a>
        </div>
      </div>
      <div class="card2">
        <div class="card-bg">
          <div class="card-block">
            <h3 class="card-title">Nexters</h3>
            <p className="p">
              How to take a fresh look at mobile games marketing: Zorka.Agency’s
              creative approach to a commercial video
            </p>
          </div>
          <a class="card-text">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
