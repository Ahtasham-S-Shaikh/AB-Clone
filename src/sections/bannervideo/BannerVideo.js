"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import VideoLayout from "../../components/layouts/VideoLayout";
import styles from "./bannervideo.module.css";
import { useState  , useRef} from "react";



const BannerVideo = ({}) => {

  const [showPlayIcon, setshowPlayIcon] = useState(false);
  const videoRef = useRef(null);


const handlePlayPause = () => {
  let playButton = document.getElementById("play_icon");
  if (videoRef.current.paused) {
    videoRef.current.play();
    setshowPlayIcon(true);
    playButton.classList.add(styles.hideIcon);
  } else {
    videoRef.current.pause();
    setshowPlayIcon(false);
    playButton.classList.remove(styles.hideIcon);
  }
};

const handleVideoPlay = () => {
  let playButton = document.getElementById("play_icon");
  setshowPlayIcon(true);
  playButton.classList.add(styles.hideIcon);
};

const handleVideoPause = () => {
  let playButton = document.getElementById("play_icon");
  setshowPlayIcon(false);
  playButton.classList.remove(styles.hideIcon);
};

  return (
    <VideoLayout>
      <div className="container mx-auto">
        <div className="relative  grid  grid-cols-12 md:pt-20 py-10">
         <div className=" col-span-12 mb-5 md:mb-10 items-start">
            <p className="hidden md:block  text-[#1E1E1E] text-[2.5rem] font-['nohemiSemiBold'] font-semibold tracking-wider">
            We make painting delightfully simple
            </p>
            <p className="md:hidden  text-3xl text- [#1E1E1E] font-['nohemiSemiBold'] font-semibold tracking-wider">
            We make painting
            </p>
            <p className="md:hidden  text-3xl text-[#1E1E1E]  font-['nohemiSemiBold'] font-semibold tracking-wider">
            delightfully simple
            </p>
          </div>
        <div className={`relative col-span-12 block w-full  overflow-hidden  ${styles.banner_video_wrapper}`}>
          <video
            id= "video_banner"
            controls
            playsInline
            className={`object-fill w-full`}
            poster="/assets/images/Thumbnail.png"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            ref={videoRef}
          >
            <source
              src="/assets/vids/Paintcraft.mp4"
              type="video/mp4"
            />
          </video>

          <div className={styles.play_icon} onClick={handlePlayPause} id="play_icon">
          <Image
            src={
              !showPlayIcon ? "/assets/images/play.svg" : "/assets/images/pause.svg"
            }
            alt="icon"
            width="74"
            height="74"
          />
        </div>
          
          
        </div>
      
        </div>
      </div>
    </VideoLayout>
  );
};

export default BannerVideo;
