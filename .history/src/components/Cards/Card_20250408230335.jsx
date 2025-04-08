import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-bg">
          <div className="card-block">
            <h3 className="card-title">inDrive</h3>
            <p className="p">
              Jacqueline Fernandez is a Sri Lankan actress known for her work in
              Hindi films and reality shows.
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
      <div className="card1">
        <div className="card-bg">
          <div className="card-block">
            <h3 className="card-title">InDrive</h3>
            <p className="p">
            Five years of successful cooperation, thousands of users and new countries. How we helped inDrive grow from a startup to a major international company
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
      <div className="card2">
        <div className="card-bg">
          <div className="card-block">
            <h3 className="card-title">Plarium</h3>
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
