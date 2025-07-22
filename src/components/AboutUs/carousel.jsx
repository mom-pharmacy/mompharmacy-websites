import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinity: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-white">
    <div className=" mt-10 w-full">
      <Slider {...settings}>
        <div className="flex justify-center h-100 bg-[#00a99d]">
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center mt-25 text-white">
          we are</h1><br></br><h1 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center">cockroachpreneurs</h1><img src='@/assets/images/cockroachpreneurs.png' alt='cockroach' className='w-10 h-10 inline-block' />
          
            <p className="text-lg md:text-xl text-center max-w-xl text-white">
         we survive, adapt, and keep building — no matter what.
          </p>
          
        </div>

        <div className="flex justify-center  h-96 bg-[#00a99d]">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center mt-25 text-white">
            we are</h1><br></br>
          <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center">rentless learners
          </h1>
            <p className="text-lg md:text-xl text-center max-w-xl text-white items-center">
            growing through every failure, challenge, and change</p>
        </div>

        <div className="flex justify-center items-center h-96 bg-[#00a99d]">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center mt-25 text-white ">we are </h1>
          <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center">the believers</h1>
          <p className="text-lg md:text-xl text-center max-w-xl text-white">fueled by vision, not just validation</p>
        </div>

        <div className="flex justify-center items-center h-96 bg-[#00a99d]">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center mt-25 text-white">
            we are the speed </h1>
          <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center">your health deserves</h1>
            <p className="text-lg md:text-xl text-center max-w-xl text-white">delivering care when every second counts.</p>
        </div>

        <div className="flex flex-wrap mx-auto justify-center h-96 bg-[#00a99d]">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center mt-25 text-white">
            we are</h1>
          <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold text-center">fighters</h1>
            <p className="text-lg md:text-xl text-center max-w-xl text-white">we are standing strong so  our users don't have to fight alone</p>
        </div>
      </Slider>
    </div>
    </div>
  );
};
export default CarouselComponent;
