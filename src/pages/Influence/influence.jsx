import React from 'react'
import Hero from "../../components/Hero/Hero";
import Pricing from '../../components/Pricing/Pricing';
import VideoGallery from '../../components/VideoGallery/VideoGallery';
import Verticals from "../../components/Verticals/Verticals"
import InfluencerAndPlatforms from "../../components/InfluencerAndPlatforms/InfluencerAndPlatforms"

const influence = () => {
  return (
    <>
      <div style={{
        background:"#0f0f0f"
      }}>
        <Hero/>
        <InfluencerAndPlatforms/>
        <Pricing/>
        <Verticals/>
        <VideoGallery/>
      </div>
    </>
  );
};
export default influence