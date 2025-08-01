import React from "react";
// import Main from './FoundersPageComp'
import TextComp from "./textComp";
import ImageComp from "./ImageComp";

export default function EntreprenuorComp(propes) {
  return (
    <div className=" h-auto m-auto xl:w-[90%] items-center ">
      <div>
        <h1 className="m-10 text-5xl text-[#00A79B] font-semibold text-center ">
          Transforming Healthcare Policy <br/> Through leadership
        </h1>
      </div>
      <div className=" lg:h-full w-full rounded-2xl border-2 border-[#00A79B] md:grid grid-cols-3 items-center ">
         <div className="m-auto">
          <img
            src="/pardhu.png"
            className="rounded-3xl border-10 border-[#E6F6F5] "
          ></img>
        </div>
        <div className="col-span-2">
          <p className="m-3">
            {" "}
            
            To become the most trusted global name in doorstep ealthcare,
            delivering not just medicines, but peace of mind, through technology
            that feels like mother's care: fast, reliable, and full of heart.to
            become the most trusted global name in doorstep ealthcare,
            delivering not just medicines, but peace of mind, through technology
            that feels like a mother's are: fast, reliable, and full of heart.to
            become the most trusted global name in doorstep healthcare,
            delivering not just medicines, but peace of mind, through technology
            that feels like a mother's care: fast, reliable, and full of
            heart.to become the most trusted global name in doorstep healthcare,
            delivering not just medicines, but peace of mind, through technology
            that feels like a mother's care: fast, reliable, and full of heart.
            to become the most trusted global name in doorstep healthcare,
            delivering not just medicines, but peace of mind


          </p>
        </div>
       
      </div>
    </div>
  );
}
