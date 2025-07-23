import React from "react";
import { CiSearch } from "react-icons/ci";

const OpenPositions = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-5xl font-bold text-teal-600 pt-10 pb-3">
          open positions
        </p>
        <p className="text-2xl p-3">
          calling all talent! we are hiring for the positions listed below
        </p>
        <p className="text-2xl text-teal-600 mb-8">
          if you are ready to join the mom team, apply today only
        </p>

        <div className="flex items-center bg-[#BFE9E6] w-[600px] rounded-4xl px-2 py-2 mx-auto">
          <div className="rounded-3xl bg-white p-2">
            <CiSearch className="text-3xl" />
          </div>
          <input
            type="search"
            placeholder="type keywords, job role or designation"
            className="ml-3 w-full border-none outline-none bg-transparent text-2xl text-black placeholder-gray-500"
          />
          <button className="text-xl rounded-3xl text-white bg-teal-600 px-4 py-2 ml-2 hover:bg-[#FADB14] hover:text-black">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;
