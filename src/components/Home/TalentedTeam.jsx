import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
const AVATARS = [
  {
    src: "/Home/teamPerson1.jpg",
    fallback: "TP1",
    tooltip: "teamperson1",
  },
  {
    src: "/Home/teamPerson2.jpg",
    fallback: "TP2",
    tooltip: "teamperson2",
  },
  {
    src: "/Home/teamPerson3.jpg",
    fallback: "TP3",
    tooltip: "teamperson3",
  },
  {
    src: "/Home/plus.jpg",
    fallback: "PL",
    tooltip: "plus",
  },
];

const tooltipVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } },
};

const avatarAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  whileHover: { scale: 1.15 },
};

function TalentedTeam() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const countUpRef = useRef(null);
  const [inView, setInView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div className=" xl:pt-20 md:pt-10 pt-10  m-auto xl:w-[50%] md:w-[70%] w-[80%]">
      <div className=" text-center">
        <h2 className="font-bold xl:text-[65px] md:text-[55px] text-[35px] text-[#00A79B]">
          talented team
        </h2>
        <h5 className="xl:text-[30px]  md:text-[25px] font-normal  ">
          real people with a passion for healing here to make your health
          journey easier
        </h5>
      </div>
      <div className="xl:pt-10 md:pt-10 pt-6  xl:pb-20 md:pb-10 pb-10 flex justify-center xl:gap-7 md:gap-7 gap-5 items-center">
        <div className="flex items-center xl:-space-x-15 md:-space-x-15 -space-x-8">
          {AVATARS.map((avatar, index) => (
            <motion.div
              key={index}
              variants={avatarAnimation}
              initial="initial"
              animate="animate"
              className="relative"
              onClick={() => {
                if (index === AVATARS.length - 1) {
                  navigate("/ourteams");
                }
              }}
            >
              <img
                src={avatar.src}
                alt={avatar.fallback}
                className="xl:w-30 md:w-25 md:h-25 xl:h-30 w-20 h-20 rounded-full border-2 border-none object-cover"
              />

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10"
                    variants={tooltipVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="bg-black text-white text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap">
                      {avatar.tooltip}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div
          className="xl:text-5xl md:text-5xl text-3xl text-[#00A79B] font-bold cursor-pointer"
          onMouseEnter={() => countUpStart.current()}
        >
          <div ref={countUpRef}>
            <h1>
              {inView && (
                <CountUp start={2} end={20} duration={2} delay={0} suffix="+" />
              )}
            </h1>
          </div>
          <h2 className="xl:text-5xl md:text-5xl text-3xl text-[#00A79B]">
            team
          </h2>
        </div>
      </div>
    </div>
  );
}

export default TalentedTeam;
