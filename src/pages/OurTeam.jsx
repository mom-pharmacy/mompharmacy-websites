import React from "react";
import Maincard from "../components/Ourteam/Maincard";
// import Teamwork from "../components/Ourteam/Teamwork";
// import Slider from "react-slick/lib/slider";
import MomsDesk from "../components/Ourteam/slider";
import Founder from "../components/OurTeam/founder";
import Departments from "../components/OurTeam/Departments";
import MomLogo from "../components/Home/momLogo";
import BacktoBottom from '../components/Home/backtobotton'

function Ourteam() {
  return (
    <div className="">
      <BacktoBottom/>
      <Maincard />
      <Founder></Founder>
      <Departments></Departments>
      <MomsDesk></MomsDesk>
      <MomLogo />
    </div>
  )
}
