import React, { useState } from "react";
import { motion } from "framer-motion";
import { text } from "framer-motion/client";

export default function CardComp(props) {
  const [rotate, setRotate] = useState();
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <div className="">
      <motion.div  className="h-60 w-60     rounded-xl relative"
       
        onHoverStart={() =>
          setIsHovered({
            state: true,
            rotate: -35,
          })
        }
        onHoverEnd={() =>
          setIsHovered({
            state: false,
            rotate: 0,
          })
        }
      >
        <img
          src="/dev1.png"
          className="w-full h-full object-cover pad rounded-xl"
        ></img>
        <motion.div
          className={`w-full flex justify-between  absolute bottom-0 left-0 text-white ${
            isHovered.state ? "bg-white" : "bg-white/5"
          } backdrop-blur-sm rounded-b-lg p-2.5`}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.3 }}
            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
          >
            <h1 className="text-2xl text-[#00A79B] font-bold">{props.name}</h1>
            <h1 className={`${isHovered.state ? "text-black" : "text-white"}`}>
              {props.designation}
            </h1>
          </motion.div>

          <motion.div
            className="h-8 w-7 m-2"
            animate={{ rotate: isHovered.rotate }}
            whileTap={{ scale: 0.8 }}
          >
            <img src="/arrow.png"></img>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
