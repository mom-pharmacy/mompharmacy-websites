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
    <div className="bg-white py-10 px-4 md:px-8 rounded-xl shadow max-w-5xl mx-auto text-center">
      <h2 className="text-teal-600 font-bold text-2xl mb-2 capitalize">why to choose us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-6">
        every package we deliver carries not just medicine, but also a promise to be timely, to be trustworthy, to show up — like mom would.
      </p>
      <motion.div className="flex flex-wrap justify-center gap-4 mb-8 bg-teal-500 rounded-xl p-2"
      whileHover={{scale: 1.05}}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(index)}
            className={`p-2 m-1 pr-10 text-sm font-medium rounded-lg transition
              ${activeIndex === index
                ? 'bg-yellow-500 text-black p-10'
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-[#00A79B1A] h-auto rounded-lg border border-teal-500 p-5">
              <div className="max-w-md text-gray-600 font-bold text-xl mb-4 md:mb-0 text-center md:text-center">
                {tab.text}
              </div>
              <div>
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-48 h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
