import React from "react";
import Image from "../../assets/tabletwithslate.png";
import mother from '../../assets/Careerpage/mother.png';
const Applynow = () => {
  return (
    <div className="flex justify-center p-3">
      <div className="bg-[#F96E83] rounded-3xl flex flex-row h-auto lg:flex-row items-center lg:items-start w-full max-w-5xl lg:p-6">
        {/* <div className="mb-4 lg:mb-0 lg:mr-6 pr-2">
          <img
            src={Image}
            alt="tablet" 
            className="lg:w-40 lg:h-40 w-30 h-30 object-contain"
          />
        </div> */}

        <div className="text-center text-left">
          <div className="flex">
            <div className="flex-1">
              <div className="flex flex-col w-full sm:w-auto md:w-auto font-['Fredoka_One'] lg:flex-row items-center lg:items-start">
                <p className="text-[#FADB14]  pl-3 lg:pl-0 text-xl md:text-3xl lg:text-4xl sm:text-lg font-semibold lg:mb-0 lg:pr-4">
                  mom is calling mom to get back to work
                </p>
              </div>
              <p className="text-white w-auto pl-3 lg:pl-0 lg:w-170 sm:w-auto md:w-auto text-xs md:text-2xl sm:text-xs lg:text-2xl">
                an exclusive program helping women return to the workforce after
                a career break.
              </p>

              <button
                className="bg-white text-xs px-2 py-2 text-black rounded-3xl 
  hover:bg-[#FADB14] hover:text-black transition mx-auto sm:m-5 lg:m-0 lg:mt-2
 lg:text-xl"
              >
                apply now
              </button>
            </div>

            <div className="ml-20">
              <img src={mother} alt="" className="w-40 h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applynow;
