import Banner from "../sections/banner/Banner";
import WhatWeCan from "../sections/second/WhatWeCan";
import BannerVideo from "@/sections/bannervideo/BannerVideo";
import StickySideNav from "../sections/stickysidenav/stickysidenav";

import "./globals.css";
import Footer from "@/sections/Footer";
import Testimonials from "@/sections/testimonials/testimonial";
export default function Home() {
  return (
    <>
      <button>Click Me</button>
      <StickySideNav />
      <Banner />
      <WhatWeCan />
      <BannerVideo />
      <Testimonials />
      <Footer />
    </>
  );
}
