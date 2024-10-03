import React, { useEffect } from "react";
import "./Section.css";

const SectionComponent = ({ heading, text, imagePath, imageAlt, reverse }) => {
  return (
    <section className={`section-component ${reverse ? "reverse" : ""}`}>
      <div className="section-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>

      <div className="section-image">
        <img src={imagePath} alt={imageAlt} />
      </div>
    </section>
  );
};

export default SectionComponent;
