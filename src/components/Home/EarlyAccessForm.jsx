import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";

const EarlyAccessForm = ({earlyaccess,setEarlyAccess}) => {
  return (
 
    
    <AnimatePresence mode='wait'>
      {earlyaccess && <motion.div initial={{y:1000,display:'none'}} animate={{y:-2000,display:'flex'}} transition={{duration:0.2}} exit={{y:-1000}} className='flex  h-screen w-screen fixed '>
        <div className='flex flex-row'>
        <div className='w-100 h-60 bg-white ouline-1  flex flex-col gap-2 p-5 rounded-xl '>
          <p className='text-xl text-[#00A79B]'>Get Early Access To Wellness</p>
          <p>Be the first to experience  health,care,and <br></br>exclusive MomPharmacy offers.</p>
          <p>join our early access list and recieve exclusive discounts,personalized offers,and early updates when we launch!</p>
          <div className='flex justify-around'>
            <input type='email' placeholder='enter your email' className=' outline-1 outline-[#00A79B] rounded-sm'/>
            <button type="submit" className=' outline-1 outline-[#00A79B]  bg-[#00A79B] text-white rounded-sm  hover:bg-[#FADB14]  hover:text-black p-1'>Submit</button>
          </div>
          </div>   
          <div className='relative  right-6 -top-2' onClick={()=>{setEarlyAccess(false)}}>
             <ImCancelCircle className='text-[#00A79B] w-10 h-10 bg-white rounded-full outline-1 outline-[#00A79B] cursor-pointer ' />
            </div>     
            </div>
          
      </motion.div>}
    </AnimatePresence>
  )
}

export default EarlyAccessForm