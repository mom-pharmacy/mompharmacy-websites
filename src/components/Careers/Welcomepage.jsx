import React, { useState } from "react";
import Image from "../../assets/Careerpage/tablets.png";
import BlurText from "./BlurText";
// import Medicinetalkcard from "./medicinetalkcard";
import { CiSearch } from "react-icons/ci"; 
import Filter from "./filter"; 


const Welcome = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    
  };
  return (
    <div className="bg-[#00a79b] pt-27 pb-6 px-2">
      <div className="flex flex-col lg:flex-row items-center justify-center mt-1">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="space-y-4 mb-8 justify-center">
            <p className="text-white text-4xl md:text-5xl font-['Fredoka_One'] lg:text-5xl sm:text:3xl flex justify-center">
              <BlurText
                text="create a career what you love"
                delay={50}
                animateBy="words"
                direction="top"
              />
            </p>
            <p className="text-white text-2xl md:text-3xl lg:text-5xl font-['Fredoka_One'] flex justify-center">
              <BlurText
                text="we are building what we love"
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

          <div className="flex justify-center mb-6">
            <button className="text-black font-['Fredoka_One'] bg-white hover:bg-yellow-300 text-xl md:text-2xl lg:text-2xl px-6 py-3 rounded-full transition duration-300">
              explore jobs
            </button>
          </div>

          <div className="flex justify-center mt-6">
            <img
              src={Image}
              alt="tablets"
              className="w-40 md:w-60 lg:w-[400px] h-auto animate-bounce"
            />
          </div>
        </div>

        {/* <div className="flex justify-center relative mt-5">
          <img
            src="https://res.cloudinary.com/dpvwwzotp/image/upload/v1753864380/Screenshot_2025-07-30_130424-removebg-preview_1_opv7ze.png"
            alt="tablets"
            className="w-60 md:w-80 lg:w-[600px] h-auto"
          />
          <div className="absolute inset-0 flex items-center ml-70 z-10 pointer-events-none">
            <Medicinetalkcard />
          </div>
        </div> */}
      </div>
      <div className="flex gap-2 lg:px-32 w-full">
          <div className="flex items-center gap-2 bg-[#BFE9E6] rounded-3xl px-2 py-2 w-full max-w-lg mx-auto">
            <div className="bg-white rounded-full p-1.5">
              <CiSearch className="text-xl text-teal-700" />
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search job role or designation"
              className="flex-grow border-none outline-none bg-transparent text-sm md:text-base text-black placeholder-gray-600"
            />
            <button
              onClick={handleSearch}
              className="text-sm font-medium rounded-3xl bg-teal-600 text-white px-3 py-1.5 hover:bg-[#FADB14] hover:text-black transition"
            >
              search
            </button>
          </div>
        </div>
    </div>
  );
};

export default Welcome;