import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import waveImgi from "../public/images/wave.svg"
import waveImgii from "../public/images/wavebtm.svg"

import tem from '../public/images/team.jpg'



// import required modules
import { EffectCoverflow, Navigation,Pagination, Scrollbar ,Autoplay} from "swiper";
import Image from "next/image";
import TeamCard from "./TeamCard";

export default function OurTeam() {
  return (
    <div className="">
      <div className="translate-y-2 relative">
      <Image src={waveImgi} alt="wave"
				 fill
				 sizes="(max-width: 768px) 100vw,
					   (max-width: 1200px) 50vw,
					   33vw" />
             </div>
    <div className="ourTeam relative  z-20 bg-[#293241] flex items-center flex-col">
    <h2 className='p-2 font-bold text-center text-5xl mb-1 text-white'>Our Team</h2>
    <div className="xl:max-w-[60vw]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay= {{
          delay: 3000,
        }}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"auto"}
        scrollbar={true}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow,Scrollbar, Pagination,Navigation, Autoplay]}
        className="mySwiper"
      >
        {
          [{url:tem, name:'ADANI'},{url:tem, name:'JEFF'},{url:tem, name:'WAREN'},{url:tem, name:'AMBANI'},{url:tem, name:'MUSK'},{url:tem, name:'ARNAULT'}].map(
            (member, index) => (
            <SwiperSlide key={index} >
              <TeamCard name={member.name} url={member.url}/>
            </SwiperSlide>
          )
          )
        }
        
      </Swiper>
      </div>
      </div>
      <div className="-translate-y-2 relative">
      <Image src={waveImgii} alt="wave"
				 fill
				 sizes="(max-width: 768px) 100vw,
					   (max-width: 1200px) 50vw,
					   33vw" />
             </div>
      </div>
  );
}
