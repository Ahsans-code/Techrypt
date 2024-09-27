import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import gif from "../../assets/gifs/text_2.gif";
import "swiper/css/pagination";

import "swiper/css";
import "./Slider.css";
      
export default function Slider() {
  return (
    <>
      <div className="hero-slider">
      <Swiper
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              background: "#0f0f0f",
              height: "100vh",
              width: "100vw",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "6rem",
                lineHeight: "5.6rem",
                letterSpacing: "-0.04em",
                color: "white",
                marginTop: "80px",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              This is our way
            </h1>
            <h3
              style={{
                width: "55.15rem",
                textAlign: "center",
                margin: "3rem auto 0",

                color: "white",

                fontSize: "2.8rem",
                lineHeight: "3.4rem",
                letterSpacing: "-.02em",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              Our passion is to tell stories and
              <img
                style={{
                  width: "6.4rem",
                  height: "2.9rem",
                  margin: "0 .35rem -.55rem",
                  objectFit: "cover",
                  borderRadius: "10rem",
                  display: "inline-block",
                }}
                src={gif}
                alt="Description of the GIF"
              />
              <br />
              create ideas in all shapes,
              <br />
              sizes and worlds. We bring ideas to life <br />
              through impactful creative work across <br />
              all communication touchpoints <br />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "#0f0f0f",
              height: "100vh",
              width: "100vw",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "6rem",
                lineHeight: "5.6rem",
                letterSpacing: "-0.04em",
                color: "white",
                marginTop: "80px",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              This is our way
            </h1>
            <h3
              style={{
                width: "55.15rem",
                textAlign: "center",
                margin: "3rem auto 0",

                color: "white",

                fontSize: "2.8rem",
                lineHeight: "3.4rem",
                letterSpacing: "-.02em",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              Our passion is to tell stories and
              <img
                style={{
                  width: "6.4rem",
                  height: "2.9rem",
                  margin: "0 .35rem -.55rem",
                  objectFit: "cover",
                  borderRadius: "10rem",
                  display: "inline-block",
                }}
                src={gif}
                alt="Description of the GIF"
              />
              <br />
              create ideas in all shapes,
              <br />
              sizes and worlds. We bring ideas to life <br />
              through impactful creative work across <br />
              all communication touchpoints <br />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "#0f0f0f",
              height: "100vh",
              width: "100vw",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "6rem",
                lineHeight: "5.6rem",
                letterSpacing: "-0.04em",
                color: "white",
                marginTop: "80px",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              This is our way
            </h1>
            <h3
              style={{
                width: "55.15rem",
                textAlign: "center",
                margin: "3rem auto 0",

                color: "white",

                fontSize: "2.8rem",
                lineHeight: "3.4rem",
                letterSpacing: "-.02em",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              Our passion is to tell stories and
              <img
                style={{
                  width: "6.4rem",
                  height: "2.9rem",
                  margin: "0 .35rem -.55rem",
                  objectFit: "cover",
                  borderRadius: "10rem",
                  display: "inline-block",
                }}
                src={gif}
                alt="Description of the GIF"
              />
              <br />
              create ideas in all shapes,
              <br />
              sizes and worlds. We bring ideas to life <br />
              through impactful creative work across <br />
              all communication touchpoints <br />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "#0f0f0f",
              height: "100vh",
              width: "100vw",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "6rem",
                lineHeight: "5.6rem",
                letterSpacing: "-0.04em",
                color: "white",
                marginTop: "80px",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              This is our way
            </h1>
            <h3
              style={{
                width: "55.15rem",
                textAlign: "center",
                margin: "3rem auto 0",

                color: "white",

                fontSize: "2.8rem",
                lineHeight: "3.4rem",
                letterSpacing: "-.02em",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              Our passion is to tell stories and
              <img
                style={{
                  width: "6.4rem",
                  height: "2.9rem",
                  margin: "0 .35rem -.55rem",
                  objectFit: "cover",
                  borderRadius: "10rem",
                  display: "inline-block",
                }}
                src={gif}
                alt="Description of the GIF"
              />
              <br />
              create ideas in all shapes,
              <br />
              sizes and worlds. We bring ideas to life <br />
              through impactful creative work across <br />
              all communication touchpoints <br />
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: "#0f0f0f",
              height: "100vh",
              width: "100vw",
            }}
          >
            <h1
              style={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "6rem",
                lineHeight: "5.6rem",
                letterSpacing: "-0.04em",
                color: "white",
                marginTop: "80px",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              This is our way
            </h1>
            <h3
              style={{
                width: "55.15rem",
                textAlign: "center",
                margin: "3rem auto 0",

                color: "white",

                fontSize: "2.8rem",
                lineHeight: "3.4rem",
                letterSpacing: "-.02em",
                fontFamily: "Right Grotesk,sans-serif",
              }}
            >
              Our passion is to tell stories and
              <img
                style={{
                  width: "6.4rem",
                  height: "2.9rem",
                  margin: "0 .35rem -.55rem",
                  objectFit: "cover",
                  borderRadius: "10rem",
                  display: "inline-block",
                }}
                src={gif}
                alt="Description of the GIF"
              />
              <br />
              create ideas in all shapes,
              <br />
              sizes and worlds. We bring ideas to life <br />
              through impactful creative work across <br />
              all communication touchpoints <br />
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
