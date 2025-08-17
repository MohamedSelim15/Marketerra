import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import Popeye from "../assets/popeye.svg";
import Abdo from "../assets/abdo.svg";

const SlideSection = () => {
  const text = "ADAPT . TO . SUCCESS .";

  // const icons = [
  //   Abdo,
  //   Popeye,
  //   <FiGithub />,
  //   <FiTwitter />,
  //   <FiLinkedin />,
  //   <FiMenu />,
  //   <FiX />,
  // ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-screen flex flex-col items-center mt-30"
    >
      <div className="overflow-hidden w-full h-[100px] flex items-center mb-2.5">
        <motion.div
          className="slide inline-flex whitespace-nowrap xl:text-9xl lg:text-7xl md:text-6xl text-4xl text-white tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <span className="mr-10">{text}</span>
          <span className="mr-10">{text}</span>
          <span className="mr-10">{text}</span>
          <span className="mr-10">{text}</span>
        </motion.div>
      </div>

      <div className="mt-20 text-4xl font-bold text-center">
        <h1>
          <span className="text-[#2ca378]">Marketerra Marketing Studio</span>{" "}
          CLIENTS
        </h1>
      </div>

      {/* <div className="relative w-full h-[250px]  mt-4">
        <motion.div
          className="icons absolute flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="flex items-center mt-40 text-white text-6xl md:text-8xl"
            >
              {icons.map((icon, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  whileTap={{ scale: 0.9 }}
                  className="icons-slider inline-block mx-10 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer "
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div> */}

      <div className="relative w-full h-[250px] mt-4 group">
  <div className="icons-slider">
    {[...Array(60)].map((_, i) => (
      <div key={i} className="icon-row">
        {[Popeye,Abdo,"", "", "", "", ""].map(
          (icon, index) => (
            // <span key={index} className="icon">
            //   {icon || <img src={icon} key={index} alt="" className="icon" />}
            // </span>
            <img src={icon} key={index} alt="" className="icon" />
          )
        )}
      </div>
    ))}
  </div>
</div>
    </motion.section>
  );


};

export default SlideSection;
