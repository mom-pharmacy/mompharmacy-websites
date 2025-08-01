import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Profilecard from "./profilecard";

export default function CardComp({ name, designation, img, about, isActive ,id ,  setActiveProfile }) {
  
  return (
    <>
      <motion.div
        className={`relative bg-[url('/idcard.png')] bg-center bg-h-10 bg-w-10 rounded-3xl shadow-md text-center px-4 py-6 gap-2 transition-all duration-300 ${isActive
            ? "scale-105 shadow-xl border-b-4 border-r-2 border-l-2 w-1/4 h-1/4 border-[#00a99d] h-65 w-60"
            : "opacity-80 scale-95"
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