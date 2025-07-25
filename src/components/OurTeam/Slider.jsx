import React from "react";
import Image from "../../assets/tabletwithslate.png"; 
const Applynow = () => {
  return (
    <div className="flex justify-center pt-5 px-4">
      <div className="bg-[#F96E83] rounded-3xl flex flex-col lg:flex-row items-center lg:items-start w-full max-w-5xl p-6">
        <div className="mb-4 lg:mb-0 lg:mr-6">
          <img src={Image} alt="tablet" className="w-40 h-40 object-contain" />
        </div>

        <div className="text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <p className="text-[#FADB14] text-2xl lg:text-4xl font-semibold mb-2 lg:mb-0 lg:pr-4">
              mom is calling mom to
              <p>get back to work</p>
            </p>

            <button
              className="bg-white text-xl text-black px-5 py-2 rounded-3xl 
  hover:bg-[#FADB14] hover:text-black transition 
  w-fit mx-auto 
  lg:ml-60 lg:mt-10 lg:mx-0"
            >
              apply now
            </button>
          </div>
          <p className="text-white text-lg lg:text-2xl mt-4">
            An exclusive program helping women return to the workforce
            <p>after a career break.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applynow;