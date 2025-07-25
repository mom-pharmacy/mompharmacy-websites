import React from 'react'
import { motion } from 'framer-motion'

export default function ImageComp(propes) {
  return (
    <div className='h-90 w-80 rounded-2xl'>
         <motion.img
          src={propes.img}
          className="w-full h-90 object-cover pad rounded-3xl border-10 border-[#E6F6F5] "
           whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.6)' }}
           transition={{ duration: 0.3, ease: 'easeOut' }}
           

        ></motion.img>
      
    </div>
  )
}
