import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@fontsource/fredoka-one";
import "@fontsource/dm-sans";
import ImageCapsule from "../../assets/AboutUs/capsule.png";

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

const getRandom = (min, max) => Math.random() * (max - min) + min;

const As = () => {
  const componentRef = useRef(null);
  const isInteracting = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundCapsules, setBackgroundCapsules] = useState([]);
  const totalSlides = details.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const capsuleCount = Math.floor(getRandom(8, 9));
    const newCapsules = Array.from({ length: capsuleCount }).map((_, i) => ({
      id: i,
      size: getRandom(60, 120),
      opacity: getRandom(0.1, 0.4),
      top: `${getRandom(-10, 90)}%`,
      left: `${getRandom(-10, 90)}%`,
      duration: getRandom(10, 30),
    }));
    setBackgroundCapsules(newCapsules);
  }, []);

  useEffect(() => {
    const component = componentRef.current;
    if (isMobile || !component) return;

    const handleWheel = (event) => {
      if (isInteracting.current) {
        event.preventDefault();
        return;
      }

      const scrollDirection = event.deltaY;
      const atTop = activeIndex === 0;
      const atBottom = activeIndex === totalSlides - 1;

      const changeSlide = (direction) => {
        event.preventDefault();
        isInteracting.current = true;
        setActiveIndex((prev) => prev + direction);
        setTimeout(() => {
          isInteracting.current = false;
        }, 800);
      };

      if (scrollDirection > 0 && !atBottom) {
        changeSlide(1);
      } else if (scrollDirection < 0 && !atTop) {
        changeSlide(-1);
      }
    };

    component.addEventListener("wheel", handleWheel, { passive: false });
    return () => component.removeEventListener("wheel", handleWheel);
  }, [isMobile, activeIndex, totalSlides]);

  return (
    <div
      ref={componentRef}
      className="h-[50vh] my-10 flex flex-col md:flex-row bg-gradient-to-br from-white to-[#00A79B] overflow-hidden rounded-xl shadow-md mx-2 sm:mx-4 md:mx-10 lg:mx-20"
    >
      <div className="md:w-1/3 relative flex items-center justify-center p-6 sm:p-8 bg-white h-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {backgroundCapsules.map((capsule) => (
            <motion.img
              key={capsule.id}
              src={ImageCapsule}
              alt={`Rotating capsule ${capsule.id}`}
              className="absolute grayscale"
              style={{
                width: `${capsule.size}px`,
                height: `${capsule.size}px`,
                top: capsule.top,
                left: capsule.left,
                opacity: capsule.opacity,
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: capsule.duration,
                ease: "linear",
              }}
            />
          ))}
        </div>
        <motion.h2
          className="relative z-10 text-3xl sm:text-5xl lg:text-8xl font-bold text-[#00A79B] text-center md:text-right leading-tight"
          style={{ fontFamily: "Fredoka One" }}
        >
          3a’s
          <br />
          <span className="text-xl sm:text-2xl lg:text-4xl mt-2 font-semibold text-[#00A79B] block md:text-right whitespace-nowrap">
            triple pillars of care
          </span>
        </motion.h2>
      </div>
      <div className="md:w-2/3 w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(0, 0, 0, 0.51)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-md bg-white border-2 border-[#00A79B] rounded-2xl p-6 sm:p-8 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.h3 className="text-xl sm:text-2xl md:text-3xl font-[Fredoka_One] font-bold text-[#00A79B] mb-3">
              {details[activeIndex].title}
            </motion.h3>
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-2 font-[DM_Sans]">
              {details[activeIndex].header}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-[DM_Sans]">
              {details[activeIndex].detail}
            </p>
            {isMobile && (
              <div className="flex flex-col items-center justify-center mt-4">
                <motion.div
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % totalSlides)
                  }
                  className="cursor-pointer"
                >
                  <img
                    src={ImageCapsule}
                    alt="Tap capsule"
                    className="w-20 h-20"
                    draggable={false}
                  />
                </motion.div>
                <p className="text-xs sm:text-[15px] underline text-gray-500 font-[DM_Sans] italic">
                  Tap the capsule to explore more
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default As;