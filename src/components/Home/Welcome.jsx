import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";
import { AnimatePresence } from 'framer-motion';

const Welcome = ({welcome,setWelcome}) => {
    
  return (  
    <AnimatePresence mode='wait'>
       {welcome && <motion.div initial={{y:1000,display:'none'}} animate={{y:0,display:'flex'}} transition={{duration:0.4}} exit={{y:1000}} className='flex  h-screen w-screen fixed left-0 top-55'>
        <div className='flex flex-row'>
        <div className='w-100 h-60 bg-white ouline-1  flex flex-col gap-2 p-6 rounded-xl '>
          <p className='text-2xl text-[#00A79B] flex items-center'>good news! we are in your area</p>
          <p className='flex flex-col items-center'><p>we are currently serving in your location</p> madhapur,hyderabad,telangana 500081</p>
          <div>
                <div className='flex flex-col items-center'>
                   <p> want to check a different location?</p>
                <p>enter another pin code below to explore service</p>
                <p>availability</p>
            </div>

          <div className='flex justify-around'>
            <input type='text' placeholder='enter area pincode' className=' outline-1 outline-[#00A79B] rounded-sm'/>
            <button type="submit" className=' outline-1 outline-[#00A79B]  bg-[#00A79B] text-white rounded-sm  hover:bg-[#FADB14]  hover:text-black p-1'>Check availability</button>
          </div>
          </div>  
          </div>
          <div className='relative  right-6 -top-2'>
             <ImCancelCircle className='text-[#00A79B] w-10 h-10 bg-white rounded-full outline-1 outline-[#00A79B] cursor-pointer hover:bg-[#FADB14] hover:text-black ' onClick={()=>{setWelcome(false)}} />
            </div>     
            </div>
          
      </motion.div>}
    </AnimatePresence>
  )
}
export default Welcome