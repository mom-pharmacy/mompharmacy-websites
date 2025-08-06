  import React from "react";
import CardComp from "../MeetOurTeam/Cardcomp";
import { useNavigate } from "react-router";

const Founders = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    console.log("clicked");
    navigate("/founderbio");
  }

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center mt-10">
        <h2 className="text-[#00A79B] text-5xl font-['fredoka_one']">Founders</h2>
        <p className="text-lg md:text-2xl lg:text-2xl text-center mt-2 text-['#444444']">Meet the people behind the promise</p>

        <div className="flex mt-10 items-center justify-center">
          <div onClick={handleNavigate} className="cursor-pointer">
            <CardComp
              name="Pardha Saradhi"
              img="/pardhu.png"
              isActive={true}
              highlight={false}
            />
          </div>

          <div onClick={handleNavigate} className="cursor-pointer">
            <CardComp
              name="Pardha Saradhi"
              img="/pardhu.png"
              isActive={true}
           
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;

