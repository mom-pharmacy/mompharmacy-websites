import React from "react";
import ImageComp from "./ImageComp";
import { motion } from "framer-motion";

export default function Innovator() {
  return (
    <div className=" flex h-screen items-center flex-col bg-[#00A79B]">
      <div className="m-2">
        <div className="mx-auto h-110 w-280 rounded-2xl border-2 border-[#00A79B] flex items-center justify-between">
          <div className="m-5">
            <ImageComp img="/dev1.png"></ImageComp>
          </div>

          <div className="m-10">
            <div className="flex justify-between">
              <div>
                <motion.h1
                  initial={{ y: -250 }}
                  animate={{ y: -10 }}
                  transition={{
                    delay: 0.3,
                    type: "keyframes",
                    stiffness: 500,
                    duration: 3,
                  }}
                >
                  <motion.span className="text-white font-bold text-4xl">
                    a
                  </motion.span>
                  <motion.span className="text-yellow-300 font-bold text-4xl ml-2 animate-pulse">
                    innovator
                  </motion.span>
                </motion.h1>

                <motion.h1
                  className=" text-2xl text-white font-bold "
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.8 ,duration:1}}
                >
                  pardha saradhi
                </motion.h1>
                <motion.h1
                  className="text-white mt-1"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.1,
                    duration: 1,
                    type: "spring",
                    stiffness: 500,
                  }}
                >
                  founder and chairman
                </motion.h1>
                <br></br>
              </div>

              <div className="h-12 w-15 flex gap-3 mr-30 ">
                <motion.img
                  src="/mail.png"
                  className="rounded-3xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                <motion.img
                  src="/Linkidin.png"
                  className="rounded-3xl"
                  whileHover={{
                    scale: 1.05,
                    
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
            <p className="text-white text-xl">
              to bridge the gap between people and essential healthcare by
              delivering affordable, on-demand medication - with the speed of
              innovation and the compassion of family - ensuring that every home
              is just moments away from well-being. to bridge the gap between
              people and essential healthcare by delivering affordable,
              on-demand medication - with the speed of innovation and the
              compassion of family - ensuring that every home is just moments
              away from well-being."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
