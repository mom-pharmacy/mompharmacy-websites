import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {motion} from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";

const EarlyAccessForm = ({earlyaccess,setEarlyAccess}) => {
  return (
 
    
    <AnimatePresence mode='wait'>
      {earlyaccess &&<motion.div initial={{y:1000,display:'none'}} animate={{y:0,display:'flex'}} transition={{duration:0.4}} exit={{y:1000}} className='flex  h-screen w-screen fixed left-0 xl:top-65 md:top-65 top-75'>
        <div className='flex flex-row '>
        <div className='xl:w-140 xl:h-70 w-90 h-70 md:w-140 md:h-70 bg-white shadow-2 shadow-xl flex flex-col  justify-center gap-2 px-5 py-2 xl:m-10 md:m-10  rounded-4xl   border-8  border-[#00A79B] '>
          <p className='xl:text-3xl md:text-3xl text-xl font-bold text-[#00A79B] text-start'>get early access to wellness</p>
          <p className='xl:text-2xl md:text-2xl text-md  font-semibold text-start'>be the first to experience  health,care,and exclusive mompharmacy offers.</p>
          <p className='text-start'>join our early access list and recieve exclusive discounts,personalized offers,and early updates when we launch!</p>
          <div className='flex justify-between gap-5'>
            <input type='email' placeholder='enter your email' className=' outline-1 outline-[#00A79B] rounded-sm px-2 py-3 w-100'/>
            <button type="submit" className=' outline-1 outline-[#00A79B]  bg-[#00A79B] text-white rounded-sm  hover:bg-[#FADB14]  hover:text-black px-4 py-2'>Submit</button>
          </div>
          </div>   
          <div className='relative  xl:right-20 md:right-20 right-10 xl:top-10 md:top-10 top-0' onClick={()=>{setEarlyAccess(false)}}>
             <ImCancelCircle className='text-[#00A79B] w-10 h-10 bg-white rounded-full outline-1 outline-[#00A79B] cursor-pointer hover:bg-[#FADB14] hover:text-black  ' />
            </div>     
            </div>
          
      </motion.div>}
    </AnimatePresence>
  )
}

export default EarlyAccessForm