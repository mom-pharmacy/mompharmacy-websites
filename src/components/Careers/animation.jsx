import React, { useRef, useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import pill from "../../assets/Careerpage/bluepill.png"; 

export default function ScrollImage() {
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [0, 1000, 4000], [0, 300, 600]);

  const x = useTransform(scrollY, [0, 1000, 4000], [0, 200, -300]);

  const rotate = useTransform(scrollY, [0, 1000, 4000], [0, 10, -10]);

  return (
    <div className="relative h-[3000px] bg-orange-100">
      <motion.img
        src={pill}
        alt="floating pill"
        className="w-32 h-32 object-contain fixed z-40 top-0 left-1/2 -translate-x-1/2"
        style={{ y, x, rotate }}
      />


      <div className="h-screen flex items-center justify-start pl-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">Bold Flavor</h1>
          <p className="text-lg">Crafted from the kitchens of India.</p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-end pr-20">
        <div className="text-right">
          <h1 className="text-5xl font-bold mb-4">A New Angle</h1>
          <p className="text-lg">Spices that elevate every meal.</p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-start pl-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">Final Drop</h1>
          <p className="text-lg">Find your flavor landing perfectly.</p>
        </div>
      </div>
    </div>
  );
}
