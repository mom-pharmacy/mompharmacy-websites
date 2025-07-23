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
  };

  const slides = [
    {
      heading1: "we are",
      heading2: "cockroachpreneurs",
      image: "/cockroachpreneurs.png",
      description: "we survive, adapt, and keep building — no matter what.",
    },
    {
      heading1: "we are",
      heading2: "relentless learners",
      image: "/rentless learners.png",
      description: "growing through every failure, challenge,and change.",
    },
    {
      heading1: "we are the",
      heading2: "believers",
      image: "/believers.png",
      description: "fueled by vision, not just validation.",
    },
    {
      heading1: "we are the speed",
      heading2: "your health deserves",
      image: "/health.png",
      description: "delivering care when every second counts.",
    },
    {
      heading1: "we are",
      heading2: "fighters",
      image: "/fighters.png",
      description: "we are standing strong so our users don't have to fight alone.",
    },
  ];

  return (
    <div className="bg-white" >
      <div className="mt-5  w-full" >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-100 bg-[#00a99d] px-4"
            >
              <div
                className="text-center"
                style={{ fontFamily: '"Fredoka One", cursive' }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 mt-10">
                  {slide.heading1}
                </h1>

                <div className="flex items-center justify-center gap-x-4 mb-4 flex-wrap">
                  {(index === 3 || index === 4)? ( 
                    <>
                      <img
                        src={slide.image}
                        alt={slide.heading2}
                        className="w-30 h-30"
                      />
                      <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold">
                        {slide.heading2}
                      </h1>
                    </>
                  ) : (
                    <>
                      <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold">
                        {slide.heading2}
                      </h1>
                      <img
                        src={slide.image}
                        alt={slide.heading2}
                        className="w-30 h-30"
                      />
                    </>
                  )}
                </div>

                <p className="text-lg md:text-xl text-white max-w-xl mx-auto">
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
