import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Profilecard from "./profilecard";

export default function CardComp({ name, designation, img, about, isActive ,id ,  setActiveProfile }) {

  return (
    <>
      <motion.div
        className={`bg-h-10 bg-w-10 rounded-3xl shadow-md text-center md:px-4 py-6 transition-all duration-300 ${isActive
            ? "scale-90 shadow-xl border-b-4 -ml-10 md:ml-0 md:w-60 border-r-2 z-30 border-l-2 border-[#00a99d] p-3 w-40"
            : "opacity-80 md:scale-90 scale-40"
          }`}>
        <div className="relative flex justify-center">
          <img
            src={img}
            alt={name}
            className="h-30 w-30 rounded-full object-cover mb-4 border border-black-200"/>
        </div>
        <h2 className="font-bold text-1xl text-black-800">{name}</h2>
        <p className="text-sm text-black mt-1">{designation}</p>

        {isActive && (
          <motion.div
            className="text-sm text-black-500 mt-2 inline-flex items-center gap-1 cursor-pointer" whileHover={{ scale: 1.05 }} onClick={()=>{setActiveProfile(id)}}>
            Read More <FaArrowRightLong />
          </motion.div>
        )}
      </motion.div>  
    </>
  );
}