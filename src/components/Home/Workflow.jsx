import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import animation1 from '../../../public/Home/animation1.gif'
import animation2 from '../../../public/Home/animation2.gif'
import animation3 from '../../../public/Home/animation3.gif'
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
      <img loading="lazy" src={`${src}?t=${gifKey}`} alt="gif" />
    </motion.div>
  );
};

function Workflow() {
  return (
    <div className="mb-10 xl:w-[90%] md:w-[90%]  m-auto">
      <div className="flex flex-col  text-5xl font-bold text-[#00A79B] mt-8">
        <h1 className="text-center">how it works</h1>
        <div className="mt-15 flex flex-row">
          <img
            src="/Home/circle.png"
            className="xl:h-25 xl:w-25 md:h-25 md:w-25 h-15 w-15 ml-3 transition-transform duration-500 hover:scale-125 "
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className=" xl:text-4xl md:text-2xl text-xl text-[#00A79B] font-semibold ml-3 mt-4">
              search it
            </h1>
            <h1 className="  xl:text-2xl md:text-xl text-[14px]  text-black font-normal ml-3 xl:mt-4">
              find your medicine quickly with a smart and simple search
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-7 ">
        <ScrollGif
          src={animation1}
          className="lg:w-[90%] md:w-[80%] w-80 ml-15 -mt-3 "
        />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]  xl:-mt-10 mt-3 md:mt-10">
        <div className="flex justify-end -mt-10 ml-10">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-end mr-5"
          >
            <h1 className=" xl:text-4xl md:text-2xl text-xl -mr-3 text-[#00A79B] font-semibold mt-4">
              upload it
            </h1>
            <h1 className=" xl:text-2xl md:text-xl text-[14px] -mr-3  text-black font-normal">
              got a prescription? just upload it - secure and easy
            </h1>
          </motion.div>
          <div>
            <img
              src="/Home/circle1.png"
              className="xl:h-25 xl:w-25 md:h-25 md:w-25 mt-2 h-15 w-15 mr-8 transition-transform duration-500 hover:scale-125 "
            />
          </div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-8 -mt-4 ">
        <ScrollGif
          src={animation2}
          className="lg:w-[90%] md:w-[80%] ml-17 w-80 md:mt-1 "
        />
      </div>

      <div className="flex flex-col text-5xl  font-bold text-[#00A79B]">
        <div className="flex flex-row ">
          <img
            src="/Home/circle2.png"
            className="xl:h-25 xl:w-25 md:h-25 md:w-25 h-15 w-15 ml-3 transition-transform duration-500 hover:scale-125 "
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className=" xl:text-4xl md:text-2xl text-xl text-[#00A79B] font-semibold ml-3 mt-4">
              Confirm it
            </h1>
            <h1 className="  xl:text-2xl md:text-xl text-[14px]  text-black font-normal ml-3">
              We match the best options and prices. You choose what works
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="relative xl:-mt-10 md:-mt-8 ">
        <ScrollGif
          src={animation3}
          className="lg:w-[90%]  md:w-[80%]  w-80 ml-15 xl:-mt-10 md:-mt-8 -mt-3 md:mb-10  "
        />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]">
        <div className="flex justify-end xl:-mt-30 md:-mt-20 -mt-6 ml-10">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-end mr-5 "
          >
            <h1 className=" xl:text-4xl md:text-2xl text-xl -mr-3 text-[#00A79B] font-semibold mt-4">
              Receive it
            </h1>
            <h1 className="xl:text-2xl md:text-xl text-[14px] -mr-3  text-black font-normal">
              Sit back and relax, your medicines are on the way.
            </h1>
          </motion.div>
          <div>
            <img
              src="/Home/circle3.png"
              className="xl:h-25 xl:w-25 md:h-25 md:w-25 h-15 w-15 mr-8 transition-transform duration-500 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;
