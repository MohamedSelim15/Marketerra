import React from "react";
import PDF2 from "../../public/StaStandard Packages.pdf";
import Footer from "../Home Components/Footer";

const Packages = () => {
  const images=["../../public/StaStandard/StaStandard Packages_page-0001.jpg","../../public/StaStandard/StaStandard Packages_page-0002.jpg","../../public/StaStandard/StaStandard Packages_page-0003.jpg"];
  return (
    // <div className="w-screen h-screen overflow-hidden m-0 -mb-20 p-0">
    //   <iframe
    //     src={`${PDF2}#toolbar=0&navpanes=0`}
    //     className="w-full h-full border-0"
    //     title="Portfolio PDF"
    //     loading="lazy"
    //   ></iframe>
    // </div>
    
    <div className='justify-center items-center h-screen w-screen'>
        <img src={images[0]} alt="Package 1"  />
        <img src={images[1]} alt="Package 2"  />
        <img src={images[2]} alt="Package 3" className="-mb-20" />
        <Footer />
    </div>


  
  );
};

export default Packages;
