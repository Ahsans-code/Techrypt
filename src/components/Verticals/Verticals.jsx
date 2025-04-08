import React from "react";
import "./Verticals.css";
import { verticals } from "../../assets/Data/Data";

export default function Verticals({ text }) {
  return (
    <>
      <div className="verticals">
        <h1 className="verticals-h1">Our Verticles</h1>
        <div className="verticals-grid">
          {verticals.map((item, i) => (
            <div
              className={`verticals-cards ${item.text.toLowerCase()}`}
              key={i}
            >
              <h3>{item.text.toUpperCase()}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
