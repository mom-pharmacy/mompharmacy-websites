import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

import easy1 from '../../assets/AboutUs/whytochoose/easy1.png';
import easy2 from '../../assets/AboutUs/whytochoose/easy2.png';
import arrow1 from '../../assets/AboutUs/whytochoose/arrow1.png';
import arrow2 from '../../assets/AboutUs/whytochoose/arrow2.png';
import prescription1 from '../../assets/AboutUs/whytochoose/pres1.png';
import prescription2 from '../../assets/AboutUs/whytochoose/pres2.png';
import quick1 from '../../assets/AboutUs/whytochoose/quick1.png';
import quick2 from '../../assets/AboutUs/whytochoose/quick2.png';
import blood1 from '../../assets/AboutUs/whytochoose/blood1.png';
import blood2 from '../../assets/AboutUs/whytochoose/blood2.png';

import '@fontsource/fredoka-one';
import '@fontsource/dm-sans';

const tabs = [
  {
    key: 'easy-login',
    label: 'easy login',
    text1: 'just enter your mobile number to proceed',
    text2: 'enter otp sent to your mobile number for quick otp verification',
    image1: easy1,
    image2: easy2,
    image3: arrow1,
    image4: arrow2,
  },
  {
    key: 'prescription-order',
    label: 'prescription order',
    text1: 'quickly order medicines via prescription ordering',
    text2: 'just upload your prescription from any given options',
    image1: prescription1,
    image2: prescription2,
    image3: arrow1,
    image4: arrow2,
  },
  {
    key: 'quick-delivery',
    label: 'quick delivery',
    text1: 'track your order via map view',
    text2: 'order delivered, now rate the delivery & give feedback ',
    image1: quick1,
    image2: quick2,
    image3: arrow1,
    image4: arrow2,
  },
  {
    key: 'trusted-care',
    label: 'trusted care',
    text1: 'from reliable medicines to expert support, we ensure you get the care you deserve',
    text2: 'from reliable medicines to expert support, we ensure you get the care you deserve',
    image1: easy1,
    image2: easy2,
    image3: arrow1,
    image4: arrow2,
  },
  {
    key: 'blood-donation',
    label: 'blood donation',
    text1: 'register here to become one of blood donors at our portal',
    text2: 'search here we will match with nearest blood donor available',
    image1: blood1,
    image2: blood2,
    image3: arrow1,
    image4: arrow2,
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

export default function WhyChooseUsBanner() {
  const sliderRef = useRef(null);
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(isMobile ? index * 2 : index);
  };

  const mobileSlides = tabs.flatMap((tab) => [
    {
      key: `${tab.key}-step1`,
      label: tab.label,
      image: tab.image1,
      text: tab.text1,
      arrow: tab.image3,
    },
    {
      key: `${tab.key}-step2`,
      label: tab.label,
      image: tab.image2,
      text: tab.text2,
      arrow: tab.image4,
    },
  ]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => {
      setActiveIndex(isMobile ? Math.floor(next / 2) : next);
    },
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow max-w-screen-xl w-full text-center py-6 sm:py-8 md:py-10 lg:py-12">
        <motion.h2
          className="text-[#00a79b] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-['Fredoka_One']"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          why to choose us
        </motion.h2>

        <p className="text-gray-600 font-['DM_Sans'] mx-auto font-normal text-base sm:text-lg md:text-xl max-w-3xl mb-6 px-4">
          every package we deliver carries not just medicine, but also a promise to be timely, to be trustworthy, to show up — like mom would.
        </p>

        <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 px-4 sm:px-6">
          {tabs.map((tab, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              key={tab.key}
              onClick={() => handleTabClick(index)}
              className={`py-2 px-4 sm:px-6 lg:px-8 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl capitalize
                ${activeIndex === index ? 'bg-yellow-500 text-black' : 'bg-teal-500 text-white'}`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <Slider {...settings} ref={sliderRef}>
          {isMobile
            ? mobileSlides.map((slide) => (
                <motion.div
                  key={slide.key}
                  className="px-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-lg">
                    <motion.img
                      src={slide.image}
                      alt={slide.label}
                      className="w-24 h-auto rounded-md"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    />
                    <div className="flex-1 ml-4 text-left">
                      <motion.p
                        className="text-gray-800 font-['DM_Sans'] text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {slide.text}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              ))
            : tabs.map((tab) => (
                <div key={tab.key}>
                  <div className="flex md:flex-row items-center h-120 justify-center gap-6 bg-white rounded-lg  mx-4 sm:mx-6 md:mx-10 lg:mx-16 py-6 px-4 sm:py-8 sm:px-6">
                    <img src={tab.image1} alt={tab.label} className="w-full sm:w-64 md:w-72 lg:w-80 rounded-lg shadow-md h-110" />
                    <div className="inline mb-20">
                      <div className="text-200 font-['DM_Sans'] text-base">{tab.text1}</div>
                      <img src={tab.image3} alt={tab.label} className="h-10 w-10 mr-5 rounded-lg " />
                    </div>
                    <div className="inline mt-30">
                      <img src={tab.image4} alt={tab.label} className="h-10 w-10 ml-25 rounded-lg " />
                      <div className="text-200 font-['DM_Sans'] text-base">{tab.text2}</div>
                    </div>
                    <img src={tab.image2} alt={tab.label} className="w-full sm:w-34 md:w-72 lg:w-80 h-110 rounded-lg shadow-md" />
                  </div>
                </div>
              ))}
        </Slider>
      </div>
 </div>
);
}