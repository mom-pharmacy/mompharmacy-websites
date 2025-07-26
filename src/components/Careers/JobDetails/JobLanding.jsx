import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function JobLanding({ role }) {
  return (
    <div className="bg-[#00a79b] h-screen w-full flex items-center justify-center px-4">
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        exit={{ y: -500 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <p className="text-white font-bold font-['Fredoka_One'] text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
          {role}!
        </p>
      </motion.div>
    </div>
  );
}
