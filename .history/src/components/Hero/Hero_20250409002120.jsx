import React, { useEffect, useState, useRef } from "react";
import "./Hero.css";
import video from "../../assets/herovid1.mp4";

const Hero = () => {
  const texts = ["Efficient", "Smart", "Worldwide"];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFading(false);
      }, 500);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleVideoEnd = () => {
    videoRef.current.pause();
  };

  return (
    <div className="hero-section">
      <video
        autoPlay
        muted
        ref={videoRef}
        onEnded={handleVideoEnd}
        className="background-video"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="outer-headings">
        <div className={`inner-headings ${isFading ? "fade-out" : "fade-in"}`}>
          <span>{currentText}</span>
        </div>
      </div>
      <div className="hero-para">
        <p>Unlock new opportunities with expert-led training & cutting-edge digital services.</p>
      </div>
      {/* <div className="smile"></div> */}
    </div>
  );
};

export default Hero;
