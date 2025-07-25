import Image1 from '../../assets/Careerpage/work1.jpg';
import Image2 from '../../assets/Careerpage/work2.jpg';
import Image3 from '../../assets/Careerpage/work3.jpg';
import Image4 from '../../assets/Careerpage/work4.jpg';
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";

const Workculture = () => {

   const containerRef = useRef(null);
    const inInView = useInView(containerRef, { once: true });
    const mainControls = useAnimation();
  
    useEffect(() => {
      if (inInView) {
        mainControls.start("visible");
      }
    }, [inInView, mainControls]);
  
  return (
    <div className="bg-white w-full py-10 px-4">
     
      <div className="text-center">
        <p className="text-[#00a99d] text-4xl md:text-4xl lg:text-6xl font-bold">
          our work culture
        </p>
      </div>

     
      <div className="mt-6 space-y-2 text-center text-lg md:text-xl text-gray-700">
        <p>to bridge the gap between people and essential healthcare by</p>
        <p>delivering affordable, on-demand medication—with the speed of</p>
        <p>innovation ..</p>
      </div>
      
      
      <div ref={containerRef}>
      <motion.div 
       animate={mainControls}
       initial="hidden"
       variants={{
                hidden: { y:'70px', opacity: 0 },
                visible: { y:0, opacity: 1 },
              }}
      exit={{y:'50%', opacity:0}}
      transition={{duration:1, delay:0.5, ease:'easeInOut'}}
      className="mt-10 p-15 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 justify-items-center">
        {[Image1, Image2, Image3, Image4].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`work${index + 1}`}
            className="w-full max-w-60 lg:max-w-75 md:max-w-70 sm:max-w-70 h-50 md:h-80 lg:h-90 object-cover rounded-3xl shadow-md transition transform hover:scale-105 duration-300"
          />
        ))}
      </motion.div>
    </div>
  </div>
  );
};

export default Workculture;
