import React from "react";
// import styles from "./bannert.module.css";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "../../../components/layouts/ContainerLayout";

const Planner = ({}) => {
  return (
    <section
      className=" bg-[#FFF0E9] md:py-10 md:px-24 py-10"
      id="WhatWeCan"
      data-title="What we Can"
    >
      <ContainerLayout>
        <div className="col-span-12   ">
          <div className=" mb-5 md:mb-10 items-center">
            <p className="hidden md:block text-[2.5rem] font-['nohemiSemiBold'] font-semibold tracking-wider text-center">Here is what we are planning: </p>
            <h3 className="md:hidden  text-[1.75rem] text-center">Here is what we are planning:</h3>
          </div>

          <div className="flex flex-col md:flex-row font-[hind-regular] gap-x-[20px] gap-y-[30px] items-start justify-center">
            <div className="relative w-full flex flex-col justify-between ">
              <div className="w-full flex items-center justify-center">
              <div className="bg-[#FFB896] rounded-full m-2 shrink-0 grow-0 h-[100px] w-[100px] flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/plannert1.webp"
                  alt="planner"
                  height={72}
                  width={72}
                />
              </div>
              </div>

              <div className=" md:h-1/2 w-full p-3  tracking-wide text-center flex flex-col items-center">
                <p className="uppercase text-base font-['NohemiBold'] tracking-wider">First site visit</p>
                <div className="font-medium  text-sm p-2 tracking-wider  md:max-w-[17rem]">First site visit - 30 mins or
so - to measure the area to be
painted & check the health
of your walls.</div>
              </div>
            </div>
            <div className="relative w-full flex flex-col justify-between ">
              <div className="md:h-1/2 w-full flex items-center justify-center">
              <div className="bg-[#FFB896] rounded-full m-2 shrink-0 grow-0 h-[100px] w-[100px] flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/plannert2.webp"
                  alt="planner"
                  height={72}
                  width={72}
                />
              </div>
              </div>

              <div className="md:h-1/2 w-full p-3  tracking-wide text-center flex flex-col items-center">
                <p className="uppercase text-base font-['NohemiBold'] tracking-wider">budgets & timelines</p>
                <div className="font-medium  text-sm p-2 tracking-wider  md:max-w-[17rem]">Quick call with your project
advisor - figure out budgets
& timelines. This can be done
as soon as the site visit is over.</div>
              </div>
            </div>
            <div className="relative w-full flex flex-col justify-between ">
              <div className="md:h-1/2 w-full flex items-center justify-center">
              <div className="bg-[#FFB896] rounded-full m-2 shrink-0 grow-0 h-[100px] w-[100px] flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/plannert3.webp"
                  alt="planner"
                  height={72}
                  width={72}
                />
              </div>
              </div>

              <div className="md:h-1/2 w-full pt-3  tracking-wide text-center flex flex-col items-center">
                <p className="uppercase text-base font-['NohemiBold'] tracking-wider">Payment</p>
                <div className="font-medium  text-sm p-2 tracking-wider  md:max-w-[17rem]">Payment confirmation
- once you are okay with the
project plan.</div>
              </div>
            </div>
            <div className="relative w-full flex flex-col justify-between ">
              <div className="w-full flex items-center justify-center">
              <div className="bg-[#FFB896] rounded-full m-2 shrink-0 grow-0 h-[100px] w-[100px] flex flex-col items-center justify-center">
                <Image
                  src="/assets/images/plannert4.webp"
                  alt="planner"
                  height={72}
                  width={72}
                />
              </div>
              </div>

              <div className="  md:h-1/2 w-full p-3  tracking-wide text-center flex flex-col items-center">
                <p className="uppercase text-base font-['NohemiBold'] tracking-wider">Painting starts. Yay!</p>
                <div className="font-medium  text-sm p-2 tracking-wider  md:max-w-[17rem]">Get ready to witness walls get
wowed and ceilings reach new
heights. Dive into your
dream transformation!.</div>
              </div>
            </div>
         
          
          </div>

          <div className="w-full bg-[#FFB896] rounded-[10px] md:mt-8 md:mb-8">
            <div className="hidden w-full md:block items-center justify-center p-5 tracking-wider md:text-[1.5rem]  text-lg font-semibold text-center">
           <p>Questions? Pls call us at 1800-120-1234</p>
            </div>
            <div className=" w-full block sm:hidden items-center justify-center p-5 tracking-wider md:text-[1.5rem]  text-lg font-semibold text-center">
            <p>Questions? Pls call us at </p>
            <p><a  rel="nofollow" href={`tel:18001201234`}>1800-120-1234</a></p>
            </div>
            

          </div>
        </div>
      </ContainerLayout>
      
    
   

    </section>
  );
};

export default Planner;
