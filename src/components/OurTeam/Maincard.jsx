import React from "react";
import { motion } from "framer-motion";

function Maincard() {
  return (
    <div className="flex flex-col items-center xl:h-auto  md:h-auto pt-10 h-auto bg-[#00A79B] ">
      <div className=" flex flex-col items-center">
        <img
          className="flex xl:h-50 xl:w-120 md:h-50 md:w-120 h-40 w-20 p-3 items-center animate-bounce"
          src="/4pills.png"
        ></img>
        <div className="text-gray-100  font-bold ">
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
            className="text-white xl:text-6xl md:text-4xl text-xl font-bold pt-5 pb-5 xl:ml-20 md:ml:40 text-center overflow-hidden whitespace-nowrap"
          >
            a passionate team delivering
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
            className="text-yellow-300 xl:text-6xl md:text-4xl text-xl font-bold pt-5 pb-5 xl:ml-40 text-center overflow-hidden whitespace-nowrap"
          >
            care, speed, and trust
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
            className="text-white xl:text-6xl md:text-4xl text-xl font-bold pt-5 pb-5 xl:mr-20 text-center overflow-hidden whitespace-nowrap"
          >
            every minute,with every medicine.
          </motion.h1>
        </div>
        <div className="p-8 ">
          <button className="h-15 w-50 rounded-4xl  bg-white p-2 hover:bg-amber-300 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h1 className="font-bold xl:text-2xl md:text-xl text-[15px]">be among of us</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maincard;
