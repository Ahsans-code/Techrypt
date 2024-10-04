import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-bg">
          <div className="card-block">
            <h3 className="card-title">Jacqueline Fernandez</h3>
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
            <h3 className="card-title">Feroze Khan</h3>
            <p className="p">
              Feroze Khan is a Pakistani actor and video jockey, celebrated for
              his performances in Urdu television.
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
      <div className="card2">
        <div className="card-bg">
          <div className="card-block">
            <h3 className="card-title">Mahesh Bhatt</h3>
            <p className="p">
              Mahesh Bhatt is a renowned Indian film director and producer,
              acclaimed for his contributions to Hindi cinema.
            </p>
          </div>
          <a className="card-text">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
