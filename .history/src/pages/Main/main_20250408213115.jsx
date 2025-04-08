import React from "react";
import Hero from "../../components/Hero/Hero";
import AgencyDetails from "../../components/AgencyDetails/AgencyDetails";
import SliderLogo from "../../components/SliderLogos/AutoSlider";
import CreativeTeamSection from "../../components/CreativeTeamSection/CreativeTeamSection.jsx";
import VideoGallery from "../../components/VideoGallery/VideoGallery.jsx";
import Verticals from "../../components/Verticals/Verticals.jsx";

const main = () => {
  return (
    <>
      <Hero />
      <AgencyDetails />
      <CreativeTeamSection />
      <SliderLogo />
      <Verticals />

      <VideoGallery />
    </>
  );
};

export default main;
