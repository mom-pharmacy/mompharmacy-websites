import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Love from "../../assets/AboutUs/Carousel/love.png";

function Filpcard() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  return (
    <>
     <div
        className="z-10 relative flex flex-col justify-center items-center text-center text-[#00A79B] px-6 "
      
      >
        <h2
          className="text-8xl sm:text-7xl font-bold"
          style={{ fontFamily: "Fredoka One" }}
        >
          3a’s
        </h2>
        <p className="text-xl md:text-7xl font-medium md:font-medium sm:text-xl mt-2 font-semibold font-['fredoka_one']">triple pillars of care</p>
      </div>
    <div className="flex justify-center items-center gap-10 ">
   
      <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
        <div
          className="bg-[#00a79b] text-white  rounded-2xl shadow-lg flex flex-col  cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped1(true)}
          onMouseLeave={() => setIsFlipped1(false)}
        >
          <div>
          <img src={Love} alt="love" className="w-20 h-20 mb--54"/>
          <h2 className="text-5xl font-bold p-6 mb-4">accessibility</h2>
          </div>
        </div>
        <div
          className="bg-white  p-6 rounded-3xl border-2 border-[#00a79b]  shadow-lg flex flex-col items-center justify-center cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped1(true)}
          onMouseLeave={() => setIsFlipped1(false)}
        >
            <h1 className="text-[#00a79b] text-4xl font-bold mb-2 ">accessibility</h1>
            <p className="text-[#444444] text-xl font-semibold mb-2">care shouldn't be complicated</p>
          <p className="text-center text-['#444444'] text-xl">
            we make it easy to search, order, and receive your medicines — no
            confusion, no chaos. just clarity.
          </p>
        </div>
      </ReactCardFlip>

    
      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div
          className="bg-[#00a79b] text-white  rounded-2xl shadow-lg flex flex-col  cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped2(true)}
          onMouseLeave={() => setIsFlipped2(false)}
        >
          <div>
            <img src={Love} alt="love" className="w-20 h-20 mb--54 mr-5"/>
          <h2 className="text-5xl font-bold p-6  text-center mb-4">affordability</h2>
          </div>
        </div>
        <div
          className="bg-white p-6 rounded-3xl border-2 border-[#00a79b] shadow-lg flex flex-col items-center justify-center cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped2(true)}
          onMouseLeave={() => setIsFlipped2(false)}
        >
            <h1 className="text-[#00a79b] text-4xl font-bold mb-2 ">accessibility</h1>
            <p className="text-[#444444] text-xl font-semibold mb-2">care shouldn't be complicated</p>
          <p className="text-center text-['#444444'] text-xl">
            we make it easy to search, order, and receive your medicines — no
            confusion, no chaos. just clarity.
          </p>
        </div>
      </ReactCardFlip>

    
      <ReactCardFlip isFlipped={isFlipped3} flipDirection="horizontal">
        <div
          className="bg-[#00a79b] text-white  rounded-3xl shadow-lg flex flex-col items-left justify-left  cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped3(true)}
          onMouseLeave={() => setIsFlipped3(false)}
        >
          <div className="flex flex-col mb-20">
            <img src ={Love} alt="love" className="w-20 h-20 mb--70"/>
        
          <h2 className="text-5xl font-bold  p-6 text-center mb-4">availability</h2>
          </div>
        </div>
        <div
          className="bg-white p-6 rounded-3xl border-2 border-[#00a79b] shadow-lg flex flex-col items-center justify-center cursor-pointer w-[350px] h-[300px]"
          onMouseEnter={() => setIsFlipped3(true)}
          onMouseLeave={() => setIsFlipped3(false)}
        >
           <h1 className="text-[#00a79b] text-4xl font-bold mb-2 ">accessibility</h1>
            <p className="text-[#444444] text-xl font-semibold mb-2">care shouldn't be complicated</p>
          <p className="text-center text-['#444444'] text-xl">
            we make it easy to search, order, and receive your medicines — no
            confusion, no chaos. just clarity.
          </p>
        </div>
      </ReactCardFlip>
    </div>
    </>
  );
}

export default Filpcard;