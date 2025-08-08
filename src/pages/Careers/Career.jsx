import React from "react";
import Welcome from "../../components/Careers/Welcomepage";
import Work from "../../components/Careers/work";
import Applynow from "../../components/Careers/applynow";
import CareerProgram from "../../components/Careers/CareerProgram";
import OpenPositions from "../../components/Careers/OpenPositions";
import MomLogo from "../../components/Home/momLogo";
import BacktoBottom from '../../components/Home/backtobotton'

export const Career = () => {
  return (
    <div className="overflow-x-clip">
      <BacktoBottom />
      <Welcome />
      <Work />
      <Applynow />
      <CareerProgram />

      <OpenPositions />
      <MomLogo />

  
    </div>
  );
};
