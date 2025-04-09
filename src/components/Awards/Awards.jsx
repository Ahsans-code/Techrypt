import React from "react";
import "./Awards.css";

export default function Awards() {
  return (
    <div className="container-award">
      <div className="award-section glowing-green" >
        <div className="grid">
          <div>
            <h2
              className="award-title"
              style={{
                fontSize: "32px",
              }}
            >
              Feature
            </h2>
          </div>
          <div>
            <h2 className="award-title">TNYC Votes</h2>
            <hr className="hrr" />
            <h2 className="award-title">Bumble</h2>
            <hr className="hrr" />
            <h2 className="award-title">Native</h2>
            <hr className="hrr" />
          </div>
          <div>
            <h2 className="award-title">
              Hurom
              <hr className="hrr" />
            </h2>
            <h2 className="award-title">
              NielsenIQ
              <hr className="hrr" />
            </h2>
            <h2 className="award-title">New Balance</h2>
            <hr className="hrr" />
            <h2 className="award-title">
              Prose
              <hr className="hrr" />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
