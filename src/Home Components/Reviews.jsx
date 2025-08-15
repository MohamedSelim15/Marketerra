import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Image from "../assets/ai.png";


const Reviews = () => {
  const reviewsData = [
    {
      name: "Mohamed Selim 1",
      review: "Ana Mohamed Selim NO.1",
    },
    {
      name: "Mohamed Selim 2",
      review: "Ana Mohamed Selim NO.2",
    },
    {
      name: "Mohamed Selim 3",
      review: "Ana Mohamed Selim NO.3",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="xl:h-screen flex flex-col xl:flex-row items-center justify-center xl:justify-evenly lg:px-24 px-10 relative mt-20"
    >
      <div>
        <img
          className="xl:absolute lg:left-[-5%] xl:top-0 xl:max-w-1/2"
          src={Image}
          alt=""
        />
      </div>

      {/* Reviews */}
      <div className="w-full xl:w-1/2 z-10 xl:mt-20 xl:ml-100 xl:mb-30 md:mb-50 my-10 ">
        <h1 className="text-center bg-gradient-to-r from-[#2ca378] to-green-300 bg-clip-text text-transparent text-2xl font-bold mb-4 mt-10">
          Reviews
        </h1>
        <h2 className="font-sans text-4xl mb-6 mt-10 text-center">
          OUR CLIENTS REVIEWS
        </h2>

        {/* Swiper Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, duration: 1 }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="mt-6"
          >
            {reviewsData.map((rev, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#0d1117] text-white p-6 rounded-2xl shadow-lg h-56 flex flex-col justify-between cursor-grab active:cursor-grabbing">
                  <p className="text-lg ">"{rev.review}"</p>
                  <h3 className="font-bold text-green-400 mb-10">
                    - {rev.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;
