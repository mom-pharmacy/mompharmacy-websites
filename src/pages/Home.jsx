import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
import Banner from "../components/Home/Banner"
import OurStory from "../components/Home/OurStory"
import SlideBarAnimation from "../components/Home/SlideBarAnimation"
import Workflow from "../components/Home/Workflow"

import TalentedTeam from '../components/Home/TalentedTeam'
import MomLogo from "../components/Home/momLogo"

const Home = () => {
  return (
    <div className='overflow-x-clip'>
      <Banner />
      <SlideBarAnimation />
      <Workflow />
      <TalentedTeam />
      <OurStory />
      <Faqs />
      <AskMom />
      <MomLogo />
    </div>
  )
}

export default Home;
