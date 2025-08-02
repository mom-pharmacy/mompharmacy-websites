import React from "react";
import { motion } from "framer-motion";
import { FaCapsules, FaHeartbeat } from "react-icons/fa";
import deliveryBoy from "../../assets/AboutUs/scooty.png";
import heart from '../../assets/AboutUs/heartdot.png';
import heartbeat from '../../assets/AboutUs/heartbeat.png';
import ImageCapsule from '../../assets/AboutUs/capsule.png';

const MissionVision = () => {
  return (
    <div className="bg-white py-3 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="flex items-center gap-6 h-44"
        initial={{ x: "-100%" }}
        animate={{ x: "20%" }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <p className="text-2xl md:text-4xl font-bold text-[#00A79B] whitespace-nowrap">
          delivering care, one reminder at a time.
        </p>

        <img src={deliveryBoy} alt="Delivery Boy" className="h-20 md:h-20" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 px-15">
        <div className="">
          <div className="flex items-center mb-4 gap-3">
            <img src={heart} alt=""
              className="w-8 h-10"
            />
            <h2 className="text-6xl font-bold text-[#00A79B] font-['fredoka_one'] tracking-wider">
              our mission
            </h2>
          </div>
          <div className="bg-[#F0FDFB] lg:h-55 sm:h-auto border-teal-600 w-110 border-2 p-4 h-auto rounded-2xl hover:scale-105 transition-transform duration-300 ">
            <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
              to bridge the gap between people and essential
              <span className="text-[#00A79B] font-semibold"> healthcare</span>
              by delivering affordable, on-demand medication — with the speed
              health every home is just moments away from
              <span className="text-[#00A79B] font-semibold"> well-being.</span>
              <img src={ImageCapsule} alt=""
                className="absolute left-20 top-203 z-10 w-30 md:w-40 z-10 drop-shadow-xl"
              />
            </p>

          </div>

        </div>

        <div className="">
          <div className="flex items-center mb-4 gap-3 ml-10">
            <h2 className="text-6xl  font-bold text-[#00A79B] font-['fredoka_one']  tracking-wider">
              our vision
            </h2>

            <img src={heartbeat} alt="" className="w-12 h-10" />
          </div>
          <div className="bg-[#F0FDFB] h-auto lg:h-55 sm:h-auto w-110 border-teal-600 border-2 p-4 rounded-2xl hover:scale-105 transition-transform duration-300 ">
            <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
              to become the most trusted global name in doorstep healthcare,
              delivering
              <span className="text-[#00A79B] font-semibold">
                not just medicines
              </span>
              , but peace of mind, through technology that feels like
              <span className="text-[#00A79B] font-semibold">
                a mother’s care
              </span>
              — fast, reliable, and full of heart, making exceptional wellness
              accessible.
              <img src={ImageCapsule} alt=""
                className="absolute left-149 top-203 z-10 w-28 md:w-40 z-10 drop-shadow-xl"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
