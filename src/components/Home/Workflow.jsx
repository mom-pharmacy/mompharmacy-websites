import React, { useEffect, useRef, useState } from "react";

const ScrollGif = ({ src, className }) => {
  const containerRef = useRef(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newSrc = `${src}?t=${Date.now()}`;
          setCurrentSrc(newSrc);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const element = containerRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [src]);

  return (
    <div ref={containerRef} className={className}>
      <img src={currentSrc} alt="Animated GIF" />
    </div>
  );
};

function Workflow() {
  return (
    <div className="mb-40 xl:w-[90%] m-auto">
      <div className="flex flex-col   text-5xl font-bold text-[#00A79B] mt-8">
        <h1 className="text-center">how it works</h1>
        <div className="mt-15 flex flex-row">
          <img
            src="/Home/circle.png"
            className="h-30 w-30 ml-6 transition-transform duration-500 hover:scale-125 "
          />
          <div>
            <h1 className=" text-4xl text-[#00A79B] font-semibold ml-8 mt-4">
              search it
            </h1>
            <h1 className=" text-2xl text-black font-normal ml-8 mt-4">
              find your medicine quickly with a smart and simple search
            </h1>
          </div>
        </div>
      </div>

      <div className="relative">
        <ScrollGif src="/Home/pillgif1.gif" className="lg:w-[90%] ml-15 -mt-10" />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B] mt-3">
        <div className="flex justify-end -mt-20">
          <div className="text-end mr-10">
            <h1 className=" text-4xl text-[#00A79B] font-semibold">
              upload it
            </h1>
            <h1 className=" text-2xl  text-black font-normal">
              got a prescription? just upload it - secure and easy
              
            </h1>
          </div>
          <div>
            <img
              src="/Home/circle1.png"
              className="h-30 w-30 mr-3 transition-transform duration-500 hover:scale-125 "
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <ScrollGif src="/Home/pillgif2.gif" className="lg:w-[90%] ml-17 -mt-10 " />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]">
        <div className="flex flex-row">
          <img
            src="/Home/circle2.png"
            className="h-30 w-30 ml-3 transition-transform duration-500 hover:scale-125 "
          />
          <div>
            <h1 className="  text-4xl text-[#00A79B] font-semibold ml-8">
              Confirm it
            </h1>
            <h1 className="  text-2xl text-black font-normal ml-8">
              We match the best options and prices. You choose what works
            </h1>
          </div>
        </div>
      </div>

      <div>
        <ScrollGif src="/Home/pillgif3.gif" className="lg:w-[90%] ml-15 -mt-10" />
      </div>

      <div className="flex flex-col text-5xl font-bold text-[#00A79B]">
        <div className="flex justify-end -mt-20">
          <div className="text-end mr-10">
            <h1 className="  text-4xl text-[#00A79B] font-semibold">
              Receive it
            </h1>
            <h1 className=" text-2xl text-black font-normal">
              Sit back and relax, your medicines are on the way.
            </h1>
          </div>
          <div>
            <img
              src="/Home/circle3.png"
              className="h-30 w-30 mr-10 transition-transform duration-500 hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;