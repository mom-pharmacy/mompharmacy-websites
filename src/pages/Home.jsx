import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
import Banner from "../components/Home/Banner"
import OurStory from "../components/Home/OurStory"
import SlideBarAnimation from "../components/Home/SlideBarAnimation"
import Workflow from "../components/Home/Workflow"

import TalentedTeam from '../components/Home/TalentedTeam'






const Home = () => {
  return (
   <div className='overflow-x-clip'> 
    <Banner/>
    <SlideBarAnimation/>
    <Workflow/>
    <TalentedTeam/>
    <OurStory/>
          <Faqs />
          <AskMom />
          </div>
  )
}

export default Home;
