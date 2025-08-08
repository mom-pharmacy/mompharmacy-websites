import React, { useState } from "react";
import Image from "../../assets/Careerpage/tablets.png";
import BlurText from "./BlurText";

const Welcome = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    
  };
  return (
    <div className="bg-[#00a79b] rounded-2xl pt-27 pb-6 px-2">
      <div className="flex flex-col lg:flex-row items-center justify-center mt-1">
        <div className="w-full lg:w-full flex flex-col items-center">
          <div className="space-y-4 mb-8 justify-center">
            <p className="text-white text-2xl md:text-5xl lg:text-5xl font-['Fredoka_One'] flex justify-center">
              <BlurText
                text="Live your purpose, love your work"
                delay={150}
                animateBy="words"
                direction="top"
              />
            </p>
            <p className="text-yellow-300 text-3xl md:text-4xl lg:text-4xl font-['Fredoka_One'] flex justify-center">
              <BlurText
                text=" @mom pharmacy"
                delay={100}
                animateBy="words"
                direction="top"
              />
            </p>
          </div>

             <div className="flex justify-center mt-6">
            <img
              src={Image}
              alt="tablets"
              className="w-40 md:w-60 lg:w-[400px] h-auto mr-5"
            />
          </div>

          <div className="flex justify-center mb-6">
            <button className="text-black font-['Fredoka_One'] bg-white hover:bg-yellow-300 text-xl md:text-2xl lg:text-2xl px-6 py-3 rounded-full transition duration-300">
              explore jobs
            </button>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default Welcome;