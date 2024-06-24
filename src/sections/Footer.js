import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <div className="bg-[#FFF2E5] font-[hind-regular] ">
      <div className="container mx-auto  md:p-6 py-6 ">
        <div className="flex flex-col md:flex-row  items-center  justify-start md:justify-center gap-x-[10px] md:gap-y-[20px]   w-full  text-base">
         
          
         
          <div className="flex gap-x-[10px] items-center justify-start md:justify-center md:w-fit w-full py-1  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
            >
              <path
                d="M11.2889 3.62273C12.0657 3.74768 12.7795 4.0609 13.3391 4.52229C13.8987 4.98368 14.2786 5.57225 14.4301 6.21268M11.2889 1C12.9027 1.14781 14.4075 1.74366 15.5564 2.6897C16.7052 3.63574 17.4298 4.87575 17.6111 6.20613M16.8159 11.4385V13.4055C16.8168 13.5881 16.7714 13.7689 16.6827 13.9362C16.5939 14.1035 16.4638 14.2537 16.3006 14.3772C16.1374 14.5006 15.9447 14.5946 15.7349 14.6531C15.5251 14.7116 15.3028 14.7333 15.0822 14.7169C12.6351 14.4977 10.2845 13.8082 8.2193 12.704C6.29786 11.6973 4.66881 10.3541 3.44785 8.76985C2.10387 7.05931 1.26749 5.11179 1.00645 3.08507C0.986582 2.90376 1.01272 2.72101 1.0832 2.54848C1.15367 2.37594 1.26695 2.2174 1.41582 2.08294C1.56468 1.94848 1.74587 1.84105 1.94786 1.76749C2.14984 1.69393 2.36818 1.65585 2.58899 1.65568H4.97471C5.36065 1.65255 5.7348 1.76523 6.02742 1.97273C6.32005 2.18022 6.51118 2.46837 6.5652 2.78346C6.66589 3.41296 6.85264 4.03105 7.12187 4.62593C7.22886 4.86061 7.25202 5.11567 7.18859 5.36087C7.12517 5.60608 6.97782 5.83115 6.76401 6.00942L5.75405 6.84214C6.88612 8.48367 8.53458 9.84284 10.5255 10.7762L11.5355 9.94352C11.7517 9.76723 12.0247 9.64574 12.322 9.59345C12.6194 9.54115 12.9288 9.56025 13.2134 9.64847C13.9349 9.87045 14.6846 10.0244 15.4481 10.1074C15.8344 10.1524 16.1872 10.3128 16.4393 10.5582C16.6915 10.8036 16.8255 11.1169 16.8159 11.4385Z"
                stroke="#1E1E1E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link href={"tel:18001201234"} className=" hover:text-orange-400">18001201234</Link>
          </div>
        </div>
        <div className="flex flex-grow md:hidden border-[1px] border-[#ccc] m-2 "></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-[10px]  md:gap-y-[10px]  p-1 w-full text-[0.875rem] md:text-base tracking-wide">
        <span className="font-[hind-semibold] font-semibold w-full md:w-fit">Now available in:</span>Mumbai Metropolitan, Pune, Bangalore, Chennai, Hyderabad, Kolkata, Delhi NCR, Ahmedabad, Surat, Coimbatore and Jaipur.
        </div>

      

       
      </div>
      <div className="flex flex-row justify-center items-center w-full p-3 bg-white text-[0.875rem]  md:px-6">
        ©2024 Grasim Industries Limited. All Rights Reserved.
        </div>
    </div>
  );
};

export default Footer;
