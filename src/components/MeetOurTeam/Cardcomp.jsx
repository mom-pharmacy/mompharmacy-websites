
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Profilecard from "./profilecard";

export default function CardComp({ name, designation, img, about, isActive, id, setActiveProfile }) {
  return (
    <>
      <motion.div
        className={`transition-all shadow-xl rounded-2xl duration-300 ${isActive
            ? "scale-90 md:w-60 w-full p-1"
            : "opacity-100 md:scale-90 scale-95"
          }`}
        style={isActive ? {
          background: 'linear-gradient(to top, #38b2ac, transparent)',
        } : {}}
      >

        <div className="bg-white w-full h-full p-4 rounded-xl">
          <div className="relative flex justify-center">
            <img
              src={img}
              alt={name}
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover mb-4 border"
            />

          </div>
          <h2 className="font-bold text-base text-xl  text-center md:text-xl lg:text-2xl text-[#444444]">{name}</h2>
          <p className="text-lg md:text-base text-center lg:text-lg text-[#444444] mt-1">{designation}</p>


          {isActive && (
            <motion.div
              className="text-sm lg:text-lg md:text-md text-center text-[#00A79B] mt-2 flex inline-flex justify-center items-center gap-1 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => { setActiveProfile(id); }}
            >
              Read More <FaArrowRight />
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}
