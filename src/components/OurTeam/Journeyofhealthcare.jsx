import React from "react";
import { motion } from "framer-motion";

export default function Journeyofhealthcare() {
  return (
    // <div className=" ">
    //   <div className="">
    //     <h1 className="m-4 text-5xl text-[#00A79B] font-semibold text-center ">
    //       A Journey of Healthcare <br />
    //       Transformation
    //     </h1>
    //   </div>
    //   <motion.div
    //     className="mx-auto h-110 w-250 rounded-2xl flex items-center justify-between"
    //     whileHover={{
    //       scale: 1.05,
    //       boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
    //     }}
    //     transition={{ duration: 0.3, ease: "easeOut" }}
    //   >
    //     <img
    //       src="/Journy.png"
    //       className="w-full h-full object-cover pad rounded-xl"
    //     ></img>
    //   </motion.div>
    // </div>
    <div className=" h-auto m-auto xl:w-[90%] items-center ">
      <div>
        <h1 className="m-5 xl:text-5xl md:text-3xl text-2xl  text-[#00A79B] font-semibold text-center ">
          A Journey of Healthcare <br />
        Transformation
        </h1>
      </div>
       
        <div className="m-auto">
          <img
            src="/Journy.png"
            className="w-full h-full object-cover pad rounded-xl "
          ></img>
        </div>
      </div>
  );
}
