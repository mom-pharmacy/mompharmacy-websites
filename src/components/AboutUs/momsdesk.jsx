import React from 'react';
import '@fontsource/fredoka-one';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useRef } from 'react';

const MomsDesk = () => {
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);0

  const slides = [
    {
        quote:
          'we started with one mission: take the stress out of healthcare. today, you’re just one tap away from feeling better — no lines, no confusion, just care.',
        role: 'pardhasaradhi (ceo)',
  
      },
    {
      quote:
        'every line of code we write is for your peace of mind. behind the scenes, we’re obsessing over making it faster, smarter, and error-free.',
      role: 'developer',
    },
    {
      quote:
        'we don’t deliver boxes. we deliver hope, health, and healing — rain or shine.',
      role: 'delivery executive',
    },

    {
      quote:
        'i used to forget my medicines. now, they remind me and deliver them before i run out. its like having family in an app.',
      role: 'customer (65 yrs)',
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setCurrent(next),
    afterChange: (index) => setCurrent(index),
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 p-6 bg-white">
      <h1
        className="text-5xl text-[#00A79B] font-bold text-center"
        style={{ fontFamily: '"Fredoka One", sans-serif' }}
      >
        from mom’s desk
      </h1>
      <div className="w-full max-w-3xl border-4 border-[#00A79B] rounded-3xl pt-6 pb-10 h-full">
      <Slider ref={sliderRef} {...settings}>
          {slides.map((item, index) => (
            <div
              key={index}
              className="h-full flex flex-col justify-center items-center text-center px-6"
            >
              <p className="text-2xl font-medium mb-4 lowercase">{item.quote}</p>
              <span className="text-base font-semibold text-gray-700 lowercase">
                — {item.role}
              </span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center mt-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrent(idx);
              sliderRef.current.slickGoTo(idx);
            }}
            className={`w-4 h-4 mx-1 rounded-full border-2 border-[#00A79B] transition 
              ${current === idx ? 'bg-[#00A79B]' : 'bg-white'}
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MomsDesk;
