import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
// import Footer from "../components/Home/Footer"
import Banner from "../components/Home/Banner"
import OurStory from "../components/Home/OurStory"
import TalentedTeam from '../components/Home/TalentedTeam'
import Workflow from '../components/Home/Workflow'

const Home = () => {
  return (


   <div className='overflow-x-clip'> 
    <Banner/>
    <Workflow/>
    <TalentedTeam/>
    <OurStory/>
          <Faqs />
          <AskMom />
          </div>

  )
}

export default Home;
