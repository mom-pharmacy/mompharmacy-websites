import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollGif = ({ src, className }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setGifKey(Date.now());
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.4 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={`${src}?t=${gifKey}`} alt="gif" />
    </motion.div>
  );
};

function Workflow() {
  return (
    <div className="mb-40 xl:w-[90%] md:w-[90%]  m-auto">
      <div className="flex flex-col   text-5xl font-bold text-[#00A79B] mt-8">
        <h1 className="text-center">how it works</h1>
        <div className="mt-15 flex flex-row">
          <img
            src="/Home/circle.png"
            className="xl:h-30 xl:w-30 md:h-25 md:w-25 h-25 w-25 ml-3 transition-transform duration-500 hover:scale-125 "
          />
          <div>
            <h1 className=" xl:text-4xl md:text-2xl text-xl text-[#00A79B] font-semibold ml-3 mt-4">
              search it
            </h1>
            <h1 className="  xl:text-2xl md:text-xl text-[14px]  text-black font-normal ml-3 xl:mt-4">
              find your medicine quickly with a smart and simple search
            </h1>
          </div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-7 ">
        <ScrollGif
          src="/Home/pillgif1.gif"
          className="lg:w-[90%] md:w-[80%] w-80 ml-15 -mt-3 "
        />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]  xl:-mt-10 mt-3 md:mt-10">
        <div className="flex justify-end -mt-10 ml-10">
          <div className="text-end mr-5">
            <h1 className=" xl:text-4xl md:text-2xl text-xl -mr-3 text-[#00A79B] font-semibold mt-4">
              upload it
            </h1>
            <h1 className=" xl:text-2xl md:text-xl text-[14px] -mr-3  text-black font-normal">
              got a prescription? just upload it - secure and easy
            </h1>
          </div>
          <div>
            <img
              src="/Home/circle1.png"
              className="xl:h-30 xl:w-30 md:h-25 md:w-25 mt-2 h-25 w-25 mr-8 transition-transform duration-500 hover:scale-125 "
            />
          </div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-8 -mt-4 ">
        <ScrollGif
          src="/Home/pillgif2.gif"
          className="lg:w-[90%] md:w-[80%] ml-17 w-80 md:mt-1 "
        />
      </div>

      <div className="flex flex-col text-5xl  font-bold text-[#00A79B]">
        <div className="flex flex-row ">
          <img
            src="/Home/circle2.png"
            className="xl:h-30 xl:w-30 md:h-25 md:w-25 h-25 w-25 ml-3 transition-transform duration-500 hover:scale-125 "
          />
          <div>
            <h1 className=" xl:text-4xl md:text-2xl text-xl text-[#00A79B] font-semibold ml-3 mt-4">
              Confirm it
            </h1>
            <h1 className="  xl:text-2xl md:text-xl text-[14px]  text-black font-normal ml-3">
              We match the best options and prices. You choose what works
            </h1>
          </div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-8 ">
        <ScrollGif
          src="/Home/pillgif3.gif"
          className="lg:w-[90%]  md:w-[80%]  w-80 ml-15 xl:-mt-10 md:-mt-8 -mt-3 md:mb-10  "
        />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]">
        <div className="flex justify-end xl:-mt-30 md:-mt-20 -mt-6 ml-10">
          <div className="text-end mr-5 ">
            <h1 className=" xl:text-4xl md:text-2xl text-xl -mr-3 text-[#00A79B] font-semibold mt-4">
              Receive it
            </h1>
            <h1 className="xl:text-2xl md:text-xl text-[14px] -mr-3  text-black font-normal">
              Sit back and relax, your medicines are on the way.
            </h1>
          </div>
          <div>
            <img
              src="/Home/circle3.png"
              className="xl:h-30 xl:w-30 md:h-25 md:w-25 h-25 w-25 mr-8 transition-transform duration-500 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
