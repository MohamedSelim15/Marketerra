import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import hero from "../assets/possibility.png";
import { MdOutlineReadMore } from "react-icons/md";

const Service = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col xl:flex-row-reverse items-center justify-center xl:justify-evenly lg:px-20 px-5 relative  mt-10"
    >
      <div className="flex justify-center w-full xl:w-1/2 mb-10 xl:mb-0">
        <img
          src={hero}
          alt=""
          className="w-full max-w-[600px] object-contain"
        />
        {/*
        <Spline
          className="w-full max-w-[700px] h-auto"
          scene="https://prod.spline.design/2lrNsm8ISUdUZ1ft/scene.splinecode"
        /> */}
      </div>

      <div className="w-full xl:w-1/2  z-10 xl:mt-0">
        <h1 className="bg-gradient-to-r from-[#2ca378] to-green-300 bg-clip-text text-transparent text-2xl font-bold mb-4 mt-10">
          OUR SERVICES
        </h1>
        <h2 className="font-serif text-4xl mb-6">
          We provide all marketing services in one place​
        </h2>

        {/* Service 1 */}
        <div className="flex flex-row space-x-5 border-b-1 rounded-xl shadow-[#2ca378]/50 hover:shadow-xl p-5 rounded-3xl group transition-all duration-300 mt-10">
          <div
            className="px-4 py-2 rounded-full shadow-inner shadow-white/30 inset-1 w-fit h-fit
              group-hover:bg-[#2ca378] group-hover:text-black transition-all duration-300"
          >
            1
          </div>
          <div className="ml-10">
            <h2 className="mb-6 text-[#2ca378] font-semibold">Branding</h2>
            <p className="mb-4">
              Branding service is a service that our company provides to owners
              of other companies, factories, or small business owners.
            </p>
            <a
              href="#"
              className="flex items-center space-x-2 group-hover:text-[#2ca378]"
            >
              <span className="text-[#2ca378] underline hidden group-hover:inline-block transition-opacity duration-300">
                Read More
              </span>
              <MdOutlineReadMore className="text-xl" />
            </a>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-row space-x-5 border-b-1 rounded-xl shadow-[#2ca378]/50 mt-10 hover:shadow-xl p-5 rounded-3xl group transition-all duration-300">
          <div
            className="px-4 py-2 rounded-full shadow-inner shadow-white/30 inset-1 w-fit h-fit 
              group-hover:bg-[#2ca378] group-hover:text-black transition-all duration-300"
          >
            2
          </div>
          <div className="ml-10">
            <h2 className="mb-6 text-[#2ca378] font-semibold">
              Business Development
            </h2>
            <p className="mb-4">
              Business development is a strategic process aimed at growing and
              expanding a company's business. It focuses on identifying
              opportunities and growth in existing or new markets.
            </p>
            <a
              href="#"
              className="flex items-center space-x-2 group-hover:text-[#2ca378]"
            >
              <span className="text-[#2ca378] underline hidden group-hover:inline-block transition-opacity duration-300">
                Read More
              </span>
              <MdOutlineReadMore className="text-xl" />
            </a>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-row space-x-5 border-b-1 rounded-xl shadow-[#2ca378]/50 mt-10 hover:shadow-xl p-5 rounded-3xl group transition-all duration-300">
          <div
            className="px-4 py-2 rounded-full shadow-inner shadow-white/30 inset-1 w-fit h-fit 
              group-hover:bg-[#2ca378] group-hover:text-black transition-all duration-300"
          >
            3
          </div>
          <div className="ml-10">
            <h2 className="mb-6 text-[#2ca378] font-semibold">IT Consulting</h2>
            <p className="mb-4">
              IT Consulting is a service our company provides to help businesses
              implement technology effectively and efficiently to achieve their
              goals.
            </p>
            <a
              href="#"
              className="flex items-center space-x-2 group-hover:text-[#2ca378]"
            >
              <span className="text-[#2ca378] underline hidden group-hover:inline-block transition-opacity duration-300">
                Read More
              </span>
              <MdOutlineReadMore className="text-xl" />
            </a>
          </div>
        </div>

        <button className="mt-10 bg-[#00291a] drop-shadow-2xl px-6 py-3 rounded-2xl cursor-pointer shadow-xl shadow-[#2ca378]/50 hover:bg-[#015536] mb-10 hover:-translate-y-2 transition-all duration-500">
          <a className="underline flex" href="#">
            Read More <MdOutlineReadMore className="text-xl ml-2 mt-1" />
          </a>
        </button>
      </div>
    </motion.section>
  );
};

export default Service;
