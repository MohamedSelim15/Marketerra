import { motion } from "framer-motion";

const SlideSection2 = () => {
  const icons = [
    { label: "Social Media", icon: <i className="fas fa-user-astronaut" /> },
    { label: "SEO ( Search Engine Optimization )", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Google Ads", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Media Production", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Web Dev", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Mobile App", icon: <i className="fas fa-user-astronaut" /> },
    { label: "IT Consulting", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Business Dev", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Branding", icon: <i className="fas fa-user-astronaut" /> },
    { label: "Motion Graphics", icon: <i className="fas fa-user-astronaut" /> },
  ];

  const yearsOfExperience = 6;
  const projectsComplete = 500;
  const professionalsTeam = 70;
  const awardsWinning = 98;
  

  const text = ".ARTIFICIAL.INTELLIGENCE";

  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col items-center mt-20"
    >
      {/* Clients Icons */}
      <div className="slide overflow-visible w-full mt-8 flex items-center">
        <motion.div
          className="flex items-center whitespace-nowrap text-white text-xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(6)].map((_, repeatIndex) =>
            icons.map((item, index) => (
              <motion.div key={`${repeatIndex}-${index}`} className="flex items-center">
                <span className="tracking-wider text-2xl mx-8">{item.icon}</span>
                <span className="tracking-wider text-6xl mx-8">{item.label.toUpperCase()}</span>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      {/* Metrics Section */}
      <div className="w-full my-10 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center text-center text-white gap-10 p-10 md:p-20">
        {/* Years of Experience */}
        <div className="relative w-full md:w-1/4">
          <svg viewBox="0 0 200 100" className="w-full h-32 md:h-40">
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="#2ca378"
              strokeWidth="2"
              fontSize="90"
              fontFamily="Arial"
              fontWeight="bold"
              className="hover:fill-[#2ca378] hover:stroke-0 transition-colors duration-300"
            >
              {yearsOfExperience}
            </text>
          </svg>
          <p className="mt-2 text-lg md:text-xl">Years Of Experience</p>
        </div>

        {/* Projects Complete */}
        <div className="relative w-full md:w-1/4">
          <svg viewBox="0 0 200 100" className="w-full h-32 md:h-40">
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="#2ca378"
              strokeWidth="2"
              fontSize="80"
              fontFamily="Arial"
              fontWeight="bold"
              className="hover:fill-[#2ca378] hover:stroke-0 transition-colors duration-300"
            >
              {projectsComplete}
            </text>
          </svg>
          <p className="mt-2 text-lg md:text-xl">Project's Complete</p>
        </div>

        {/* Team Members */}
        <div className="relative w-full md:w-1/4">
          <svg viewBox="0 0 200 100" className="w-full h-32 md:h-40">
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="#2ca378"
              strokeWidth="2"
              fontSize="80"
              fontFamily="Arial"
              fontWeight="bold"
              className="hover:fill-[#2ca378] hover:stroke-0 transition-colors duration-300"
            >
              {professionalsTeam}
            </text>
          </svg>
          <p className="mt-2 text-lg md:text-xl">Professionals Team</p>
        </div>

        {/* Awards */}
        <div className="relative w-full md:w-1/4">
          <svg viewBox="0 0 200 100" className="w-full h-32 md:h-40">
            <text
              x="50%"
              y="60%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="none"
              stroke="#2ca378"
              strokeWidth="2"
              fontSize="80"
              fontFamily="Arial"
              fontWeight="bold"
              className="hover:fill-[#2ca378] hover:stroke-0 transition-colors duration-300"
            >
              {awardsWinning}
            </text>
          </svg>
          <p className="mt-2 text-lg md:text-xl">Awards Winning</p>
        </div>
      </div>

      {/* Scrolling Title */}
      <div className="slide w-full h-[100px] flex items-center mt-20 overflow-hidden">
        <motion.div
          className="inline-flex whitespace-nowrap text-9xl text-white tracking-wider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <span className="mr-10" key={i}>
              {text.toUpperCase()}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SlideSection2;
