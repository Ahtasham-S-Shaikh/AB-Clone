"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "../../components/layouts/ContainerLayout";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "../../components/swiper/swiper";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

const HomeOwners = ({}) => {
  const [data, setData] = useState([
    {
      dataMainContent:
        " The team was punctual. Painters were thorough and professional. Understood their work and did a good job. Cleaned the room properly. QA associate of ABG also did a good job.",
      name: "Rashmi Batra",
      city: "Pune",
    },
    {
      dataMainContent:
        "The overall experience was very good. Work wasdone professionally, and the staff was well-behaved.Appreciate the efforts taken by the team to ensurethe timely delivery of work.",
      name: "Pankaj Tyagi",
      city: "New Delhi",
    },
    {
      dataMainContent:
        "The entire project of painting has been handledvery professionally by all team members. 100%satisfaction with the end results!",
      name: "Pooja Iyer",
      city: "Bangalore",
    },
    {
      dataMainContent:
        " The team was punctual. Painters were thorough and professional. Understood their work and did a good job. Cleaned the room properly. QA associate of ABG also did a good job.",
      name: "Rashmi Batra",
      city: "Pune",
    },
    {
      dataMainContent:
        "The overall experience was very good. Work wasdone professionally, and the staff was well-behaved.Appreciate the efforts taken by the team to ensurethe timely delivery of work.",
      name: "Pankaj Tyagi",
      city: "New Delhi",
    },
    {
      dataMainContent:
        "The entire project of painting has been handledvery professionally by all team members. 100%satisfaction with the end results!",
      name: "Pooja Iyer",
      city: "Bangalore",
    },
  ]);

  return (
    <section id="HomeOwners" data-title="What we Can">
      <ContainerLayout>
        <div className="col-span-12 md:p-20 py-10">
          <div className="mb-5 md:mb-10 items-start">
            <p className="hidden md:block  text-[#1E1E1E] text-[2.5rem] font-['nohemiSemiBold'] font-semibold tracking-wider">
              Hear from proud homeowners
            </p>
            <p className="md:hidden  text-3xl text- [#1E1E1E] font-['nohemiSemiBold'] font-semibold tracking-wider">
              Hear from proud
            </p>
            <p className="md:hidden  text-3xl text-[#1E1E1E]  font-['nohemiSemiBold'] font-semibold tracking-wider">
              homeowners
            </p>
          </div>

          <SwiperComponent view={3} gap={40} isBanner={false} >
            {data.map((swiperElement, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full bg-[#FF5900]  rounded-r-[55px] ">
                  <div className="text-white h-3/4 flex items-center justify-center p-5 m-5 min-h-[180px] max-[]">
                    <p className="text-base font-[hind-regular]  md:tracking-wider tracking-wide leading-5 md:leading-6 ">
                      {swiperElement?.dataMainContent}
                    </p>
                  </div>
                  <div className="h-1/4 flex text-black bg-white justify-between">
                    <p className="text-[1.1rem] font-[hind-regular] p-5  w-full text-start flex flex-col md:flex-row ">
                      <span className="font-[hind-semibold] font-semibold pl-5">
                        {swiperElement?.name},{" "}
                      </span>{" "}
                      <span className="pl-5 md:pl-2">
                        {swiperElement?.city}
                      </span>
                    </p>
                    <div className="relative  min-h-[58px] min-w-[55px] col-span-2">
                      <Image
                        src="/assets/images/card-curve-mobile.png"
                        alt="home_owners"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default HomeOwners;
