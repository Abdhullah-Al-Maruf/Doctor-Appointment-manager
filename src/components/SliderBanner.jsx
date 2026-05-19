"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import Banner from "./common/Banner";
import SecondBanner from "./common/SecondBanner";

export default function SliderBanner() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Banner />
      </SwiperSlide>

      <SwiperSlide>
        <SecondBanner />
      </SwiperSlide>
    </Swiper>
  );
}