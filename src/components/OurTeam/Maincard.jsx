import React from "react";

function Maincard() {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-[#00A79B] p-30 ">
      <div className=" flex flex-col items-center">
        <img
          className="flex h-50 w-120 p-3 items-center animate-bounce"
          src="/4pills.png" 
          >

          </img>
        <div className="text-gray-100  font-bold text-5xl ">
          <h1 className="ml-20">a passionate team delivering</h1>
          <h1 className="text-amber-400 font-bold ml-40">
            care, speed, and trust
          </h1>
          <h1 className="font-bold align">
            every minute,with every medicine.
          </h1>
        </div>
        <div className="p-18 ">
          <button className="h-15 w-50 rounded-4xl bg-white p-2 hover:bg-amber-300 transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h1 className="font-bold text-2xl ">be among of us</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maincard;


