import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";
import { AnimatePresence } from 'framer-motion';

const Welcome = ({welcome,setWelcome}) => {
    
  return (  
    <AnimatePresence mode='wait'>
       {welcome && <motion.div initial={{y:1000,display:'none'}} animate={{y:0,display:'flex'}} transition={{duration:0.4}} exit={{y:1000}} className='flex  h-screen w-screen fixed left-0 top-55'>
        <div className='flex flex-row '>
        <div className='xl:w-140 xl:h-70 w-90 h-70 md:w-140 md:h-70 shadow-2 shadow-xl  justify-center bg-white ouline-1  flex flex-col gap-2 xl:px-6 xl:py-6 md:px-6 md:py-6 px-2 py-2 xl:m-10 md:m-10 rounded-4xl border-8  border-[#00A79B]  '>
          <p className='xl:text-3xl md:text-3xl text-xl font-bold text-[#00A79B] text-center'>good news! we are in your area</p>
          <p className='text-center text-md  font-semibold '><p>we are currently serving in your location</p> madhapur,hyderabad,telangana 500081</p>
          <div>
                <div className='flex flex-col text-center text-md  '>
                   <p > want to check a different location?</p>
                <p>enter another pin code below to explore service</p>
                <p>availability</p>
            </div>

          <div className='flex justify-between xl:gap-5 md:gap-5 gap-2 mt-3'>
            <input type='text' placeholder='enter area pincode' className=' outline-1 outline-[#00A79B] rounded-sm xl:px-3 md:px-3 xl:py-3 md:py-3 py-2  xl:w-80 md:w-80 '/>
            <button type="submit" className=' outline-1 outline-[#00A79B]  bg-[#00A79B] text-white rounded-sm  hover:bg-[#FADB14]  hover:text-black xl:px-4 md:px-4 xl:py-2 md:py-2 py-2'>Check availability</button>
          </div>
          </div>  
          </div>
          <div className='relative  xl:right-20 md:right-20 right-10 xl:top-10 md:top-10 top-0'>
             <ImCancelCircle className='text-[#00A79B] w-10 h-10 bg-white rounded-full outline-1 outline-[#00A79B] cursor-pointer hover:bg-[#FADB14] hover:text-black ' onClick={()=>{setWelcome(false)}} />
            </div>     
            </div>
          
      </motion.div>}
    </AnimatePresence>
  )
}
export default Welcome