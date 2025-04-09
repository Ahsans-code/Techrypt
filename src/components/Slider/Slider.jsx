import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import gif from "../../assets/gifs/text_2.gif";
import "swiper/css/pagination";
import "swiper/css";
import "./Slider.css";

export default function Slider() {
  // Array of slide data
  const slides = [
    {
      title: "This is our way",
      content: `Our passion is to tell stories and create ideas in all shapes, sizes and worlds. 
      We bring ideas to life through impactful creative work across all communication touchpoints.`,
    },
    // You can add more objects if needed, and the content can vary
    {
      title: "This is another way",
      content: `We strive to create powerful connections and innovate across various domains.`,
    },
    {
      title: "This is the future",
      content: `Our goal is to create memorable experiences that transcend traditional mediums.`,
    },
  ];

  return (
    <>
      <div className="hero-slider max-md:hidden">
        <Swiper
          slidesPerView={1}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slider-contain ">
                <h1 className="slider-h1 glowing-green">{slide.title}</h1>
                <h3 className="slider-h3">
                  {slide.content.split(" ").slice(0, 6).join(" ")}
                  <img
                    className="gif-image"
                    src={gif}
                    alt="Description of the GIF"
                  />
                  {slide.content.split(" ").slice(6).join(" ")}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden flex flex-col mobile-slider gap-10">
        {slides.map((slide, index) => (

          <div key={index} className=" flex-col gap-3 flex justify-center items-center h-fit  ">
            <h1 className="text-white  glowing-green text-4xl">{slide.title}</h1>
            <h3 className="text-white text-center text-xl">
              {slide.content.split(" ").slice(0, 6).join(" ")}
              <img
                className="gif-image"
                src={gif}
                alt="Description of the GIF"
              />
              {slide.content.split(" ").slice(6).join(" ")}
            </h3>
          </div>

        ))}
      </div>
    </>
  );
}