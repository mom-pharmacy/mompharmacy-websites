import React from "react";
import Medicine from "../../assets/contactUs/medicine.gif";
import { motion } from "framer-motion";
import Button from "../Buttons/Button";
import Contact from "./Contact";
import GlowButton from "../Buttons/GlowButton";
import bluePill from "../../assets/AboutUs/bluepill.png";
import bluePillBottom from "../../assets/AboutUs/bluepillbottom.png";
export default function TopComponent() {
    const handleClick = () => {
    if (link.startsWith('#')) {
      const id = link.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = link;
    }
  };
  return (
    <>
    <div className="bg-[#00A79B] p-2 sm:p-5 md:p-7 lg:p-8 text-white w-full text-center flex flex-col items-center">
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
        className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-7xl font-bold overflow-hidden whitespace-nowrap font-['Fredoka_One'] pt-20"
      >
        have any innovative
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.7 }}
        className="text-yellow-300 text-4xl lg:text-7xl md:text-5xl font-bold pt-5 pb-5 overflow-hidden font-['Fredoka_One'] whitespace-nowrap"
      >
        idea, suggestion
      </motion.h1>
      <motion.h1
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ width: 0 }}
        transition={{ duration: 1.1, ease: "circInOut", delay: 0.9 }}
        className="text-white text-4xl lg:text-7xl md:text-5xl font-bold pt-5 pb-5 overflow-hidden font-['Fredoka_One'] whitespace-nowrap"
      >
        or grievances
      </motion.h1>

      <div className="flex flex-col gap-5 sm:flex-col md:flex-row lg:flex-row item-center justify-center mt-10">
        <Button title="get in touch" link="#form" onClick={handleClick}/>
        <Button title="give feedback" />
      </div>
      {/* <img
        src={Medicine}
        alt="medicine"
        className="w-40 sm:w-48 md:w-56 lg:w-50 mt-10 sm:mt-16 lg:absolute lg:bottom-4 lg:right-40"
      /> */}
          <div className="absolute lg:top-55 lg:right-60 hidden lg:block md:block md:top-45 md:right-22"> 
              {/* <img src="/Home/pillimage.gif" alt="pill image"></img> */}
              <img src={bluePill} alt="pill image" className="h-25 w-25 animate-bounce" />
              <img src={bluePillBottom} alt="pill image" className="w-25" />
            </div>
      
    </div>
      <div id="form">
      <Contact />
    </div>
    </>
    
  
  );
}
