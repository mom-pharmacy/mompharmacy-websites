import React from "react";
import Medicine from "../../assets/contactUs/medicine.gif";
import { motion } from "framer-motion";

export default function TopComponent() {
  return (
    <div className="bg-[#00A79B] text-white w-full text-center flex flex-col items-center">
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
        className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-7xl font-bold overflow-hidden whitespace-nowrap pt-20"
      >
        have any innovative
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
        className="text-yellow-300 text-4xl lg:text-7xl md:text-5xl font-bold pt-5 pb-5 overflow-hidden whitespace-nowrap"
      >
        idea, suggestion
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
        className="text-white text-4xl lg:text-7xl md:text-5xl font-bold pt-5 pb-5 overflow-hidden whitespace-nowrap"
      >
        or grievances
      </motion.h1>

      <div className="flex gap-5 sm:flex-col-1 md:flex-row lg:flex-row mt-10">
        <button className="bg-white p-3 text-black text-xl font-bold rounded-full">
          get in touch
        </button>
        <button className="bg-white p-3 text-black text-xl font-bold rounded-full">
          give feedback
        </button>
      </div>
      <img
        src={Medicine}
        alt="medicine"
        className="w-40 sm:w-48 md:w-56 lg:w-50 mt-10 sm:mt-16 lg:absolute lg:bottom-4 lg:right-40"
      />
    </div>
  );
}
