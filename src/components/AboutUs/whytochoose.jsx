import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import easyLogin from '/src/assets/AboutUs/whytochoose/easy_login.png';
import prescriptionOrder from '/src/assets/AboutUs/whytochoose/prescription_orser.png';
import quickDelivery from '/src/assets/AboutUs/whytochoose/quick_delivery.png';
import trustedCare from '/src/assets/AboutUs/whytochoose/trusted_care.png';
import bloodDonation from '/src/assets/AboutUs/whytochoose/blood_donation.png';
import '@fontsource/fredoka-one';
import '@fontsource/dm-sans';

const tabs = [
  {
    key: 'easy-login',
    label: 'easy login',
    text: 'sign in effortlessly with a smooth and secure login process — no fuss, just access in seconds',
    image: easyLogin,
  },
  {
    key: 'prescription-order',
    label: 'prescription order',
    text: 'just snap and upload your prescription — we’ll take care of the rest, from verification to delivery',
    image: prescriptionOrder,
  },
  {
    key: 'quick-delivery',
    label: 'quick delivery',
    text: 'get your medicines at lightning speed - delivered to your door in just 10 minutes, because your health can’t wait',
    image: quickDelivery,
  },
  {
    key: 'trusted-care',
    label: 'trusted care',
    text: 'from reliable medicines to expert support, we ensure you get the care you deserve',
    image: trustedCare,
  },
  {
    key: 'blood-donation',
    label: 'blood donation',
    text: 'need or want to donate blood? Our platform links patients with nearby donors in real-time — life-saving help at your fingertips',
    image: bloodDonation,
  },
];

export default function WhyChooseUsBanner() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow max-w-screen-xl w-full text-center py-6 sm:py-8 md:py-10 lg:py-12">
        <motion.h2
          className="text-[#00a79b] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-['Fredoka_One']"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
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
              transition={{ duration: 0.1, ease: 'easeOut' }}
              key={tab.key}
              onClick={() => handleTabClick(index)}
              className={`py-2 px-4 sm:px-6 lg:px-8 rounded-lg font-semibold text-sm sm:text-base md:text-lg lg:text-xl capitalize
                ${activeIndex === index ? 'bg-yellow-500 text-black' : 'bg-teal-500 text-white'}
              `}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <Slider {...settings} ref={sliderRef}>
          {tabs.map((tab) => (
            <div key={tab.key}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#d5ece9] rounded-lg border border-teal-500 mx-4 sm:mx-6 md:mx-10 lg:mx-16 py-6 px-4 sm:py-8 sm:px-6">
                <div className="text-gray-600 font-['DM_Sans'] text-base sm:text-xl md:text-2xl lg:text-2xl max-w-lg text-center md:text-left">
                  {tab.text}
                </div>
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full sm:w-64 md:w-72 lg:w-80 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
