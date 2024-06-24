import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "../../components/layouts/ContainerLayout";

const WhatWeCan = ({}) => {
  return (
    <section className="pb-10  md:pb-5" id="WhatWeCan" data-title="What we Can">
      <ContainerLayout>
        <div className="col-span-12">
          <div className=" mb-5 md:mb-10 items-center">
            <p className="hidden md:block text-[#1E1E1E]  font-['nohemiSemiBold'] text-[2.5rem] font-medium tracking-wider">
              How can we help?{" "}
            </p>
            <p className="md:hidden text-3xl text-[#1E1E1E] font-['nohemiSemiBold'] font-semibold tracking-wider">How can we help?</p>
          </div>


          
<div className="flex flex-col md:flex-row md:gap-x-[30px] gap-x-[40px] gap-y-[30px] items-center justify-center">
            <div className="relative  w-full  md:min-w-[239px] md:min-h-[349px] min-h-[349px] ">
              <Image
                src="/assets/images/banner11.webp"
                alt= "whatweCan"
                fill
              />
              <div className="absolute bottom-1  w-full p-4 pl-6  md:text-xl text-lg  text-white font-thin tracking-wider">
              <p>Interior and</p>
              <p>Exterior Painting</p>
              </div>
            </div>
            <div className="relative    w-full  md:min-w-[239px] min-h-[349px] ">
            <Image
                src="/assets/images/banner2.webp"
                alt= "whatweCan"
                fill
              />
              <div className="absolute bottom-1  w-full p-4 pl-6  md:text-xl text-lg text-white font-thin tracking-wider">
              <p>Waterproofing</p>
              <p>Solutions</p>
              </div>
            </div>
            <div className="relative    w-full  md:min-w-[239px] min-h-[349px] ">
            <Image
                src="/assets/images/banner3.webp"
                alt= "whatweCan"
                fill
              />
              <div className="absolute bottom-1  w-full p-4 pl-6  md:text-xl text-lg text-white font-thin tracking-wider">
              <p>Textures &</p>
              <p>Designs</p>
              </div>
            </div>
            <div className="relative    w-full  md:min-w-[239px] min-h-[349px]  ">
            <Image
                src="/assets/images/banner4.webp"
                alt= "whatweCan"
                fill
              />
               <div className="absolute bottom-1  w-full p-4 pl-6  md:text-xl text-lg text-white font-thin tracking-wider">
              <p>Wallpapers &</p>
              <p>Wallcoverings</p>
              </div>
            </div>
           
            
</div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default WhatWeCan;
