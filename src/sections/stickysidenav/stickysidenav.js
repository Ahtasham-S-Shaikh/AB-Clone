"use client";

import React from "react";
import { useEffect, useRef } from "react";

const StickySideNav = ({}) => {
  const btn = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      btn.current.style.opacity =
        window.scrollY > window.innerHeight - window.innerHeight / 1.85
          ? "100"
          : "0";
      btn.current.style.display = window.scrollY > window.innerHeight - window.innerHeight / 1.85 ? "block" : "none"
    };

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    btn.current.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={btn}
      className="transition-opacity md:rounded-t-md tracking-[1px] duration-500 opacity-0 text-white text-center w-[100%] md:bottom-auto bottom-0 md:w-auto text-base bg-[#FF5900] py-3 px-2 md:px-3 md:text-sm md:py-2 cursor-pointer md:origin-bottom-right md:right-0 fixed md:top-[50%] md:translate-y-[calc(-50%-36px-111.82px)] md:rotate-[270deg] z-30"
    >
      Get In Touch : Enquire Now
    </button>
  );
};

export default StickySideNav;
