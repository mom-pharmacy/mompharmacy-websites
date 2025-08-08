import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/fredoka-one";

import cockroachpreneursImg from "../../assets/AboutUs/Carousel/cockroachpreneurs.png";
import relentlesslearnersImg from "../../assets/AboutUs/carousel/rentlesslearners.png";
import believersImg from "../../assets/AboutUs/carousel/believers.png";
import healthImg from "../../assets/AboutUs/carousel/health.png";
import fightersImg from "../../assets/AboutUs/carousel/fighters.png";

const slideVariants = {
  initial: { x: 300, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "25px", width: "100%" }}>
        <ul style={{ margin: "0px", padding: "0px", textAlign: "center" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
        style={{
          backgroundColor:
            i === currentSlide
              ? "#FADB14"
              : "rgba(255, 255, 255, 0.5)",
        }}
      ></div>
    ),
  };

  const slides = [
    {
      heading1: "we are",
      heading2: "cockroachpreneurs",
      image: cockroachpreneursImg,
      description: "we survive, adapt, and keep building — no matter what.",
    },
    {
      heading1: "we are",
      heading2: "relentless learners",
      image: relentlesslearnersImg,
      description: "growing through every failure, challenge, and change.",
    },
    {
      heading1: "we are the",
      heading2: "believers",
      image: believersImg,
      description: "fueled by vision, not just validation.",
    },
    {
      heading1: "we are the speed",
      heading2: "your health deserves",
      image: healthImg,
      description: "delivering care when every second counts.",
    },
    {
      heading1: "we are",
      heading2: "fighters",
      image: fightersImg,
      description:
        "we are standing strong so our users don't have to fight alone.",
    },
  ];

  return (
    <div className="bg-[#00A79B] relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((_, index) => (
          <div key={index} className="h-[60vh] md:h-[60vh]"></div>
        ))}
      </Slider>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pointer-events-auto"
          >
            <div style={{ fontFamily: '"Fredoka One", cursive' }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {slides[currentSlide].heading1}
              </h1>
              <div className="flex items-center justify-center gap-x-2 md:gap-x-4 flex-wrap">
                <h1 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {slides[currentSlide].heading2}
                </h1>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].heading2}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-white max-w-xl mx-auto mt-8">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselComponent;
