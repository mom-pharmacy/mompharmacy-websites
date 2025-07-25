import React from "react";
import Image from "../../assets/Careerpage/tablets.png";
import BlurText from "./BlurText";

const Welcome = () => {
  return (
    <div className="bg-[#00a79b] py-10 px-4">
      <div className="space-y-4 mb-10 justify-center">
        <p className="text-white text-4xl md:text-5xl font-['Fredoka_One'] lg:text-7xl sm:text:3xl flex justify-center">
          <BlurText
            text="welcome to careers"
            delay={50}
            animateBy="words"
            direction="top"
          />
        </p>
        <p className="text-yellow-300 text-4xl md:text-5xl lg:text-6xl font-['Fredoka_One'] flex justify-center">
          <BlurText
            text=" @mom pharmacy"
            delay={100}
            animateBy="words"
            direction="top"
          />
        </p>
        <p className="text-white text-3xl md:text-4xl lg:text-6xl font-['Fredoka_One'] flex justify-center">
          <BlurText
            text="let's work together"
            delay={150}
            animateBy="words"
            direction="top"
          />
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <button className="text-black font-['Fredoka_One'] bg-white hover:bg-yellow-300 text-xl md:text-2xl lg:text-2xl px-6 py-3 rounded-full transition duration-300">
          explore jobs
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src={Image}
          alt="tablets"
          className="w-60 md:w-80 lg:w-[450px] h-auto"
        />
      </div>
    </div>
  );
};

export default Welcome;



