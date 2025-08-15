import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import hero from "../assets/mAP.jpg";
import Video from "../../public/WhatsApp Video 2025-08-11 at 7.16.48 PM.mp4";

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={hero}
          alt="Marketira Marketing Studio"
          className="w-full h-full object-cover object-center sticky"
          // className="w-full h-full object-cover object-center fixed opacity-10 z-0 pointer-events-none"
        />
      </div>

      {/* <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            // className="w-full h-full object-cover object-center fixed z-0 opacity-10 pointer-events-none"
            className="w-full h-full object-cover object-center sticky z-0  pointer-events-none"
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div> */}

      <div className="relative z-10 h-full flex flex-col items-start justify-center xl:-ml-25 m-0   ">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className=" text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center leading-30 "
        >
          <motion.span variants={item} className="title block  m-0 ">
            Marketerra
          </motion.span>

          <motion.span variants={item} className="block my-4 md:my-6 xl:ml-50">
            <svg
              width="100%"
              height="80"
              viewBox="0 0 400 60"
              className="mx-auto max-w-[500px]"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="70"
                fontWeight="bold"
                stroke="white"
                strokeWidth="0.2"
                fill="transparent"
                fontFamily="Love Ya Like A Sister"
              >
                MARKETING
              </text>
            </svg>
          </motion.span>

          <motion.span variants={item} className="title block xl:ml-150">
            {/* STUDIO */}
            Studio
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
