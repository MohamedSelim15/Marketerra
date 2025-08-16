import React from "react";
import PDF from "../../public/Small Portfolio 2025.pdf";
import Footer from "../Home Components/Footer";
import OurWork from "../Porfolio Components/OurWork";

const Portfolio = () => {
  const Images = [
    "../../public/Small Portfolio/Small Portfolio 2025_page-0001.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0002.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0003.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0004.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0005.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0006.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0007.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0008.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0009.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0010.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0011.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0012.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0013.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0014.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0015.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0016.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0017.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0018.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0019.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0020.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0021.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0022.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0023.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0024.jpg",
    "../../public/Small Portfolio/Small Portfolio 2025_page-0025.jpg",
  ];
  return (
    // <div className="w-screen h-screen overflow-hidden m-0 -mb-20 p-0">
    //   <iframe
    //     src={`${PDF}#toolbar=0&navpanes=0`}
    //     className="w-full h-full border-0"
    //     title="Portfolio PDF"
    //     loading="lazy"
    //   ></iframe>

    // </div>

    // <div>
    //   <div className="flex flex-col justify-center items-center w-screen">
    //     {Images.map((img, index) => (
    //       <img
    //         key={index}
    //         src={img}
    //         alt={`Portfolio page ${index + 1}`}
    //         className={`w-lvw r object-contain ${
    //           index === Images.length - 1 ? "-mb-20" : ""
    //         }`}
    //       />
    //     ))}
    //   </div>
    //   <Footer />
    // </div>

    <div>
      <OurWork/>
    </div>
  );
};

export default Portfolio;
