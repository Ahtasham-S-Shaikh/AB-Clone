"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerLayout from "../../components/layouts/ContainerLayout";
import { SwiperSlide } from "swiper/react";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Swiper } from "swiper/react";
import { FreeMode, Navigation, Scrollbar, Loop } from "swiper/modules";
import SwiperCore from "swiper";
import styles from "./testimonial.module.css";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const Testimonials = ({}) => {

  const [innerWidth, setInnerWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 1024){
        videoRefsDesktop.current.forEach(v => {
          v.pause()
        })
      }
      else{
        videoRefs.current.forEach(v => {
          v.pause()
        })
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const [data, setData] = useState([
    {
      dataMainContent:
        "PaintCraft provides personalized service, exceeding expectations for each customer, ensuring an exceptional experience.",
        heading: "Personalized Service",
      name: "Sameer Singh",
      city: "New Delhi",
      videoUrl: "video-t1",
    },
    {
      dataMainContent:
        "I highly recommend PaintCraft for their promptness, quality workmanship, dedicated team, and stress-free experience.",
        heading: "Excellent Quality Work",
      name: "Nalina Raj",
      city: "Chennai",
      videoUrl: "video-t2",
    },
    {
      dataMainContent:
        "The PaintCraft team met all my requirements, maintained my trust, and did a fantastic job. I love PaintCraft!",
        heading: "Reliable & Trustworthy Service",
      name: "Jyothika Bijlani",
      city: "Bangalore",
      videoUrl: "video-t3",
    },
  ]);

  const [activeSlide, setActiveSlide] = useState(0);
  const [previousSlide, setPreviousActiveSlide] = useState(null);
  const [showPlayIcon, setshowPlayIcon] = useState(false);
  const videoRefs = useRef([]);
  const videoRefsDesktop = useRef([]);
  const [activeSlideMobile, setIsActiveSlideMobile] = useState(0);
  const [previousActiveSlideMobile, setPreviousActiveSlideMobile] = useState(0);
  const [activeTesti, setActiveTesti] = useState(0);
  const [previousTesti, setpreviousTesti] = useState(0);

  const handlePlayPause = () => {
    let playButton = document.getElementById(`play_icon_swiper_${activeSlide}`);

    const isMobileDevice = window.innerWidth < 768;
    if (isMobileDevice) {
      let playButton2 = document.getElementById(`play_icon_swiper_${activeSlideMobile}`);
      const currentVideo = videoRefs.current[activeSlideMobile];
      if (currentVideo) {
        if (currentVideo.paused) {
          currentVideo.play();
          setshowPlayIcon(true);
          playButton2.classList.add(styles.hideIcon);
        } else {
          currentVideo.pause();
          setshowPlayIcon(false);
          playButton2.classList.remove(styles.hideIcon);
        }
      }
      return;
    }
    const video = videoRefs.current[activeSlide];
    if (video.paused) {
      video.play();
      setshowPlayIcon(true);
      playButton.classList.add(styles.hideIcon);
    } else {
      video.pause();
      setshowPlayIcon(false);
      playButton.classList.remove(styles.hideIcon);
    }
  };

  const handlePlayPauseDesktop = () => {
    let playButton = document.getElementById(
      `play_icon_swiper_desktop_${activeTesti}`
    );

    const video = videoRefsDesktop.current[activeTesti];

    if (video.paused) {
      video.play();
      setshowPlayIcon(true);
      playButton.classList.add(styles.hideIcon);
    } else {
      video.pause();
      setshowPlayIcon(false);
      playButton.classList.remove(styles.hideIcon);
    }
  };

  const handleVideoPlayDesktop = () => {
    let playButton = document.getElementById(
      `play_icon_swiper_desktop_${activeTesti}`
    );
    setshowPlayIcon(true);
    playButton.classList.add(styles.hideIcon);
  };

  const handleVideoPlay = () => {
    let IsMobile = window.innerWidth < 768;

    if(IsMobile)
      {
        let playButton2 = document.getElementById(`play_icon_swiper_${activeSlideMobile}`)
        setshowPlayIcon(true);
    playButton2.classList.add(styles.hideIcon);
    return

      }
    let playButton = document.getElementById(`play_icon_swiper_${activeSlide}`);
    
    setshowPlayIcon(true);
    playButton.classList.add(styles.hideIcon);
  };

  const handleVideoPauseDesktop = () => {
    let playButton = document.getElementById(
      `play_icon_swiper_desktop_${activeTesti}`
    );
    setshowPlayIcon(false);
    playButton.classList.remove(styles.hideIcon);
  };

  const handleVideoPause = () => {
    let IsMobile = window.innerWidth < 768;

    if(IsMobile)
      {
        let playButton2 = document.getElementById(`play_icon_swiper_${activeSlideMobile}`)
        setshowPlayIcon(false);
       playButton2.classList.remove(styles.hideIcon);
    return

      }
    let playButton = document.getElementById(`play_icon_swiper_${activeSlide}`);
    setshowPlayIcon(false);
    playButton.classList.remove(styles.hideIcon);
  };
  

  const handleSlideChange = (swiper, event) => {
    const isMobileDevice = window.innerWidth < 768;
    if (!isMobileDevice) {
      return;
    }
    let playButton = document.getElementById(`play_icon_swiper_${activeSlideMobile}`);
   
    const previousVideo = videoRefs.current[activeSlideMobile];
    if (previousVideo) {
      previousVideo.pause();
      setshowPlayIcon(false);
      playButton.classList.remove(styles.hideIcon);
    }

    setPreviousActiveSlideMobile(activeSlideMobile);
    setIsActiveSlideMobile(swiper.activeIndex);
  };

  const onSlideClick = (swiper, event) => {
    const isMobileDevice = window.innerWidth < 768;
    if (isMobileDevice) {
      return;
    }

    const smallerDevices = window.innerWidth < 1200;
    if (swiper.clickedIndex !== undefined) {
      if (swiper.clickedIndex !== previousSlide) {
        const prevVideo = videoRefs.current[previousSlide];
        let playButton = document.getElementById(
          `play_icon_swiper_${activeSlide}`
        );
        playButton.classList.remove(styles.hideIcon);
        prevVideo?.pause();
      }

      setActiveSlide(swiper.clickedIndex);
      setPreviousActiveSlide(activeSlide);

      if (smallerDevices) {
        if (swiper.slides.length - 1 === swiper.clickedIndex) {
          swiper.slideTo(swiper.clickedIndex);
        }
      }
    }
  };

  const DesktopStaticSection = (index) => {
    let playButton = document.getElementById(
      `play_icon_swiper_desktop_${activeTesti}`
    );

    if (activeTesti !== index) {
      const video = videoRefsDesktop.current[activeTesti];
      if (!video.paused) {
        video.pause();
        setshowPlayIcon(false);
        playButton.classList.remove(styles.hideIcon);
      }
    }

    setActiveTesti(index);
  };

  SwiperCore.use([Navigation, Scrollbar]);

  return (
    <section id="Testimonials" data-title="What we Can">
      <ContainerLayout>
        <div className="col-span-12  md:py-20 py-10">
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

          <div className="hidden gap-5 lg:flex w-full ">
            {data.map((element, index) => (
              <div
                key={index}
                onClick={() => {
                  DesktopStaticSection(index);
                }}
                className={`${
                  activeTesti === index
                    ? `w-14/12 ${styles.activecontent}`
                    : "w-1/16"
                } relative ${styles.content} w-full`}
              >
                <div className="w-full h-full max-h-[220px] cursor-pointer">
                  <div className="w-full h-full   border-none   ">
                    <div className="text-white  md:rounded-tr-[55px] w-full h-full flex  flex-col md:flex-row  justify-start">
                      <div
                        className={`relative  overflow-hidden w-full ${styles.swiper_video_wrapper}`}
                      >
                        <video
                          id="video_banner_swiper"
                          playsInline
                          ref={(el) => (videoRefsDesktop.current[index] = el)}
                          className={`object-cover w-full h-full`}
                          onPlay={handleVideoPlayDesktop}
                          onPause={handleVideoPauseDesktop}
                          poster={`/assets/images/video${index}.png`}
                        >
                          <source
                            src={`/assets/vids/${element.videoUrl}.mp4`}
                            type="video/mp4"
                          />
                        </video>
                        <div
                          id={`play_icon_swiper_desktop_${index}`}
                          className={styles.play_icon_swiper}
                          onClick={handlePlayPauseDesktop}
                        >
                          <Image
                            // style={!showPlayIcon ? {  "display" : "block"} : {"display" : "none"}}
                            src={
                              !showPlayIcon
                                ? "/assets/images/play.svg"
                                : "/assets/images/pause.svg"
                            }
                            alt="icon"
                            width="30"
                            height="30"
                          />
                        </div>
                        {activeTesti !== index && (
                          <div className="absolute w-full h-full top-0 left-0 overflow-hidden group">
                            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30 z-30"></div>
                            <div className="relative  w-full h-full  transition-transform duration-1000 ease-out group-hover:scale-110 z-20">
                              <Image
                                src={`/assets/images/video${index}.png`}
                                alt="testimonial"
                                fill
                                // className="object-cover"
                                objectFit="cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className={
                          // activeSlide === index && previousSlide > activeSlide
                          //   ? `  md:w-1/2 flex flex-col justify-center items-center   min-h-[210px] ${styles.testimonialVisLeftToRight} `
                          //   : `   md:w-1/2 flex flex-col justify-center items-center   min-h-[210px] `
                          `w-0 min-h-[210px] bg-[#FF5900] ${styles.innerContent} md:rounded-tr-[55px] `
                        }
                      >
                        <div
                          className={`w-full overflow-hidden py-4 p-4 flex flex-col justify-between h-[100%]`}
                        >
                          <div>
                          <p className=" md:text-[1.125rem] text-[1.3rem] font-[hind-semibold] my-1 font-medium mt-2">
                            { element.heading }
                          </p>
                          <p className="text-[0.875rem] font-[hind-regular] md:min-w-[130px] md:max-w-[260px] break-words tracking-wide mt-[0.3rem] leading-6">
                            {element.dataMainContent}
                          </p>
                          </div>
                          <p className="text-[0.75rem] mb-2 font-[hind-semibold] leading-[1] font-normal">
                            { element.name + ", " + element.city }
                          </p>
                        </div>

                        <div className="absolute top-full right-0 w-full min-h-[58px] text-black bg-white flex justify-end">
                          <div className="  h-[58px] w-[55px] col-span-2">
                            <Image
                              src="/assets/images/card-curve-mobile.png"
                              alt="home_owners"
                              width={55}
                              height={58}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Swiper
            className="lg:!hidden"
            slidesPerView="auto" // Ensure only one slide per view
            spaceBetween={20} // Set space between slides
            scrollbar={{ draggable: true, dragSize: 50 }}
            centeredSlides={false}
            onClick={onSlideClick}
            onSlideChange={handleSlideChange}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1362: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: true,
                mousewheel: true,
              },
              1363: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
          >
            {data.map((element, index) => (
              <SwiperSlide key={index}>
                <div className={styles.featured}>
                  <div
                    className={
                      activeSlide === index ? `   hidden` : `${styles.summary}`
                    }
                  >
                    <div className="relative w-[285px] h-[210px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30 z-30"></div>
                      <div className="relative  w-full h-full  transition-transform duration-1000 ease-out group-hover:scale-110 z-20">
                        <Image
                          src={`/assets/images/video${index}.png`}
                          alt="testimonial"
                          fill
                          // className="object-cover"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      activeSlide === index && previousSlide >= activeSlide
                        ? ` block ${styles.content} testimonial_content ` // Apply "active" style if this is the active slide
                        : activeSlide === index && previousSlide < activeSlide
                        ? `block ${styles.content} ${styles.testimonialVisRightToLeft} testimonial_content `
                        : previousSlide > activeSlide
                        ? `  block md:hidden`
                        : ` block md:hidden`
                    }
                  >
                    <div className="w-full h-full   min-h-[272px]  border-none   ">
                      <div className="text-white  md:rounded-tr-[55px]  lg:w-full  sm:min-w-[300px]   flex  flex-col md:flex-row min-h-[210px] justify-start">
                        <div
                          className={`relative  overflow-hidden md:w-1/2 md:max-h-[210px] ${styles.swiper_video_wrapper}`}
                        >
                          <video
                            id="video_banner_swiper"
                            ref={(el) => (videoRefs.current[index] = el)}
                            className={`object-fill w-full`}
                            onPlay={handleVideoPlay}
                            onPause={handleVideoPause}
                            poster={`/assets/images/video${index}.png`}
                          >
                            <source
                              src={`/assets/vids/${element.videoUrl}.mp4`}
                              type="video/mp4"
                            />
                          </video>
                          <div
                            id={`play_icon_swiper_${index}`}
                            className={styles.play_icon_swiper}
                            onClick={handlePlayPause}
                          >
                            <Image
                              // style={!showPlayIcon ? {  "display" : "block"} : {"display" : "none"}}
                              src={
                                !showPlayIcon
                                  ? "/assets/images/play.svg"
                                  : "/assets/images/pause.svg"
                              }
                              alt="icon"
                              width="30"
                              height="30"
                            />
                          </div>
                        </div>

                        <div
                          className={
                            activeSlide === index && previousSlide > activeSlide
                              ? `  md:w-1/2 flex flex-col justify-center items-center   min-h-[210px] ${styles.testimonialVisLeftToRight} `
                              : `   md:w-1/2 flex flex-col justify-center items-center   min-h-[210px] `
                          }
                        >
                          <div className="w-full py-2 p-4 flex flex-col justify-between h-[210px] bg-[#FF5900] md:rounded-tr-[55px]">
                            <div>
                            <p className=" md:text-[1.125rem] text-[1.3rem] font-[hind-semibold] my-1 font-medium mt-2">
                              { element.heading }
                            </p>
                            <p className="text-[0.875rem] font-[hind-regular] md:min-w-[130px] md:max-w-[260px] break-words tracking-wide mt-1 leading-6">
                              {element.dataMainContent}
                            </p>
                            </div>
                            <p className="text-[0.75rem] mb-2 font-[hind-semibold] leading-6 font-normal">
                              { element.name + ", " + element.city }
                            </p>
                          </div>

                          <div className="w-full min-h-[58px] text-black bg-white flex justify-end">
                            <div className="relative  max-h-[58px] min-w-[55px] col-span-2">
                              <Image
                                src="/assets/images/card-curve-mobile.png"
                                alt="home_owners"
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Add as many slides as needed */}
          </Swiper>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default Testimonials;
