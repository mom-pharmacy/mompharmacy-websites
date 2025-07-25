import React from 'react';
import { motion } from 'framer-motion';
import ImageCapsule from '../../assets/AboutUs/capsule.png';
import '@fontsource/fredoka-one';
import '@fontsource/dm-sans';
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const bouncePill = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    rotate: [0, 2, -5, 0],
    transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
  },
};

const glowCard = {
  whileHover: {
    scale: 1.03,
    backgroundColor: '#f9fdfa',
    boxShadow: '0 15px 40px rgba(0, 169, 157, 0.3)',
    transition: { duration: 0.5 },
  },
};


const SectionHeader = ({ label }) => (
  <div className="flex items-center gap-3 mb-6">
    <motion.div
      className="w-9 h-9 rounded-full border-4 border-teal-500 flex items-center justify-center"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      <div className="w-5 h-5 bg-teal-500 rounded-full" />
    </motion.div>
    <motion.h2
      className="text-3xl md:text-5xl font-['Fredoka_One'] font-extrabold text-[#00a99d] tracking-wide"
      variants={fadeInUp}
    >
      {label}
    </motion.h2>
  </div>
);

// Main Component
function Mission() {
  return (
    <div className="bg-gradient-to-b from-white to-[#f0fffd] py-24 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="w-full md:w-1/2 relative">
          <SectionHeader label="our mission" />
          <motion.div
            className="relative bg-white p-8 rounded-3xl border-2 border-dashed border-teal-400 shadow-lg backdrop-blur-lg"
            variants={glowCard}
            whileHover="whileHover"
          >
            <p className="text-[#333] font-['DM_Sans'] text-base md:text-lg leading-relaxed tracking-wide">
              to bridge the gap between people and essential healthcare by <br />
              delivering affordable, on-demand medication — with the speed <br />
              of innovation and the compassion of family — ensuring that <br />
              every home is just moments away from well-being.
            </p>
            <motion.img
              src={ImageCapsule}
              alt="capsule"
              className="absolute -bottom-20 -right-10 w-28 md:w-40 drop-shadow-xl"
              variants={bouncePill}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <SectionHeader label="our vision" />
          <motion.div
            className="relative bg-white p-8 rounded-3xl border-2 border-dashed border-teal-400 shadow-lg backdrop-blur-lg"
            variants={glowCard}
            whileHover="whileHover"
          >
            <p className="text-[#333] font-['DM_Sans'] text-base md:text-lg leading-relaxed tracking-wide">
              to become the most trusted global name in doorstep healthcare, <br />
              delivering not just medicines, but peace of mind, through <br />
              technology that feels like a mother’s care: fast, reliable, <br />
              and full of heart, making exceptional wellness accessible.
            </p>
            <motion.img
              src={ImageCapsule}
              alt="capsule"
              className="absolute -bottom-20 -right-10 w-28 md:w-40 drop-shadow-xl"
              variants={bouncePill}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Mission;
