import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
import Footer from "../components/Home/Footer"
import Banner from "../components/Home/Banner"
import OurStory from "../components/Home/OurStory"
import SlideBarAnimation from "../components/Home/SlideBarAnimation"
import Workflow from "../components/Home/Workflow"

const Home = () => {
  return (


   <div className='overflow-x-clip'> 
   <div className=''>
     {/* <Navbar />  */}
    <Banner/>
    <SlideBarAnimation/>
    <Workflow/>
    <OurStory/>
          <Faqs />
          <AskMom />
          {/* <Footer /> */}
          </div>
          </div>

  )
}

export default Home;
