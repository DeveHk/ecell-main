import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Pagination} from "swiper";

const Sponsors = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-semibold mb-1  ">Our Sponsors</h1>
    <div className="w-[100%] h-[200px] mx-auto  ring-offset-4  p-5 my-5 rounded-md overflow-hidden  ">
      
      <Swiper
        spaceBetween={30}
        slidesPerGroup={1}
        slidesPerView="auto"

        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        /*pagination={{
          clickable: true,
        }}*/
        
        speed={1000}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          800:{
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1500: {
            slidesPerView: 7,
            spaceBetween: 50,
          }
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-box ">Sponser 1</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 2</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 3</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 4</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 5</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 6</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 7</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 8</SwiperSlide>
        <SwiperSlide className="swiper-box">Sponser 9</SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Sponsors