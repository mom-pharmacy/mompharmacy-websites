import React from 'react'
import { motion } from 'framer-motion'


export default function Journeyofhealthcare() {
  return (
    <div>
        <div className=' flex h-screen items-center flex-col '>
                  <div className=''>
                          <h1 className='m-4 text-5xl text-[#00A79B] font-semibold text-center '>A Journey of Healthcare <br/>Transformation</h1>
            
                  </div>
                  <motion.div className='mx-auto h-110 w-250 rounded-2xl flex items-center justify-between'  whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.6)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
>
                          <img src='/Journy.png' className='w-full h-full object-cover pad rounded-xl'></img>
           
                  </motion.div>
                </div>
      
    </div>
  )
}
