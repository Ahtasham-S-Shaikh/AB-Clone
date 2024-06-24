import React from "react";
import styles from "./bannert.module.css";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "../../../components/layouts/ContainerLayout";

const Banner = ({}) => {
  return (
    <div className={`${styles.bannerThankYouContent} relative bg-[#FFF0E9] `}>
      <div className="w-full absolute  md:py-5 md:top-5  top-2 mx-auto  grid grid-cols-12  ">
        <div className="col-span-12 md:col-span-12 md:col-start-2 md:col-end-12 flex justify-between">
        <div className=" md:h-24 md:w-36 h-20 w-20 p-1   md:p-0">
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
          <div className=" md:h-20 md:w-20 h-14 w-14 p-1   md:p-0">
          <Link href="/">
            <Image
              src="/assets/images/Layer_1.svg"
              height={80}
              width={80}
              alt="paintLogo"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
          </div>
        </div>
      </div>

      <div className="sm:px-7 mx-auto   absolute md:top-36  top-32 p-5 ">
        <div className="flex md:gap-x-[40px] gap-x-[20px] gap-y-[10px] justify-center items-center">
          <div className="w-full md:w-3/4  text-white flex justify-center items-center flex-col">
            <div className=" text-[2.25rem] md:text-[3.25rem] text-center md:p-4 p-2  font-bold tracking-wider m-2 md:m-0 w-full">
              <p>Thank you</p>
            </div>
            <div className="font-['hind-regular'] text-sm md:text-[1.125rem] text-center  md:font-medium tracking-wider m-2 w-full leading-6">
              Thank you for choosing PaintCraft, a service by Aditya Birla
              Group! Expect a call soon to fix our first site visit. So please
              answer those &apos;unknown’ calls in the next few days! 😅
            </div>

            <div className="font-['hind-regular'] text-[0.75rem] p-2  text-center font-normal tracking-wider md:mt-6 mt-2 w-full">
              <p>
                {" "}
                If the PDF doesn&apos;t download automatically after refreshing
                the page,
              
            
                please{" "}
                <a href={'./We Are PaintCraft by Aditya Birla!.pdf'} download="We Are PaintCraft by Aditya Birla!.pdf" className="text-black underline">
                  Click Here
                </a>{" "}
                to download it manually.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
