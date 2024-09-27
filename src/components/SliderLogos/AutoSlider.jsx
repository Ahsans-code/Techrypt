import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import P1 from "../../assets/Images/animoca.png"
import P2 from "../../assets/Images/nexters.png"
import P3 from "../../assets/Images/pixonic.png"
import P4 from "../../assets/Images/plarium.png"
import sensor from "../../assets/Images/sensorium.png"
import mask from "../../assets/svgs/mask.svg"
import mask1 from "../../assets/svgs/mask1.svg"
import React from "react";
import Slider from "react-slick";

const sliderdata = [
  {
    maskImg: mask,
    logo: P1,
  },
  {
    maskImg: mask1,
    logo: P2,
  },
  {
    maskImg: mask,
    logo: P3,
  },
  {
    maskImg: mask1,
    logo: P4,
  },
  {
    maskImg: mask,
    logo: sensor,
  },
];

function AutoSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div className="slider-main-container">
      <Slider {...settings}>
        {sliderdata.map((item, i) => {
          let bgClass = "";
          if ((i + 1) % 3 === 1) {
            bgClass = "bg1";
          } else if ((i + 1) % 3 === 2) {
            bgClass = "bg2";
          } else {
            bgClass = "bg3";
          }

          return (
            <div key={i} className={`slider-container ${bgClass}`}>
              <div className="slider-image-container">
                <img src={item?.logo} alt="logo" className="slider-image" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default AutoSlider;
