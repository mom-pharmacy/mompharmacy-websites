import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/fredoka-one";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 rounded-full bg-white/50"></div>
    )
  };

  const slides = [
    {
      heading1: "we are",
      heading2: "cockroachpreneurs",
      image: "/src/assets/AboutUs/carousel/cockroachpreneurs.png",
      description: "we survive, adapt, and keep building — no matter what.",
    },
    {
      heading1: "we are",
      heading2: "relentless learners",
      image: "/src/assets/AboutUs/carousel/rentlesslearners.png",
      description: "growing through every failure, challenge, and change.",
    },
    {
      heading1: "we are the",
      heading2: "believers",
      image: "/src/assets/AboutUs/carousel/believers.png",
      description: "fueled by vision, not just validation.",
    },
  ];

  return (
    <div className="bg-[#00a99d]">

      <div className="w-full">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
     
              <div className="h-[40vh] md:h-[60vh] flex flex-col justify-center items-center text-center px-4">
                
                <div style={{ fontFamily: '"Fredoka One", cursive' }}>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {slide.heading1}
                  </h1>

                  <div className="flex items-center justify-center gap-x-2 md:gap-x-4 flex-wrap">
                    <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold leading-tight">
                      {slide.heading2}
                    </h1>
                    <img
                      src={slide.image}
                      alt={slide.heading2}
                      className="w-16 h-16 md:w-20 md:h-20"
                    />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-white max-w-xl mx-auto mt-8">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;