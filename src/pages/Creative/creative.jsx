import React from "react";
import Slider from "../../components/Slider/Slider";
import Content from "../../components/Contents/Content";
import Hero from "../../components/Hero/Hero";

const creative = () => {
  return (
    <>
      <div
        style={{
          background: "#0f0f0f",
        }}
      >
        <Hero />
        <Slider />
        <Content />
      </div>
    </>
  );
};

export default creative;
