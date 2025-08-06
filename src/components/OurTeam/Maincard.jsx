import React from "react";
import { motion } from "framer-motion";

function Maincard() {
  return (
    <div className="flex flex-col items-center xl:h-auto justify-center md:h-auto pt-10 h-auto bg-[#00A79B] p-20 ">
      <div className=" flex flex-col items-center">
        <img
          className="flex xl:h-50 xl:w-120 md:h-50 md:w-120 h-40 w-100 p-3 items-center animate-bounce"
          src="/4pills.png"
        ></img>
        <div className="text-gray-100">
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }} 
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
            className="text-white xl:text-6xl md:text-4xl text-xl font-['fredoka_one'] md:ml:40 text-center overflow-hidden whitespace-nowrap mb-2">
            a passionate team delivering
          </motion.h1>
          </div>
          <div>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
            className="text-yellow-300 xl:text-6xl md:text-4xl text-xl font-['fredoka_one'] text-center overflow-hidden whitespace-nowrap mb-2"
          >
            care, speed, and trust
          </motion.h1>
          </div>
          <div>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
            className="text-white xl:text-6xl md:text-4xl text-xl font-['fredoka_one'] text-center overflow-hidden whitespace-nowrap">
            every minute,with every medicine.
          </motion.h1>
          </div>
        </div>
      </div>
  );
}

export default Maincard;
