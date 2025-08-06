import React, { useEffect, useState } from "react";
import Downarrow from "../../assets/AboutUs/downarrow.png";

export default function BackToBottom() {
    const [button, setButton]=useState(true)
    const handleScroll = () =>{
      if (window.scrollY > 200) {
        setButton(false);
      } else {
        setButton(true);
      }
    }
  const tobottom = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
   
  };
   const totop = () => {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     });
   };

   useEffect(() => {
     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll); 
     };
   }, []);

  return (
    <div>
      {button ? (
        <div className="fixed inset-x-0 bottom-10 flex justify-center z-10">
          <button
            className=" px-2 py-2 bg-[#fff] text-white rounded-full hover:text-black hover:bg-[#FADB14]"
            onClick={tobottom}
          >
            <img src={Downarrow} alt="downarrow" className="h-7 w-7" />
          </button>
        </div>
      ) : (
        <div className="fixed inset-x-0 bottom-10 flex justify-center z-10"> 
        <button
          className=" px-2 py-2 bg-[#fff] text-white  rounded-full hover:text-black hover:bg-[#FADB14]"
          onClick={totop}
        >
          <img src={Downarrow} alt="downarrow" className="h-7 w-7 rotate-180" />
        </button>
        </div>
      )}
    </div>
  );
}
