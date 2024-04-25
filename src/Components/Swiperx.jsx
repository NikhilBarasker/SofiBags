import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

import Swiper1 from "../Photoes/Swiper1.jpg";
import Swiper2 from "../Photoes/Swiper2.jpg";
import Swiper3 from "../Photoes/Swiper3.jpg";
import Swiper4 from "../Photoes/Swiper1.jpg";
import Swiper5 from "../Photoes/Swiper5.jpg";
import Swiper6 from "../Photoes/Swiper6.jpg";
import Swiper7 from "../Photoes/Swiper7.jpg";

import { Autoplay } from "swiper/modules";

export default function Swiperx() {
  return (
    <div>
      <div className="navigation-container"></div>
      <div className="header-container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{
            width:'auto'
          }}
        >
          <SwiperSlide>
            <img src={Swiper3} className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper4} className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper6} className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Swiper7} className="swiper-img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
