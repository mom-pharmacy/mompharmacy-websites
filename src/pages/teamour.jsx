import React from "react";
import Maincard from "../components/Ourteam/Maincard";
import Teamwork from "../components/Ourteam/Teamwork";
import Slider from "react-slick/lib/slider";
import MomsDesk from "../components/Ourteam/slider";
import Founder from "../components/OurTeam/founder";
import Departments from "../components/OurTeam/Departments";
import CardComp from "../components/MeetOurTeam/Cardcomp";
import CardSlider from "../components/MeetOurTeam/Cardslider";
function teamour() {
  return (
    <div className="">
      <Maincard></Maincard>
      <Founder></Founder>
      {/* <CardComp></CardComp>
      <Departments></Departments> */}
       <CardSlider></CardSlider>
      <MomsDesk></MomsDesk>
    </div>
  );
}

export default teamour;
