import Maincard from "../components/OurTeam/Maincard";
import MomsDesk from "../components/OurTeam/Slider";
import Founder from "../components/OurTeam/founder";
import CardSlider from "../components/MeetOurTeam/Cardslider";
import MomLogo from "../components/Home/momLogo";
import BacktoBottom from '../components/Home/backtobotton'
function Teamour() {
  return (
    <div className="">
      <BacktoBottom />
      <Maincard />
      <Founder />
      <CardSlider />
      <MomsDesk />
      <MomLogo />
    </div>
  );
}

export default Teamour;
