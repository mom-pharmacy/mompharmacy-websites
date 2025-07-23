import { motion } from "framer-motion"
import COLOR from '../constants/COLORS'
import Faqs from "../components/Home/Faqs"
import AskMom from "../components/Home/AskMom"
import Footer from "../components/Home/Footer"
const Home = () => {
  return (
   <div className=''>
          <Faqs />
          <AskMom />
          <Footer />
          </div>
  )
}

export default Home
