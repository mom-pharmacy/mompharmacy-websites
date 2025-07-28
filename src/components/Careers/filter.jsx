import React, { useState } from "react";
import Image from "../../assets/Careerpage/filter.svg";
import { AnimatePresence, motion } from "framer-motion";

const Filter = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);

  const toggleFilter = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const closeModal = () => {
    setShowFilterOptions(false);
  };

  return (
    <div className="relative">
      <div
        className="border-2 w-fit h-10 flex items-center px-4 gap-2 border-teal-600 rounded-3xl cursor-pointer"
        onClick={toggleFilter}
      >
        <button className="text-xl text-teal-600 font-bold">Filter</button>
        <img src={Image} alt="Filter icon" className="w-6 h-6" />
      </div>

      <AnimatePresence mode="wait">
        {showFilterOptions &&<motion.div initial={{x:-1000 , display:"none"}} animate={{x:0 , display:"flex"}} transition={{duration:0.2}}  exit={{x:-1000}} className='flex fixed h-screen w-screen justify-center z-1700' > (
          <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-xl relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              >
                X
              </button>

              <h2 className="text-lg font-semibold text-teal-600 mb-4">
                filter jobs
              </h2>

              <div className="space-y-4">
                <div>
                  <select
                    className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white hover:bg:teal-300"
                    name="select-department"
                  >
                    <option value="" className="">
                      Select Department{" "}
                    </option>
                    <option value="frontend">Front End Developer</option>
                    <option value="tester">Tester</option>
                    <option value="design">Design</option>
                  </select>
                </div>

                <div className="flex gap-2">
                  <select
                    className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white"
                    name="experience"
                  >
                    <option value="">Years of Experience</option>
                    <option value="0-2">0-2</option>
                    <option value="3-5">3-5</option>
                    <option value="4-6">4-6</option>
                  </select>

                  <select
                    className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white"
                    name="city"
                  >
                    <option value="">Select City</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="chennai">Chennai</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )
        </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Filter;
