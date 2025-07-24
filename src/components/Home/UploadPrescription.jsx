import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { MdUploadFile } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

const UploadPrescription = ({setShowUploadPrescription , showUploadPrescription}) => {
  return (
    <AnimatePresence mode='wait'>
    {showUploadPrescription &&<motion.div initial={{x:-1000 , display:"none"}} animate={{x:0 , display:"flex"}} transition={{duration:0.2}}  exit={{x:-1000}} className='flex fixed h-screen w-screen justify-center items-center' >
        <div className="flex flex-row gap-12 outline-1 w-220  items-center justify-center rounded-xl bg-white fixed p-5 outline-[#00A79B]">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[#00A79B] text-2xl">Fill Prescription Form</h1>
              <p>
                upload prescription and <br></br>give us few details then
                <br></br> leave everything to us
              </p>
            </div>
            <div className="bg-[#00A79B1A] w-60 h-40 flex items-center justify-center flex-col rounded-2xl hover:bg-[#FADB14]">
              <div className="bg-[#00A79B] text-white rounded-sm p-1">
                <MdUploadFile />
              </div>
              <p className="text-[#00A79B]">upload prescription</p>
            </div>

            <div className="outline-1 w-60 rounded-sm flex items-center justify-around text-[#00A79B]">
              <CiLocationOn />
              <p className="text-black">enter your address</p>
              <MdOutlineMyLocation />
            </div>
          </div>
          {/* forms */}
          <div className="flex flex-col gap-7">
            <div className="flex gap-5">
              <div className="flex flex-col gap-3">
                <p className='text-[#00A79B]'>your name*</p>
                <input type="text" placeholder="name" className="outline-1 w-50 rounded-sm outline-[#00A79B]"/>
                <input type="dropdown" placeholder="select gender" className="outline-1 w-50 rounded-sm outline-[#00A79B] "/>
              </div>
              <div className="flex flex-col gap-3">
               <p className="text-[#00A79B]"> your contact number*</p>
                <input type="text" placeholder="+91" className="outline-1 w-50 rounded-sm outline-[#00A79B] "/>
                <input type="text" placeholder="your age" className="outline-1 w-50 rounded-sm outline-[#00A79B] "/>
              </div>
              <button className='text-[#00A79B] cursor-pointer w-10 h-10 relative -top-8 -right-17 bg-white rounded-full'  onClick={()=>setShowUploadPrescription(false)}>
                <ImCancelCircle className='w-10 h-10'/>
              </button>
            </div>

            {/* subject */}

            <div className="flex flex-col gap-3">
              <h1 className="whitespace-pre text-[#00A79B]">Your subject*                                                          20 words</h1>
              <input type="text-area" placeholder="" className="outline-1 w-105 rounded-sm outline-[#00A79B] "/>
              <h1 className="whitespace-pre text-[#00A79B]">additional details*                                                  100 words</h1>
              <input type="text-area" placeholder="write message here" className="outline-1 w-105 h-15 rounded-sm outline-[#00A79B] "/>
               
            </div>
                <div className='flex flex-row justify-between'>
                 <button className=' outline-1 rounded-sm hover:bg-[#00A79B] w-15 outline-[#00A79B] '>reset</button>
                 <button className='outline-1 rounded-sm bg-[#00A79B] hover:bg-[#FADB14] w-15 outline-[#00A79B] '>submit</button>
               </div>
          </div>
         </div>
        </motion.div>}
        </AnimatePresence>
  )
}

export default UploadPrescription