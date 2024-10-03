import React from "react";
import Hero from "../../components/Hero/Hero";
import AgencyDetails from "../../components/AgencyDetails/AgencyDetails";
import Map from "../../components/Map/Map";
import SliderLogo from "../../components/SliderLogos/AutoSlider";
import CreativeTeamSection from "../../components/CreativeTeamSection/CreativeTeamSection.jsx";

const main = () => {
  return (
    <>
      <Hero />
      <AgencyDetails />
      {/* <Map /> */}
      <CreativeTeamSection />
      <SliderLogo />
    </>
  );
};

export default main;
