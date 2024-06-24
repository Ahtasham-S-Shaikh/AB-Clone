"use client";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { Swiper, useSwiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Autoplay } from "swiper/modules";
import SwiperCore from 'swiper';
import 'swiper/css/autoplay';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ isBanner, view, gap, children }) => {
  SwiperCore.use([Autoplay])
  const swiperRef = useRef(null);
  return (
    <div className="bottom_swiper__carousel relative">
      <Swiper
        ref={swiperRef}
        loop={true}
        
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
        }}
        autoplay={{ delay: 6000 }}
        
      >
        {children}
      </Swiper>
      <div className="my-custom-pagination-div flex justify-center p-4  md:hidden" />
    </div>
  );
};

export default SwiperComponent;
