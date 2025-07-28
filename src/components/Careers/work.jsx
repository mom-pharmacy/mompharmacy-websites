import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import Image1 from "../../assets/Careerpage/work1.jpg";
import Image2 from "../../assets/Careerpage/work2.jpg";
import Image3 from "../../assets/Careerpage/work3.jpg";
import Image4 from "../../assets/Careerpage/work4.jpg";
import Video1 from "../../assets/Careerpage/smartCity.mp4";

const Workculture = () => {
  const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const videoRefs = useRef([]); 
  const [isPlaying, setIsPlaying] = useState({}); 

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying((prev) => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }
  };

  const videos = [Video1, Video1, Video1, Video1];
  const posters = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);

  return (
    <div className="bg-white w-full py-10 px-4">
      <div className="text-center">
        <p className="text-[#00a99d] font-['Fredoka_One'] text-4xl md:text-4xl lg:text-6xl font-bold">
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
            hidden: { y: "70px", opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          exit={{ y: "50%", opacity: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:px-10 gap-4 justify-items-center
           overflow-x-auto sm:overflow-visible flex sm:flex-none space-x-4 sm:space-x-0
           snap-x snap-mandatory scroll-smooth px-2 sm:px-0"
        >
          {videos.map((videoSrc, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-60 h-60 overflow-hidden object-cover rounded-3xl shadow-md
              transition transform hover:scale-105 sm:w-full sm:h-110 lg:h-90 lg:w-full duration-300 snap-start "
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
                poster={posters[index]}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => handlePlay(index)}
                  className="bg-teal-500 bg-opacity-70 rounded-full p-4 hover:scale-110 transition"
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d={
                        isPlaying[index]
                          ? "M6 4h2v12H6zm6 0h2v12h-2z"
                          : "M6 4l10 6-10 6V4z"
                      }
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Workculture;
