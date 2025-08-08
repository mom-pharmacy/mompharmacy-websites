import React from "react";
import { motion } from "framer-motion";
import { FaCapsules, FaHeartbeat } from "react-icons/fa";
import Doctor from "../../assets/AboutUs/doctor.png";
import heart from '../../assets/AboutUs/heartdot.png';
import heartbeat from '../../assets/AboutUs/heartbeat.png';
import ImageCapsule from '../../assets/AboutUs/capsule.png';

const MissionVision = () => {
  return (
    <div className="bg-white py-8 px-2 p-2 md:px-20">
      <motion.div
        className="flex items-center flex-col lg:flex-row gap-5 justify-center lg:px-40 justify-center px-5 h-44 mb-10"
      >
        <img src={Doctor} alt="Delivery Boy" className="h-35 lg:h-35 md:h-30" />
        <p className="text-2xl lg:text-4xl md:text-4xl font-[Fredoka_One] text-[#444444]">
          delivering with <span className="text-[#00A79B]">care & trust,</span>{" "}
          our belief{" "}
          <span className="text-[#00A79B]">“health is blessing”</span>
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 md:gap-30 p-6 md:px-5 place-items-center">
        <div className="">
          <div className="flex items-center mb-4 gap-3">
            <img src={heart} alt="" className="w-8 h-10" />
            <h2 className="text-3xl lg:text-5xl font-bold text-[#00A79B] font-['fredoka_one'] tracking-wider">
              our mission
            </h2>
          </div>
          <div className="bg-[#F0FDFB] flex items-center lg:h-55 sm:h-auto border-teal-600 w-80 lg:w-110 md:h-68 border-2 p-4 h-auto rounded-2xl hover:scale-105 transition-transform duration-300 ">
            <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
              to bridge the gap between people and essential
              <span className="text-[#00A79B] font-semibold">
                {" "}
                healthcare
              </span>{" "}
              by delivering affordable, on-demand medication — with the speed
              health every home is just moments away from
              <span className="text-[#00A79B] font-semibold">
                {" "}
                well-being.
              </span>{" "}

            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center mb-4 gap-3 ml-10 md:ml-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#00A79B] font-['fredoka_one']  tracking-wider">
              our vision
            </h2>

            <img src={heartbeat} alt="" className="w-12 h-10" />
          </div>
          <div className="bg-[#F0FDFB] relative h-auto md:h-68 lg:h-55 sm:h-auto lg:w-110 w-80 border-teal-600 border-2 p-4 rounded-2xl hover:scale-105 transition-transform duration-300 ">
            <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
              to become the most trusted global name in doorstep healthcare,
              delivering
              <span className="text-[#00A79B] font-semibold">
                not just medicines
              </span>{" "}
              , but peace of mind, through technology that feels like{" "}
              <span className="text-[#00A79B] font-semibold"> 
                a mother’s care
              </span>{" "}
              — fast, reliable, and full of heart, making exceptional wellness
              accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
