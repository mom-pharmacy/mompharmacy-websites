import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
export default function JobLanding() {
  return (
    <div className="bg-[#00a79b] h-screen w-full ">
    <motion.div
      initial={{y:500}} animate={{y:0}} 
      exit={{y: -500}}
       transition={{ duration: 0.5, delay: 0.4 }}
     className='flex flex-col justify-center items-center h-full'>
<p className='text-white text-9xl text-Fredoka font-bold text-center pt-10'>job role</p>
<p className='text-white text-9xl text-Fredoka font-bold text-center pt-10'>name</p>
        
    </motion.div>
    </div>
  )
}