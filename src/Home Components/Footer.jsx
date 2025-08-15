import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Footer = () => {
  return (
    <footer
      className=" flex flex-col items-center mt-20 border-t border-gray-200 
      // bg-gradient-to-br  from-black/60 to-[#2ca378]/30
      "
      // bg-gradient-to-br  from-black/60  via-[#2ca378]/30  to-[#1a1976]/100
      // bg-[#0d1117]
      // bg-gradient-to-r from-black to-[#2ca378]
    >
      <div className="flex flex-col xl:flex-row justify-around w-full max-w-6xl  gap-24 mb-20 mt-20">
        <div className="flex flex-col items-center justify-center">
          <div className=" flex flex-col items-center justify-center">
            <motion.h2
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1.5, ease: "easeOut" }}
              className="title text-7xl text-[#2ca378]"
            >
              Marketerra
            </motion.h2>
            <ul className="flex xl:flex-row flex-col xl:gap-20 mt-4 xl:text-3xl text-2xl">
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
                    whatsapp
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
          </div>
        </div>

        <div className="text-2xl flex flex-col items-center justify-center">
          <h1 className=" title text-5xl mb-10 text-[#2ca378]">Pages</h1>
          {[
            { name: "Home", to: "/" },
            { name: "Services", to: "/services" },
            { name: "Portfolio", to: "/portfolio" },
            { name: "Packages", to: "/packages" },
            // { name: "Blog", to: "/blog" },
          ].map((item, index) => (
            <MotionLink
              key={item.to}
              to={item.to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                delay: 0.2 * index,
                duration: 0.5,
                ease: "easeOut",
              }}
              // className="mb-5 text-lg hover:text-[#2ca378]  transition-colors duration-300"
              className="mb-5 text-lg text-white hover:text-[rgba(44,196,120,0.4)] transition-colors duration-300"


            >
              {item.name}
            </MotionLink>
          ))}
        </div>
      </div>

      <p className=" mb-10 text-center text-gray-400 text-lg">
        © {new Date().getFullYear()} Marketerra. All rights reserved.
      </p>
      {/* <p className="text-black/15">
            Mohamed Selim
      </p> */}
    </footer>
  );
};

export default Footer;
