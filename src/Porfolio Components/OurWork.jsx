import React from "react";

const OurWork = () => {
  const clients = [
    {
      title: "Floki Burger",
      subTitle: "Social Media Design",
      titleColor: "rgb(242 166 59)",
      image: [
        "/Folk Burger/Screenshot 2025-08-16 195253.png",
        "/Folk Burger/Screenshot 2025-08-16 195238.png",
        "/Folk Burger/Screenshot 2025-08-16 195315.png",
      ],
      image2: [
        "/Folk Burger/Screenshot 2025-08-16 195325.png",
        "/Folk Burger/Screenshot 2025-08-16 195331.png",
        "/Folk Burger/Screenshot 2025-08-16 195343.png",
      ],
      imageShadow: [
        "0 -5px 10px rgba(242, 166, 59, 0.5)",
        "0 5px 10px rgba(242, 166, 59, 0.5)",
      ],
    },
    {
      title: "Andalusia Cafe",
      subTitle: "Social Media Design",
      titleColor: "rgb(73 165 185)",
      image: [
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213605.png",
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213622.png",
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213646.png",
      ],
      image2: [
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213656.png",
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213704.png",
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213710.png",
        "../../public/Andalusia Cafe/Screenshot 2025-08-16 213723.png",
      ],
      imageShadow: [
        "0 -5px 10px rgba(73, 165, 185, 0.5)",
        "0 5px 10px rgba(73, 165, 185, 0.5)",
      ],
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center pt-30 w-screen h-screen">
        <h1 className="slide text-9xl font-bold text-[#2ca378]">
          Some Of Our Works
        </h1>
      </div>

      {clients.map((client, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-center w-screen mb-10"
        >
          <div style={{ color: client.titleColor }} className="font-bold">
            <h1 className="text-5xl text-center">{client.title}</h1>
            <p className="text-2xl text-center mt-4 font-light">
              {client.subTitle}
            </p>
          </div>

          <div className="flex flex-col xl:flex-row flex-wrap justify-center items-center  gap-10 mt-10 pb-20">
            {client.image.map((img, imgIndex) => (
              <img
                key={imgIndex}
                className="rounded-lg shadow-2xs xl:w-[450px] lg:w-[450px] w-[350px]"
                style={{
                  boxShadow: client.imageShadow[0],
                  clientColor: client.titleColor,
                }}
                src={img}
                alt=""
              />
            ))}
            {client.image2.map((img, imgIndex) => (
              <img
                key={imgIndex}
                className="rounded-lg shadow-xl xl:w-[300px] lg:w-[300px] w-[350px]"
                style={{ boxShadow: client.imageShadow }}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurWork;
