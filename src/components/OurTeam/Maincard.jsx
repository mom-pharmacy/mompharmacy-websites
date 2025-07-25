import React from "react";
import { motion } from "framer-motion";

function Maincard() {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-[#00A79B] p-30 ">
      <div className=" flex flex-col items-center">
        <img
          className="flex h-50 w-120 p-3 items-center animate-bounce"
          src="/4pills.png"
        ></img>
        <div className="text-gray-100  font-bold text-5xl ">
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
            className="text-white text-6xl font-bold pt-5 pb-5 ml-20 overflow-hidden whitespace-nowrap"
          >
            a passionate team delivering
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
            className="text-yellow-300 text-6xl font-bold pt-5 pb-5 ml-40 overflow-hidden whitespace-nowrap"
          >
            care, speed, and trust
          </motion.h1>
          <motion.h1
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
            className="text-white text-6xl font-bold pt-5 pb-5 mr-20 overflow-hidden whitespace-nowrap"
          >
            every minute,with every medicine.
          </motion.h1>
        </div>
        <div className="p-8 ">
          <button className="h-15 w-50 rounded-4xl  bg-white p-2 hover:bg-amber-300 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h1 className="font-bold text-2xl ">be among of us</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maincard;
