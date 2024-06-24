
import React from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import Link from "next/link";
import VideoLayout from "../../components/layouts/VideoLayout";
import Form from "../../components/form/form"



const Banner = ({}) => {
  return (
    <VideoLayout>
      <div className="bannerContent relative ">
        <div className="block lg:hidden md:hidden w-full  overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`object-fill w-full ${styles.heightForVideoMobile}`}
          >
            <source
              src="/assets/vids/video-mobile.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hidden lg:block md:block w-full  overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`object-fill w-full ${styles.heightForVideo}`}
          >
            <source
              src="/assets/vids/video-desktop.mp4"
              type="video/mp4"
            />
          </video>
         
        </div>
       
      
        <div className="w-full container md:px-0 absolute md:py-5 md:top-5  top-2 mx-auto  grid grid-cols-12 left-1/2 -translate-x-1/2 ">
          <div className="col-span-12 md:col-span-12 flex justify-between">
          <div className="  md:h-24 md:w-36 h-20 w-20 p-1   md:p-0">
            <Link href="/">
            <Image
              src="/assets/images/ChangedLogo.svg"
              height={100}
              width={100}
              alt="paintLogo"
              style={{
                objectFit: "cover",
              }}
            />
            </Link>
           
          </div>
          <div className="md:h-20 md:w-20 h-14 w-14 p-1   md:p-0">
          <Link href="/">
            <Image
              src="/assets/images/Layer_1.svg"
              height={70}
              width={70}
              alt="paintLogo"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          </div>
          </div>
        </div>
        
        <div className="w-full md:px-0 container mx-auto absolute top-20 left-1/2 -translate-x-1/2 md:top-36">
          <div className="grid grid-cols-12">
            <div className="col-span-12   p-2 md:p-0  lg:col-span-6   md:col-span-12 sm:col-start-0 text-white flex justify-center items-center flex-col my-6 md:m-0">
              <div className="text-[1.5rem] md:text-[3.25rem] md:leading-[3.25rem] leading-8 font-normal md:tracking-wider tracking-wide md:py-2 py-1  w-full">
                <p>Get. Set. Start</p>
                <p>Your Paint Journey!</p>
              </div>
              <p className=" text-sm font-[hind-regular] md:text-[1.3rem] md:leading-8   font-thin tracking-wider py-2 w-full">
                Introducing PaintCraft, a new painting service by Aditya Birla
                Group. We plan around your home, keeping up with your ideas and
                bringing in our expertise.
              </p>
            </div>
            <div className="flex w-full items-center justify-center  col-span-12  lg:col-start-9 sm:col-start-0">
            <div className=" flex w-full justify-center items-center">
             <Form />
            </div>
            </div>
          </div>
        </div>
        </div>
      
    </VideoLayout>
  );
};

export default Banner;
