import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Buttons/BorderButton";
import logo from '../../public/Home/logo.jpg';
import Heart from '../assets/momp/dotheart.png';
import Clock from '../assets/momp/clock.png'
import rectangle1 from '../assets/momp/mainImg.png'
import img1 from '../assets/momp/img1.png'
import img2 from '../assets/momp/bloodDonor.png'
import img3 from '../assets/momp/location.png'
import img4 from '../assets/momp/prescription.png'
import img5 from '../assets/momp/map.png'
import img6 from '../assets/momp/icon.png'
import Footer from "./Home/Footer";
export default function JobLanding() {
const[isHover, setHover]=useState(false)

  return (
    <div className="bg-[#00a79b] w-full inline-block pb-20 -mt-20">
      <motion.div className="px-2 py-2 flex justify-between">
        <div className="py-5">
          <Button title="back" link="#" />
        </div>

        <motion.div initial={{y:"-20%"}} animate={{y:0}} transition={{duration:1}} className="flex hidden lg:block" >
          <p className=" font-family:Fredoka text-xl rounded-bl-2xl rounded-br-2xl px-10 mb-6 py-3 bg-white inline">
            be among first few users to try our app and gives us your valuable
            feedback &nbsp;
            <span className="text-[#00a79b] text-xl inline">try now!</span>
          </p>
        </motion.div>

        <div className="py-5">
          <button className="bg-white rounded-4xl px-5 py-1 h-9 flex justify-center">
            english
          </button>
        </div>
      </motion.div>
      <div className="flex justify-between flex-col lg:flex-row md:flex-row xl:flex-row ">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y:-50,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >
          <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row items-center lg:px-20 justify-center py-30 ">
            <div>
              <img src={logo} alt="logo" className="w-30 h-30 lg:w-45 lg:h-45" />
            </div>
            <div>
              <p className="text-3xl lg:text-7xl text-white font-['Fredoka_One'] py-5 lg:py-10">
                pharmacy
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center justify-cener lg:px-20 px-5" >
          <div className="flex bg-white h-14 w-70 lg:w-140  relative bottom-25 py-1 rounded-xl">
            <img
              src={Heart}
              alt="heart"
              className="w-10 h-12 lg:w-13 lg:h-15 relative bottom-7"
            />
            <p className=" text-md lg:text-3xl text-center lg:px-5 font-['Fredoka_One'] mb-2">
              medicine & more on minutes
            </p>
            <img src={Clock} alt="heart" className="w-10 h-10 lg:w-12 lg:h-12 lg:left-10 relative top-5" />
          </div>
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="px-10 py-5 lg:px-20 lg:py-15"
        >
          <motion.img
            src={img6}
            alt="icon"

            className="absolute z-0 h-30 top-140 lg:top-21 left-0 lg:left-190"
            animate={
              isHover ? { x: 5, y: -5, rotate: 20 } : { x: 0, y: 0, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 100 }}
          />
          <motion.img
            src={img1}
            alt=""
            animate={isHover ? { x: 0, y: 5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute md:block  h-18 right-2 z-1"
          />
          <motion.img
            src={img2}
            alt="bloodDonor"
            animate={isHover ? { x: -4, y: 4 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-170 lg:top-52 right-30 lg:right-65 h-16 lg:h-30 w-50 lg:w-70 z-1"
          />
          <motion.img
            src={img3}
            alt="location"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute lg:top-100 lg:h-10 h-7 top-190 right-10 lg:right-25 z-1"
          />
          <motion.img
            src={img4}
            alt="prescription"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute z-1 h-15 lg:h-30 top-210 lg:top-120 left-3 lg:left-195"

          />
          <motion.img
            src={img5}
            alt="map"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute z-1 h-20 lg:h-30 top-220 lg:top-135 right-8"
          />
          <motion.img
            src={rectangle1}
            alt="mainimg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-90 h-100lg:w-90 lg:h-120 relative"
          />
        </motion.div>
      </div>
    </div>

  );
}

