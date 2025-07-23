import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion} from 'framer-motion';
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
    beforeChange: (_, next) => setActiveIndex(next),
  };

  const handleTabClick = (index) => {
    setActiveIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className='flex items-center justify-center'>
    <div className="bg-white md:px-8 rounded-xl shadow max-w-7xl text-center items-center justify-center">
      <h2 className="text-[#00a79b] font-extrabold text-6xl mb-2 font-['Fredoka_One'] ">why to choose us</h2>
      <p className="text-gray-600 max-w-2xl font-['DM_Sans'] mx-auto font-normal text-xl mb-6">
        every package we deliver carries not just medicine, but also a promise to be timely, to be trustworthy, to show up — like mom would.
      </p>
      <motion.div className="flex flex-wrap gap-10 mb-8 bg-teal-500 rounded-xl h-15">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(index)}
            className={`p-2 m-1 pr-10 font-medium rounded-lg transition h-13 font-sans text-2xl
              ${activeIndex === index
                ? 'bg-yellow-500 text-black'
                : 'bg-teal-500 text-white'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>
      <Slider {...settings} ref={sliderRef}>
        {tabs.map((tab) => (
          <div key={tab.key}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-teal-100 h-150 w-280 rounded-lg border border-teal-500 m-7">
              <div className="max-w-md text-gray-600 text-4xl  md:text-center font-['DM_Sans']">
                {tab.text}
              </div>
              <div>
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-75 h-auto rounded-lg shadow-md ml-25"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
