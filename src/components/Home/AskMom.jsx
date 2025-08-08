
import React from 'react'
    import { Link } from "react-router-dom";

function AskMom() {
    return (
      <div className="bg-white z-[1] xl:pt-20 md:pt-20 py-5 px-5 xl:pb-20 md:pb-20 pb-10 m-auto">
        <div
          className=" grid xl:grid-cols-5 grid-cols-3 md:grid-cols-5 md:justify-center xl:justify-center sm:justify-center bg-[#00A79B1A] 
            xl:items-center md:items-center sm:items-center border-4 rounded-4xl border-[#00A79B] xl:px-10 md:px-2 py-3
             xl:py-5 md:py-10 xl:gap-[100px] md:gap-[20px] xl:w-[70%] md:w-[90%] sm:gap-10 m-auto lg:px-5 lg:py-5 lg:gap-5 "
        >
          <div className="animate-pulse col-span-1 justify-center items-center ">
            <img
              src="/Home/askmom.jpg"
              alt="askmom pillman"
              className="md:w-30 w-25 xl:max-w-none xl:w-[120px]"
            />
          </div>
          <div className="xl:col-span-3 col-span-2 md:col-span-3">
            <h2 className="font-bold xl:text-[42px] md:text[42px] text-[20px] text-[#00A79B]">
              got a question?
            </h2>
            <h4 className="text-[12px] font-medium lg:text-xl ">
              mom is just one message away!
            </h4>
            <p className="text-[10px] font-normal lg:text-lg ">
              whether it’s a health query or a concern, mom ai chat bot is here
              to help with clarity and a touch of mom like warmth-just start
              asking questions.
            </p>
          </div>
          <Link to="/contactus">
            <button class="relative left-65 lg:left-0 md:left-0 xl:left-0 inline-flex shadow-xs shadow-[#00A79B] items-center justify-center px-2 py-2 overflow-hidden  font-bold tracking-tighter text-white bg-[#00A79B] rounded-2xl group">
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FADB14] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-[#FADB14] from-transparent via-transparent to-[#00A79B]"></span>
              <span class="relative ">ask mom</span>
            </button>
          </Link>
        </div>
      </div>
    );
}

export default AskMom