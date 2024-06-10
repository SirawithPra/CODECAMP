import React, { useState, useEffect } from "react";
import banner from "../assets/banner-bg-1.jpeg";
import food_1 from "../assets/banner-food-1.png";
import food_2 from "../assets/banner-food-2.png";
import food_3 from "../assets/banner-food-3.png";

const foods = [
  {
    id: 1,
    src: food_1,
    title: "Special Offer",
    subtitle_1: `BBQ Chicken `,
    subtitle_2: "Salad",
    subtitle_3: ` with Creamy Avocado`,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illo ipsum totam nisi tempora quibusdam nulla quos excepturi in! Quas asperiores, sint labore illum modi aliquid saepe ut est adipisci.",
  },
  {
    id: 2,
    src: food_2,
    title: "Best In Cafeu",
    subtitle_1: `Asian Letter Wrap `,
    subtitle_2: "Chicken",
    subtitle_3: ` Chopper Salad`,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illo ipsum totam nisi tempora quibusdam nulla quos excepturi in! Quas asperiores, sint labore illum modi aliquid saepe ut est adipisci.",
  },
  {
    id: 3,
    src: food_3,
    title: "Fresh & Tasty",
    subtitle_1: `Different `,
    subtitle_2: "Spice",
    subtitle_3: ` For A Different Taste`,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illo ipsum totam nisi tempora quibusdam nulla quos excepturi in! Quas asperiores, sint labore illum modi aliquid saepe ut est adipisci.",
  },
];

const Banner = () => {
  const [currentFood, setCurrentFood] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("opacity-0");
      setTimeout(() => {
        setCurrentFood((prevFood) => (prevFood + 1) % foods.length);
        setFadeState("opacity-100");
      }, 500); // ระยะเวลาตามที่กำหนดใน transition
    }, 5000); // เปลี่ยนแบนเนอร์ทุกๆ 5 วินาที
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home relative z-40 cursor-default">
      <div
        className="select-none bg-left text-secondary flex flex-row flex-wrap items-center pt-5 w-full min-h-screen bg-auto md:bg-cover "
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="md:px-20 px-24 banner-container block md:flex ">
          <div className={` pt-10 md:pt-0 flex flex-col justify-center banner-text basis-1/2 transition-opacity duration-500 ${fadeState}`}>
            <h2 className="text-primary md:text-left font-medium"
            style={{fontFamily: "'Apple Chancery', sans-serif"}}>
              {foods[currentFood].title}
            </h2>
            <h5 className="mt-5 md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium min-h-[65px]">
              {foods[currentFood].subtitle_1}
              <b className="text-primary underline">
                {" "}
                {foods[currentFood].subtitle_2}
              </b>
              {foods[currentFood].subtitle_3}
            </h5>
            <p className="mt-5 text-sm md:text-base md:text-left">
              {foods[currentFood].description}{" "}
            </p>
            <div className="flex mt-5 items-center justify-center md:justify-start">
              <button className="bg-primary hover:bg-secondary text-white text-sm py-3 px-4 rounded">
                Order Now
              </button>
              <div className="ml-8 mr-4 bg-primary rounded-cr w-10 h-10 flex items-center justify-center cursor-pointer">
                <button className="text-white">x</button>
              </div>
              <p className="text-sm">Watch Video</p>
            </div>
          </div>
          <div
            className={`flex items-center banner-picture basis-1/2 transition-opacity duration-500 ${fadeState}`}
          >
            <img
              className="pt-10 md:pt-0"
              src={foods[currentFood].src}
              alt=""
            />
          </div>
        </div>
        <div className="relative left-1/2 -translate-x-1/2 py-10 md:py-0 md:pb-10">
          {foods.map((food, index) => (
            <button
              key={food.id}
              className={`mx-2 w-10 h-1.5 z-50 ${currentFood === index ? "bg-primary" : "bg-gray-300"
                } cursor-pointer`}
              onClick={() => setCurrentFood(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
