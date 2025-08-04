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

      <div className="p-6 lg:p-12 font-['Fredoka_One'] grid grid-cols-2 md:flex md:flex-row justify-center lg:gap-4 gap-3">
        {programs.map((program, index) => (
          <button
            key={index}
            className="group border-2 border-teal-600 text-teal-600
              lg:py-3 lg:px-3 px-2 py-2 rounded-md w-full lg:w-65 md:px-2
              hover:bg-[#FADB14] hover:border-[#FADB14] hover:text-black
              text-sm lg:text-lg flex items-center justify-between transition duration-300"
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
