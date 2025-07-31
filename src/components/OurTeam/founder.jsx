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
      <div className="h-full flex flex-col items-center justify-center m-auto mt-10">
        <h2 className="text-[#00A79B] text-5xl font-bold">Founders</h2>
        <p className="text-2xl text-center mt-2">Meet the people behind the promise</p>

        <div className="flex flex-wrap gap-10 mt-10 items-center justify-center">
          <div onClick={handleNavigate} className="cursor-pointer">
            <CardComp
              name="Pardha Saradhi"
              img="/developer.png"
              isActive={true}
              highlight={false}
            />
          </div>

          <div onClick={handleNavigate} className="cursor-pointer">
            <CardComp
              name="Pardha Saradhi"
              img="/developer.png"
              isActive={true}
           
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Founders;

