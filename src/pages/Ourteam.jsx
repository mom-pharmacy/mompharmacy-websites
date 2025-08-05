import React from "react";
import Maincard from "../components/Ourteam/Maincard";
import MomsDesk from "../components/Ourteam/slider";
import Founder from "../components/OurTeam/founder";
import Departments from "../components/OurTeam/Departments";
import MomLogo from "../components/Home/momLogo";
import BacktoBottom from '../components/Home/backtobotton'

function Ourteam() {
  return (
    <div className=" bg-[#f8f8f8]">
      <BacktoBottom/>
      <Maincard />

      <Founder></Founder>
      <Departments></Departments>
      <MomsDesk></MomsDesk>
      <MomLogo />
    </div>
  )
}

export default Ourteam
