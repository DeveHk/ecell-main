import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Pagination} from "swiper";

const Sponsers = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-semibold mb-1  ">Our Sponsors</h1>
    <div className="w-[80%] h-[200px] mx-auto  ring-offset-4 bg-[#FE745F] p-5 my-5 rounded-md overflow-hidden swiper-box ">
      
      <Swiper
        spaceBetween={30}
        slidesPerGroup={1}
        slidesPerView="auto"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        /*pagination={{
          clickable: true,
        }}*/
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          }
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Sponser 1</SwiperSlide>
        <SwiperSlide>Sponser 2</SwiperSlide>
        <SwiperSlide>Sponser 3</SwiperSlide>
        <SwiperSlide>Sponser 4</SwiperSlide>
        <SwiperSlide>Sponser 5</SwiperSlide>
        <SwiperSlide>Sponser 6</SwiperSlide>
        <SwiperSlide>Sponser 7</SwiperSlide>
        <SwiperSlide>Sponser 8</SwiperSlide>
        <SwiperSlide>Sponser 9</SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Sponsers