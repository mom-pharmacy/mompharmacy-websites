import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CareerProgram = () => {

  const programs = ["early career", "professionals", "returnship", "alumni"];

  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold text-teal-600 pt-10 pb-3 font-fredoka">
          career programs
        </p>
        <p className="text-2xl p-3">
          we have career programs for different experience level
        </p>
        <p className="text-2xl text-teal-600">
          if you are ready to join the mom team, explore below programs
        </p>
      </div>

      <div className="p-10 text-center flex flex-wrap justify-center">
        {programs.map((program, index) => (
          <button key={index} className="border-2 border-teal-600 text-teal-600 font-semibold py-2 px-6 
          rounded-md m-2 hover:bg-[#FADB14] hover:border-none hover:text-black hover text-xl transition
          duration-300 w-60 p-10 text-2xl flex items-center justify-between h-14">
            <span>{program}</span>
            <FiArrowRight className="ml-3 text-2xl" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CareerProgram;
