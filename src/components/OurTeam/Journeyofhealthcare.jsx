import React from "react";
import { motion } from "framer-motion";

export default function Journeyofhealthcare() {
  return (
    <div className=" h-auto m-auto md:p-5 xl:w-[90%] items-center ">
      <div>
        <h1 className="m-5 xl:text-5xl md:text-3xl text-2xl  text-[#00A79B] font-semibold text-center ">
          A Journey of Healthcare <br />
        Transformation
        </h1>
      </div>
       
        <div className="m-auto p-5">
          <img
            src="/Journy.png"
            className="w-full h-full object-cover pad rounded-xl "
          ></img>
        </div>
      </div>
  );
}
