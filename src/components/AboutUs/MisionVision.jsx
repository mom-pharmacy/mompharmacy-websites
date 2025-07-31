import React from "react";
import { motion } from "framer-motion";
import { FaCapsules, FaHeartbeat } from "react-icons/fa";
import deliveryBoy from "../../assets/deliveryboy.png";

const MissionVision = () => {
  return (
    <div className="bg-white py-3 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="flex items-center gap-6 h-44 mb-16"
        initial={{ x: "-100%" }}
        animate={{ x: "20%" }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <p className="text-2xl md:text-4xl font-bold text-[#00A79B] whitespace-nowrap">
          delivering <span className="text-[#FADB14]">care,</span> one reminder
          at a <span className="text-[#FADB14]">time.</span>
        </p>

        <img src={deliveryBoy} alt="Delivery Boy" className="h-36 md:h-40" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#F0FDFB] shadow-lg p-8 rounded-2xl border-l-8 border-teal-500 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4 gap-3">
            <FaCapsules className="text-3xl text-[#00A79B]" />
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
              our mission
            </h2>
          </div>
          <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
            to bridge the gap between people and essential
            <span className="text-[#00A79B] font-semibold"> healthcare</span>
            by delivering affordable, on-demand medication — with the speed
            health every home is just moments away from
            <span className="text-[#FADB14] font-semibold"> well-being.</span>
          </p>
        </div>

        <div className="bg-[#F0FDFB] shadow-lg p-8 rounded-2xl border-l-8 border-teal-500 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4 gap-3">
            <FaHeartbeat className="text-3xl text-[#00A79B]" />
            <h2 className="text-3xl font-bold text-gray-800 tracking-wider">
              our vision
            </h2>
          </div>
          <p className="text-gray-700 font-['DM_Sans'] text-lg leading-relaxed tracking-wide">
            to become the most trusted global name in doorstep healthcare,
            delivering
            <span className="text-[#FADB14] font-semibold">
              not just medicines
            </span>
            , but peace of mind, through technology that feels like
            <span className="text-[#00A79B] font-semibold">
              a mother’s care
            </span>
            — fast, reliable, and full of heart, making exceptional wellness
            accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
