import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="  flex relative z-20 lg:h-screen items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-gray-800  mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-3xl sm:text-4xl font-black flex flex-col leading-none  text-gray-800">
            Place where we fuel young minds with innovation and creativity.
          </h1>
          <p className="text-sm sm:text-base text-gray-700 ">
            Step into a world where imagination meets technology. At Idea2Tech,
            we spark innovation and cultivate creativity in every student,
            shaping tomorrow's innovators.
          </p>
          <div className="flex mt-8">
            <a
              href="/get-in-touch"
              // className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              // className="uppercase py-2 px-4 rounded-lg bg-[#FABF2C] border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              className="uppercase py-2 px-4 rounded-lg bg-[#3C9AF5] border-2 border-transparent text-white text-md mr-4 hover:bg-[#5d6dff]"
            >
              Book a Meeting
            </a>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="images/Designer (1).png"
            className="max-w-xs md:max-w-lg m-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
