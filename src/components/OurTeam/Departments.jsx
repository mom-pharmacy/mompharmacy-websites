import React, { useState } from "react";
import CardComp from "./CardComp";
import { useNavigate } from "react-router";
import TeamPopup from "./OpenCardComp";

export default function Departments() {
  let navigate = useNavigate();
  const [state, setState] = useState(false);

  function OpneCard() {
    setState(!state);
    console.log("card is opend Opencard ");
    //  navigate('/opneCard')
  }
  return (
    <div>
      <div className="flex flex-col items-center mt-10 ">
        <h2 className="text-[#00A79B] text-5xl font-bold"> Departments </h2>
        <p className="text-2xl">departments across</p>
      </div>

      <div>
        <div className=" flex h-full items-center flex-col ">
          <div className="">
            <h1 className="m-4 text-5xl text-[#00A79B] font-semibold text-center "></h1>
          </div>

          <div
            className=" items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            onClick={() => OpneCard()}
          >
            <CardComp name="Designers" designation="" />

            <CardComp name="Developers" designation=""  />
            <CardComp name="Testers" designation=""  />

            <CardComp
              name="Testers"
              designation=""
            />

            <CardComp
              name="Data Engineers"
              designation=""
            />

            <CardComp name="Designers" designation="" />
          </div>
        </div>
      </div>
      <>{state && <TeamPopup state={state} setState={setState} />}</>
    </div>
  );
}
