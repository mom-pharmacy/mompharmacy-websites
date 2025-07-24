import React from "react";
import Medicine from "../../assets/contactUs/medicine.gif";
import { motion } from "framer-motion";

export default function TopComponent() {
  return (
    <div className="bg-[#00A79B] text-white h-screen w-full text-center flex flex-col items-center justify-center    ">
      <motion.h1

         initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{  duration: 1.1, ease: "easeInOut", delay: 0.3 }}
        className="text-white text-7xl font-bold pt-5 pb-5 overflow-hidden whitespace-nowrap"
      >
        have any innovative
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
        className="text-yellow-300 text-7xl font-bold pt-5 pb-5 overflow-hidden whitespace-nowrap"
      >
         idea, suggestion
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
        className="text-white text-7xl font-bold pt-5 pb-5 overflow-hidden whitespace-nowrap"
      >
        or grievances
      </motion.h1>

      <div className="flex gap-5 mt-10">
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
        className="relative bottom-60 left-100"
      />
    </div>
  );
}
