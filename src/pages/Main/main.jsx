import React from "react";
import Hero from "../../components/Hero/Hero";
import AgencyDetails from "../../components/AgencyDetails/AgencyDetails";
import SliderLogo from "../../components/SliderLogos/AutoSlider";
import CreativeTeamSection from "../../components/CreativeTeamSection/CreativeTeamSection.jsx";
import VideoGallery from "../../components/VideoGallery/VideoGallery.jsx";
import Verticals from "../../components/Verticals/Verticals.jsx";
import Services from "../../components/WhatWeDo/Services.jsx";

const main = () => {
  return (
    <>
      <Hero />
      <div className="fading"></div>
      <AgencyDetails />
    
      <CreativeTeamSection />
      <SliderLogo />
      {/* <VideoGallery /> */}
      <Services/>
      <Verticals />

    </>
  );
};

export default main;
