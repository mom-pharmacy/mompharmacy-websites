import { motion } from "framer-motion"
import COLOR from '../constants/COLORS'

const Home = () => {
  // clear the code before you start coding
  return (
    <div className='h-screen flex justify-center items-center gap-5'>
     <div className='flex-col flex justify-center items-center gap-5'>
      <motion.p  initial={{y:-300}} animate={{ y: 0 }} transition={{delay:1 , duration:0.4 , }}  className={`font-bold text-5xl`    } > let's start</motion.p>
      <div>
        <div>
          <motion.p initial={{x:-1000}} animate={{ x: 0 }} transition={{delay:1 , duration:0.4 , }} className="font-bold text-center"  >Building mom pharmacy</motion.p>
          </div>
        <div>
          <motion.p initial={{x:1000}} animate={{ x: 0 }} transition={{delay:1 , duration:0.4 , }} className="font-bold text-center" >Portfolio</motion.p>
          </div>
      </div>
     </div>
    </div>
  )
}

export default Home
