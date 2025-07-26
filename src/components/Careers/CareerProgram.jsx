import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const CareerProgram = () => {
  const programs = ["early career", "professionals", "returnship", "alumni"];

  return (
    <div>
      <div className="text-center pt-10 px-4">
        <p className="text-5xl font-['Fredoka_One'] text-teal-600 pb-3 font-fredoka">
          career programs
        </p>
        <p className="text-2xl py-2">
          we have career programs for different experience levels
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl text-teal-600">
          if you are ready to join the mom team, explore below programs
        </p>
      </div>

      <div className="p-10 font-['Fredoka_One'] flex flex-wrap justify-center gap-4">
        {programs.map((program, index) => (
          <button
            key={index}
            className="group border-2 border-teal-600 text-teal-600
              py-3 px-6 rounded-md w-full sm:w-full lg:w-auto
              hover:bg-[#FADB14] hover:border-[#FADB14] hover:text-black
              text-2xl flex items-center justify-between w-60 transition duration-300"
          >
            <span>{program}</span>
            <FaArrowRightLong className="ml-3 text-2xl transition-transform duration-300 group-hover:-rotate-45" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerProgram;
