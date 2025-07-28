import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { MdUploadFile } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const UploadPrescription = ({setShowUploadPrescription , showUploadPrescription}) => {
  return (
    <AnimatePresence mode='wait'>
    {showUploadPrescription &&<motion.div initial={{x:-1000 , display:"none"}} animate={{x:0 , display:"flex"}} transition={{duration:0.2}}  exit={{x:-1000}} className='flex fixed h-auto w-screen justify-center z-1700  ' >
        <div className="xl:overflow-auto xl:overflow-visible md:overflow-y-auto overflow-y-auto md:h-[500px] xl:h-auto h-[500px] border-8  border-[#00A79B]   outline-1 lg:w-[60%] md:w-[80%] w-90 items-center justify-center rounded-4xl bg-white fixed outline-[#00A79B]  ">
          <div className=' xl:grid xl:grid-cols-3 xl:gap-x-10 xl:px-10 xl:py-5 md:px-10 md:py-5 px-5 py-5'>
            <div className="flex flex-col xl:gap-15 md:gap-10 gap-5 xl:items-center">
            <div className='flex flex-col gap-3'>
              <h1 className="text-[#00A79B] xl:text-2xl md:text-3xl text-2xl font-bold ">Fill Prescription Form</h1>
              <p className='text-xl'>
                upload prescription and give us few details then leave everything to us
              </p>
            </div>
 
            <div className='flex flex-col gap-5'>
              <div className="bg-[#00A79B1A]  xl:h-40 md:h-40 h-20 flex items-center justify-center xl:flex-col md:flex-col flex-row gap-2 rounded-xl hover:bg-[#FADB14] border-1 border-[#00A79B] cursor-pointer" >
              <div className="bg-[#00A79B] text-white rounded-sm p-1 size-10">
                <MdUploadFile className='size-8'/>
              </div>
              <p className="text-[#00A79B] text-xl font-bold">upload prescription</p>
            </div>

            <div className="outline-1 rounded-md flex items-center justify-between px-2 text-[#00A79B]  ">
              <CiLocationOn className='size-8 '/>
              <input type="text" placeholder='enter your address' className='outline-1 outline-[#00A79B] outline-none text-black '/>
              <div className='border-1 rounded-xl px-2 py-2 bg-[#00A79B] text-white hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-65'>
                <MdOutlineMyLocation className='size-5 '/>
              </div>
            </div>
            </div>
          </div>
          {/* forms */}
          <div className="grid col-span-2 gap-y-5 xl:mt-0 md:mt-8 mt-8">
            <div className="xl:grid xl:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1  xl:gap-x-5 md:gap-x-5 gap-5">
              <div className="flex flex-col  gap-5">
                <p className='text-[#00A79B] text-xl'>your name*</p>
                <input type="text" placeholder="name" className="outline-1  rounded-sm outline-[#00A79B] px-2 py-3 "/>
                {/* <input type="dropdown" placeholder="select gender" className="outline-1 w-50 rounded-sm outline-[#00A79B] "/> */}
                <select className='outline-1 outline-[#00A79B] px-2 py-3  rounded-sm' name="select gender" placeholder="select gender ">
                  <option value="" className=''>select gender</option>
                   <option value="">male</option>
                    <option value="">female</option>
                     <option value="">not prefarrable</option>
                </select>
              </div>
              <div className="flex flex-col gap-5">
               <p className="text-[#00A79B] text-xl"> your contact number*</p>
                <input type="text" placeholder="+91" className="outline-1 rounded-sm outline-[#00A79B] px-2 py-3  "/>
                <input type="text" placeholder="your age" className="outline-1  rounded-sm outline-[#00A79B] px-2 py-3 "/>
              </div>
              <button className='text-[#00A79B] cursor-pointer w-10 h-10 relative xl:-top-55 xl:-right-140 md:-top-145  md:-right-125 -top-175 -right-70 bg-white rounded-full hover:bg-[#FADB14] hover:text-black '  onClick={()=>setShowUploadPrescription(false)}>
                <ImCancelCircle className='xl:w-10  md:w-10 w-6 h-10 '/>
              </button>
            </div>

            {/* subject */}

            <div className="flex flex-col gap-3 -mt-10">
              <div className='flex flex-row justify-between '>
                <h1 className="whitespace-pre text-[#00A79B] text-xl">Your subject*</h1>
              <h1 className="whitespace-pre text-gray-400 text-xl">20 words</h1>
              </div>
              <input type="text-area" placeholder="" className="outline-1 px-2 py-3 rounded-sm outline-[#00A79B] "/>
               <div className='flex flex-row justify-between '>
                <h1 className="whitespace-pre text-[#00A79B] text-xl">additional details*</h1>
              <h1 className="whitespace-pre text-gray-400 text-xl">100 words</h1>
              </div>
              <input type="text-area" placeholder="write message here" className="outline-1 px-2 py-3 rounded-sm outline-[#00A79B] "/>
               
            </div>
                <div className='flex flex-row justify-between'>
                 <button type="reset" value="reset" className=' outline-1 rounded-sm text-[#00A79B] outline-[#00A79B] hover:bg-[#00A79B] hover:text-white px-4 py-1 '>reset</button>
                 <button type='submit' className='outline-1 rounded-sm bg-[#00A79B] text-white outline-[#00A79B] hover:bg-[#FADB14] hover:text-black px-4 py-1'>Submit</button>
               </div>
               
          </div>
         </div>
         
          </div>
        </motion.div>}
        </AnimatePresence>
  )
}

export default UploadPrescription