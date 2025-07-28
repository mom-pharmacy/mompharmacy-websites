import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "@fontsource/fredoka-one";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Teamwork from "./Teamwork";

const MomsDesk = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slider = useRef(null);

  const quotes = [
    {
      quote:
        "from first click to doorstep delivery — we’re here to make every step simple, fast, and stress-free.",
      role: "product manager",
    },
    {
      quote:
        "every feature we build is tested like it’s for our own family — because your health deserves nothing less.",
      role: "pardhasaradhi (ceo)",
    },
    {
      quote:
        "when someone says “thank you,” that’s my reward. we’re not just delivering meds — we’re delivering care.",
      role: "devloper",
    },
    {
      quote:
        "i live alone, but this app feels like someone’s always looking out for me.",
      role: "customer (72 yrs)",
    },
    {
      quote:
        "we turn challenges into features. every update is a promise to make your health journey smoother.",
      role: "ui/ux designer",
    },
  ];

  const sliderSettings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    Infinity: true,
    speed: 400,
    slidesToshow: 1,
    slideToScroll: 1,
    beforechange: (_, next) => setActiveIndex(next),
    afterChange: (index) => setActiveIndex(index),
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-6 gap-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-[#00A79B] font-bold text-center animate-bounce"
        whileHover={{ scale: 1.1, rotate: -1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        teamwork
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl border-4 border-[#00A79B] rounded-3xl pt-6 pb-10 px-6"
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.6)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Slider {...sliderSettings} ref={slider}>
          {quotes.map((item, index) => (
            <Teamwork key={index} quote={item.quote} role={item.role} />
          ))}
        </Slider>
      </motion.div>

      <div className="flex justify-center mt-2 ">
        {quotes.map((_quote, i) => (
          <button
            key={i}
            onClick={() => {
              slider.current.slickGoTo(i);
              setActiveIndex(i);
            }}
            className={`w-4 h-4 mx-1 rounded-full border-2 border-[#00A79B] transition ${
              i == activeIndex ? "bg-[#00A79B] scale-130" : "bg-white"
            }`}
            aria-label={`go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MomsDesk;