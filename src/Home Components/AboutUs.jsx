import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { MdOutlineReadMore } from "react-icons/md";
import Image from "../assets/ai.png";

const AboutUs = () => {
  return (
    <motion.section
      // initial={{ opacity: 0, y: 200 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 2, ease: "easeOut" }}
      // viewport={{ once: false }}
      style={{ marginTop: "60px", boxShadow: "0 -150px 80px 80px #010306" }}
      className="xl:h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-evenly lg:px-24 px-10 relative  mt-20"
    >
      <div className="flex justify-center h-screen xl:w-auto mb-10 xl:mb-0">
        {/* <Spline
          className="xl:absolute lg:left-[-28%] xl:top-0  w-1/2 xl:max-w-none"
          scene="https://prod.spline.design/2lrNsm8ISUdUZ1ft/scene.splinecode"
        /> */}
        <img
        src={Image}
          className="xl:absolute lg:left-[-6%] xl:top-0  w-1/2 xl:max-w-none"
        />
      </div>

      {/* about us */}
      <div className="w-full xl:w-1/2 z-10 xl:mt-20 xl:ml-100 xl:mb-0 md:mb-50">
        <h1 className="bg-gradient-to-r from-[#2ca378] to-green-300 bg-clip-text text-transparent text-2xl font-bold mb-4 mt-10">
          ABOUT US
        </h1>
        <h2 className="font-serif text-4xl mb-6 mt-10">Who We Are?</h2>
        <br />
        <p className="text-lg leading-loose text-gray-100">
          {/* Marketerra Marketing Studio is a company that was established in 2018
          and specializes in providing innovative solutions in the field of
          electronic marketing and software. It aims to meet customers' needs
          and help them develop and enhance their business online. <br />
          <br />
          Marketerra Marketing Studio's primary goal is to help brands achieve
          their goals and reach the target audience. We rely on a team of
          designers, creatives, programming experts, and E-Marketing Services
          specialists (Search Engine Optimization – Social Media Marketing –
          Paid Advertising Campaigns) to become one of the top advertising
          agencies in Egypt. */}
          At Marketerra, we're more than just a digital marketing agency - we're
          your strategic growth partner. With a passion for creativity and
          data-driven solutions, we help businesses elevate their online
          presence, engage their audiences, and achieve measurable results. Our
          team of experts combines innovative thinking with the latest marketing
          trends to craft personalized strategies that deliver real impact.
          <br />
          <br />
          Whether it's social media management, content creation, branding, or
          performance marketing, we turn ideas into powerful campaigns that
          drive success. Let's build your brand's tomorrow - today!
        </p>
        <button className="mt-10 bg-[#00291a] drop-shadow-2xl px-6 py-3 rounded-2xl cursor-pointer shadow-xl shadow-[#2ca378]/50 hover:bg-[#015536] mb-30 hover:-translate-y-2 transition-all duration-500">
          <a className="underline flex" href="#">
            Read More <MdOutlineReadMore className="text-xl ml-2 mt-1" />
          </a>
        </button>
      </div>
    </motion.section>
  );
};

export default AboutUs;
