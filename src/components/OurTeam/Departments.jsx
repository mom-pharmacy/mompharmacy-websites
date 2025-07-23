import React from "react";
import CardComp from "./CardComp";

export default function Departments() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-[#00A79B] text-5xl font-bold"> Departments </h2>
        <p className="text-2xl">departments across</p>
      </div>

      <div className="flex overflow-x-auto gap-4 py-4 px-2 justify-center">
        <CardComp name="Developer"></CardComp>

        <CardComp name="Disigner"></CardComp>

        <CardComp name="Tester"></CardComp>
        
        <CardComp name="Developer"></CardComp>

        <CardComp name="Developer"></CardComp>
      </div>
    </div>
  );
}
