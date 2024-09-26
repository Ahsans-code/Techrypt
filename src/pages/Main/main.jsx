import React from "react";
import Hero from "../../components/Hero/Hero";
import AgencyDetails from "../../components/AgencyDetails/AgencyDetails";
import Sidebar from "../../components/Sidebar/Sidebar";
import Map from "../../components/Map/Map";
import SliderLogo from "../../components/SliderLogos/AutoSlider";

const main = () => {
  return (
    <>
      <Hero />
      <AgencyDetails />
      <Sidebar />
      <Map />
      <SliderLogo/>
    </>
  );
};

export default main
