import React from "react";
import Maincard from "../components/Ourteam/Maincard";
// import Teamwork from "../components/Ourteam/Teamwork";
// import Slider from "react-slick/lib/slider";
// import MomsDesk from "../components/Ourteam/slider";
import Founder from "../components/OurTeam/founder";
import Departments from "../components/OurTeam/Departments";

function Ourteam() {
  return (
    <div className="">
      <Maincard />
      <Founder></Founder>
      <Departments></Departments>
      {/* <MomsDesk></MomsDesk> */}
    </div>
  );
}

export default Ourteam;
