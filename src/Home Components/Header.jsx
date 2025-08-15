import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import { Link, Route } from "react-router-dom";
const MotionLink = motion(Link);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="bg-black/60 fixed w-full z-50 transition-all duration-300  -mb-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-5 xl:pt-0 lg:pt-0  md:pt-0  pt-10 lg:h-20 md:h-20 xl:h-20">
        <motion.a
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 25,
            delay: 0.3,
          }}
          href="#"
          className="flex items-center cursor-pointer"
        >
          <div className="w-25  flex items-center justify-center  mr-3 ">
            <img src="/FreeSample-Vectorizer-io-marketerra.svg" alt="" />
          </div>
          <span className="title text-2xl font-bold text-white bg-clip-text ">
            {/* Marketerra */}
          </span>
        </motion.a>

        <nav className="lg:flex text-lg hidden space-x-18 fon">
          {[
            { name: "Home", to: "/" },
            { name: "Services", to: "/services" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Packages", to: "/packages" },
            // { name: "Blog", to: "/blog" },
          ].map((item, index) => (
            // <motion.a
            <MotionLink
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
              to={item.to}
              key={index}
              className="relative text-gray-800 dark:text-gray-200 hover:cyan-600 dark:hover:text-[#2ca378] font-medium transition-colors duration-300 ease-in-out group font-"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2.2px] bg-[#2ca378] group-hover:w-full transition-all duration-300"></span>
            </MotionLink>
          ))}
        </nav>

        <motion.button
          onClick={openContactForm}
          initial={{ opacity: 0, scale: 0, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.9,
            duration: 0.1,
            type: "tween",
            stiffness: 200,
            damping: 15,
          }}
          className="hidden lg:inline-block ml-4 px-2 py-2 rounded-xl bg-gray text-[#2ca378]  font-bold hover:from-[#2ca378] hover:to-[#9fd69a] hover:text-white transition-all duration-500 cursor-pointer"
        >
          Contact Me
        </motion.button>

        <div className="xl:hidden lg:hidden inline-block overflow-hidden   text-white shadow-lg">
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.8 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {[
            { name: "Home", to: "/" },
            { name: "Services", to: "/services" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Packages", to: "/packages" },
            // { name: "Blog", to: "/blog" },
          ].map((item, index) => (
            <Link
              onClick={toggleMenu}
              className="text-white font-medium py-2"
              key={index}
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-[#2ca378]   font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
                duration: 0.5,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  onClick={closeContactForm}
                >
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold cursor-pointer" />
                </motion.button>
              </div>
              <ul className="flex xl:flex-row flex-col xl:justify-around  xl:ml-0 ml-[20%] xl:gap-20 mt-4 xl:text-3xl text-2xl">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-10 hover:text-[#2ca378] transition-colors duration-300"
                >
                  <a
                    href="https://www.facebook.com/marketerraa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex xl:flex-col flex-row text-center group"
                  >
                    <i className="fab fa-facebook"> </i>
                    <span
                      className="mt-3 text-sm xl:opacity-0 xl:translate-y-2 mx-0 -translate-y-2 translate-x-4 xl:translate-x-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-in-out"
                    >
                      Facebook
                    </span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-10 hover:text-[#2ca378] transition-colors duration-300"
                >
                  <a
                    // href="https://wa.me/201099055299"
                    href="https://wa.me/201144355424"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex xl:flex-col flex-row text-center group"
                  >
                    <i className="fab fa-whatsapp"> </i>
                    <span
                      className="mt-3 text-sm xl:opacity-0 xl:translate-y-2 mx-0 -translate-y-2 translate-x-4 xl:translate-x-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-in-out"
                    >
                      Whatsapp
                    </span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-10 hover:text-[#2ca378] transition-colors duration-300"
                >
                  <a
                    href="https://www.instagram.com/marketerraa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex xl:flex-col flex-row text-center group"
                  >
                    <i className="fab fa-instagram"> </i>
                    <span
                      className="mt-3 text-sm xl:opacity-0 xl:translate-y-2 mx-0 -translate-y-2 translate-x-4 xl:translate-x-0
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-300 ease-in-out"
                    >
                      Instagram
                    </span>
                  </a>
                </motion.li>
              </ul>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="mt-10 flex xl:justify-center xl:ml-0  ml-[20%]"
                >
                  <div
                    // href="mailto:marketerraagencyy@gmail.com"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    className="flex flex-row text-center items-center gap-2 group"
                  >
                    <HiOutlineMail className="text-2xl  text-[#2ca378] transition-colors duration-300" />
                    <span className="text-sm text-[#2ca378] transition-colors duration-300">
                      marketerraagencyy@gmail.com
                    </span>
                  </div>
                </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
