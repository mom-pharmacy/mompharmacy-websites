import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/fredoka-one";

const details = [
  {
    title: "Availability",
    header: "Care should not be complicated",
    detail:
      "We make it easy to search, order, and receive your medicines — no confusion, no chaos. Just clarity.",
  },
  {
    title: "Accessibility",
    header: "Care should not be complicated",
    detail:
      "We bring care closer. Get the help you need, where and when you need it, without the hassle.",
  },
  {
    title: "Affordability",
    header: "Care should not be complicated",
    detail:
      "We keep prices transparent and affordable — because access to care shouldn't come at a cost to your peace of mind.",
  },
];

const As = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = details.length;

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = window.innerHeight * (totalSlides + 1);

      const scrollProgress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
      const index = Math.min(
        totalSlides - 1,
        Math.floor(scrollProgress * totalSlides)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalSlides]);

  const containerHeight = (totalSlides + 1) * 100;

  return (
    <div>
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${containerHeight}vh` }}
      >
        <div className="sticky top-0 h-screen flex flex-col md:flex-row bg-gradient-to-br from-white to-[#e6fcfa] z-10 overflow-hidden">
          {/* Left Panel */}
          <div className="md:w-1/3 w-full flex items-center justify-center p-8 bg-white">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-[#00A79B] text-center md:text-left leading-tight"
              style={{ fontFamily: "Fredoka One" }}
            >
              3a’s
              <br />
              <span className="text-gray-800 text-3xl block mt-2">
                Triple Pillars of Care
              </span>
            </motion.h2>
          </div>

          {/* Right Panel */}
          <div className="md:w-2/3 w-full flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-md bg-white border-2 border-[#00A79B] rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.h3
                  className="text-3xl font-bold text-[#00A79B] capitalize mb-3"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {details[activeIndex].title}
                </motion.h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {details[activeIndex].header}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {details[activeIndex].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* After Section */}
      <div className="min-h-screen bg-[#e6fcfa] flex items-center justify-center px-6">
        <h2 className="text-4xl font-bold text-[#00A79B] text-center">
          You’re past the <span className="underline">3A's</span> section!
        </h2>
      </div>
    </div>
  );
};

export default As;
