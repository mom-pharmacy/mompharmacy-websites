import { motion } from "framer-motion"
import COLOR from '../constants/COLORS'
import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
import Footer from "../components/Home/Footer"
import Banner from "../components/Home/Banner"
const Home = () => {
  return (
   <div className=''>
    <Banner/>
          <Faqs />
          <AskMom />
          <Footer />
          </div>
  )
}

export default Home
