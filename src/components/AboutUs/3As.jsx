import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/fredoka-one";
import "@fontsource/dm-sans";
import ImageCapsule from "../../assets/AboutUs/capsule.png"; // Update path as needed

const details = [
  {
    title: "availability",
    header: "care should not be complicated",
    detail:
      "we make it easy to search, order, and receive your medicines — no confusion, no chaos. just clarity.",
  },
  {
    title: "accessibility",
    header: "care should not be complicated",
    detail:
      "we bring care closer. get the help you need, where and when you need it, without the hassle.",
  },
  {
    title: "affordability",
    header: "care should not be complicated",
    detail:
      "we keep prices transparent and affordable — because access to care shouldn't come at a cost to your peace of mind.",
  },
];
const As = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = details.length;
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = window.innerHeight * (totalSlides + 1);
      const scrollProgress = Math.min(Math.max(-rect.top / totalHeight, 0), 1);
      const index = Math.min(
        totalSlides - 1,
        Math.floor(scrollProgress * totalSlides)
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [totalSlides, activeIndex, isMobile]);

  const containerHeight = (totalSlides + 1) * 100;

  const handleMobileChange = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative"
        style={{ height: isMobile ? "auto" : `${containerHeight}vh` }}
      >
        <div className="sticky top-24 h-auto flex flex-col md:flex-row bg-gradient-to-br from-white to-[#e6fcfa] z-10 overflow-hidden rounded-xl shadow-md mx-2 sm:mx-4 md:mx-10 lg:mx-20">
          <div className="md:w-1/3 flex items-center justify-center p-6 sm:p-8 bg-white">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-8xl font-bold text-[#00A79B] text-center md:text-right leading-tight"
              style={{ fontFamily: "Fredoka One" }}
            >
              3a’s
              <br />
              <span className="text-xl sm:text-2xl lg:text-4xl mt-2 font-semibold text-[#00A79B] block md:text-right whitespace-nowrap">
                triple pillars of care
              </span>
            </motion.h2>
          </div>
          <div className="md:w-2/3 w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full max-w-md bg-white border-2 border-[#00A79B] rounded-2xl p-6 sm:p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <motion.h3
                  className="text-xl sm:text-2xl md:text-3xl font-[Fredoka_One] font-bold text-[#00A79B] mb-3"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {details[activeIndex].title}
                </motion.h3>
                <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2 font-[DM_Sans]">
                  {details[activeIndex].header}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-[DM_Sans]">
                  {details[activeIndex].detail}
                </p>
                {isMobile && (
                  <div className=" flex flex-col items-center justify-center">
                    <motion.div
                      onClick={handleMobileChange}
                      className="cursor-pointer"
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <img
                        src={ImageCapsule}
                        alt="Tap capsule"
                        className="w-20 h-20 sm:w-10 sm:h-10"
                        draggable={false}
                      />
                    </motion.div>
                    <p className="text-xs sm:text-sm text-gray-500 font-[DM_Sans] italic">
                      Tap the capsule to explore more
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default As;
