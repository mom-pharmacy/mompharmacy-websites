import React from 'react';
import Image1 from '../../assets/Careerpage/work1.jpg';
import Image2 from '../../assets/Careerpage/work2.jpg';
import Image3 from '../../assets/Careerpage/work3.jpg';
import Image4 from '../../assets/Careerpage/work4.jpg';
import { motion } from 'framer-motion';

const Workculture = () => {
  return (
    <div className="bg-white w-full py-10 px-4">
     
      <div className="text-center">
        <p className="text-[#00a99d] text-4xl md:text-4xl lg:text-6xl font-bold">
          our work culture
        </p>
      </div>

     
      <div className="mt-6 space-y-2 text-center text-lg md:text-xl text-gray-700">
        <p>To bridge the gap between people and essential healthcare by</p>
        <p>delivering affordable, on-demand medication—with the speed of</p>
        <p>innovation ..</p>
      </div>

      <motion.div 
      initial={{y:'70px', opacity: 0}}
      animate={{y:0, opacity: 1}}
      exit={{y:'50%', opacity:0}}
      transition={{duration:1, delay:0.5, ease:'easeInOut'}}
      className="mt-10 p-15 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 justify-items-center">
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`work${index + 1}`}
            className="w-full max-w-60 h-30 md:h-72 lg:h-80 object-cover rounded-3xl shadow-md transition transform hover:scale-105 duration-300"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Workculture;
