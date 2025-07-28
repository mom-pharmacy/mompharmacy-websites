import React from "react";
import CardComp from "./CardComp";
import Departments from "./Departments";
import { useNavigate } from "react-router";

const Founders = () => {

  
   let navigate = useNavigate();

   function navigates()
   {
   console.log("clicked")
    navigate('/founderbio')

   }

  return (
    <>
      <div className="h-full flex items-center justify-center flex-col m-auto mt-10 ">
        <h2 className="text-[#00A79B] text-5xl font-bold"> founders</h2>
        <p className="text-2xl">meet the people behind the promise</p>

        <div className="flex flex-wrap gap-2 md:h-auto items-center  justify-center" onClick={()=>navigates()}>
 
          <CardComp name="Pardhu" ></CardComp>
          <CardComp name="Pardhu" ></CardComp>
        </div>
      </div>
    </>
  );
};
export default Founders;
