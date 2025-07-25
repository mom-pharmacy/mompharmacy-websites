
import React from "react";
import { CiSearch } from "react-icons/ci";

const OpenPositions = () => {
  return (
    <div className="px-4 py-10 bg-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">
          open positions
        </h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-2">
          calling all talent! We are hiring for the positions listed below.
        </p>
        <p className="text-lg md:text-2xl text-teal-600 mb-8">
          if you are ready to join the mom team, apply today only!
        </p>


        <div className="flex items-center gap-3 bg-[#BFE9E6] rounded-4xl p-3 w-full max-w-xl mx-auto">
          <div className="bg-white rounded-full p-2">
            <CiSearch className="text-3xl text-teal-700" />
          </div>

          <input
            type="search"
            placeholder="Type keywords, job role or designation"
            className="flex-grow border-none outline-none bg-transparent text-lg text-black placeholder-gray-600"
          />

          <button className="text-base font-medium rounded-3xl bg-teal-600 text-white px-4 py-2 hover:bg-[#FADB14] hover:text-black transition">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
