import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { motion, AnimatePresence } from 'framer-motion';

const SliderStyles = `
  .why-choose-us-slider {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    /* Reduced width to make slides smaller */
    width: 240px; 
    height: auto;
    transform-style: preserve-3d;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
    /* The reflection style has been removed from here */
  }
  
  .swiper-pagination-bullet {
    background-color: #00a79b;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: #f59e0b;
    opacity: 1;
  }
`;

import easy1 from '../../assets/AboutUs/whytochoose/easy1.png';
import easy2 from '../../assets/AboutUs/whytochoose/easy2.png';
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
    text1: 'Just enter your mobile number to proceed.',
    text2: 'Enter OTP sent to your mobile for quick verification.',
    image1: easy1,
    image2: easy2,
  },
  {
    key: 'prescription-order',
    label: 'prescription order',
    text1: 'Quickly order medicines via prescription.',
    text2: 'Just upload your prescription from any given option.',
    image1: prescription1,
    image2: prescription2,
  },
  {
    key: 'quick-delivery',
    label: 'quick delivery',
    text1: 'Track your order in real-time via map view.',
    text2: 'Order delivered! Now rate the delivery & give feedback.',
    image1: quick1,
    image2: quick2,
  },
  {
    key: 'trusted-care',
    label: 'trusted care',
    text1: 'From reliable medicines to expert support.',
    text2: 'We ensure you get the care you truly deserve.',
    image1: easy1,
    image2: easy2,
  },
  {
    key: 'blood-donation',
    label: 'blood donation',
    text1: 'Register here to become a blood donor at our portal.',
    text2: 'Search here and we will match you with the nearest donor.',
    image1: blood1,
    image2: blood2,
  },
];

const allSlides = tabs.flatMap((tab, index) => [
  { key: `${tab.key}-1`, image: tab.image1, label: tab.label, text: tab.text1, parentIndex: index },
  { key: `${tab.key}-2`, image: tab.image2, label: tab.label, text: tab.text2, parentIndex: index },
]);


export default function WhyChooseUsBanner() {
  const swiperRef = useRef(null);
  const [activeParentIndex, setActiveParentIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleTabClick = (index) => {
    const slideIndexToGo = allSlides.findIndex(slide => slide.parentIndex === index);
    if (slideIndexToGo !== -1 && swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(slideIndexToGo);
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 lg:px-8">
      <style>{SliderStyles}</style>

      <div className="bg-gradient-to-br from-white to-[#d5ece9] rounded-xl shadow-lg max-w-screen-xl w-full text-center py-6 sm:py-8">
        <motion.h2
          className="text-[#00a79b] font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4 font-['Fredoka_One']"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          why to choose us
        </motion.h2>

        <p className="text-gray-600 font-['DM_Sans'] mx-auto font-normal text-base sm:text-lg max-w-3xl mb-6 px-4">
          every package we deliver carries not just medicine, but also a promise to be timely, to be trustworthy, to show up — like mom would.
        </p>

        <motion.div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-4 sm:px-6">
          {tabs.map((tab, index) => (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
              key={tab.key}
              onClick={() => handleTabClick(index)}
              className={`py-2 px-3 sm:px-5 lg:px-6 rounded-full font-semibold text-sm sm:text-base md:text-lg capitalize transition-colors duration-300
                ${activeParentIndex === index ? 'bg-yellow-500 text-black' : 'bg-teal-500 text-white'}`}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <div className="w-full">
           <Swiper
              ref={swiperRef}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 150,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Autoplay, Pagination]}
              className="why-choose-us-slider"
              onSlideChange={(swiper) => {
                  setCurrentSlideIndex(swiper.realIndex);
                  const parentIdx = allSlides[swiper.realIndex]?.parentIndex;
                  if (parentIdx !== undefined) {
                    setActiveParentIndex(parentIdx);
                  }
              }}
            >
              {allSlides.map((slide) => (
                <SwiperSlide key={slide.key}>
                    <img src={slide.image} alt={slide.label}/>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>

        <div className="text-center mt-4 h-20 px-4 sm:px-6">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlideIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 capitalize font-['Fredoka_One'] tracking-wide">
                        {allSlides[currentSlideIndex]?.label}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 mt-1 font-['DM_Sans']">
                        {allSlides[currentSlideIndex]?.text}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
