import React from "react";
import Flowwork from "../Ourteam/Flowwork";

function Workflow() {
  return (
    <>
      <div className=" flex flex-col  text-5xl font-bold text-[#00A79B] mt-8">
        <h1 className="text-center">how it works</h1>
        <div className=" mt-15 flex flex-row ">
          <img src="/Home/circle.png" className="h-30 w-30 ml-6 transition-transform duration-500 hover:scale-125 " />
          <div>
            <h1 className="text-4xl  text-[#00A79B] font-semibold ml-8 mt-4">
              Search it
            </h1>
            <h1 className="text-2xl  text-black font-normal ml-8 mt-4">
              Find your medicine quickly with a smart and simple search
            </h1>
          </div>
        </div>
      </div>
      <div>
        <img src="/Home/pill.png " className="w-345  ml-17 " />
      </div>
      <Flowwork
        name="Upload it "
        subname="Got a prescription? Just upload it - secure and easy"
        img="/Home/circle1.png "
      />

      <div className=" flex flex-col  text-5xl font-bold text-[#00A79B] ">
        <div className=" flex flex-row ">
          <img src="/Home/circle2.png" className="h-30 w-30 ml-6 transition-transform duration-500 hover:scale-125" />
          <div>
            <h1 className="text-4xl  text-[#00A79B] font-semibold ml-8  ">
              Confirm it
            </h1>
            <h1 className="text-2xl  text-black font-normal ml-8 ">
              We match the best options and prices. You choose what works
            </h1>
          </div>
        </div>
      </div>
      <div>
        <img src="/Home/pill.png " className="w-345  ml-12" />
      </div>
      <div className=" flex flex-col  text-5xl font-bold text-[#00A79B]  ">
        <div className=" flex justify-end ">
          <div className="text-end mr-10">
            <h1 className="text-4xl  text-[#00A79B] font-semibold ">
              Receive it
            </h1>
            <h1 className="text-2xl  text-black font-normal">
              Sit back and relax , your medicines are on the way.
            </h1>
          </div>
          <div>
            <img src="Home/circle3.png" className="h-30 w-30 mr-10 transition-transform duration-500 hover:scale-125" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Workflow;
