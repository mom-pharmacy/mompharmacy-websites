'use client';
import { useTransform , useScroll , motion } from 'framer-motion';
import React ,{useRef} from 'react'

const OurStory = () => {

    const container = useRef(null);

const {scrollYProgress} = useScroll({
    target: container ,
    offSet:['start end' , ' end start']
})

const scale4 = useTransform(scrollYProgress , [0,0.8,1] , [1,4,6])
const scale5 = useTransform(scrollYProgress , [0,0] , [0,1])
const scale6 = useTransform(scrollYProgress , [0,0] , [0,1])

  return (
    <div ref={container} className=' w-[80%]  rounded-4xl shadow-sm shadow-[#00A79B]  flex justify-center items-center relative z-[-10] m-auto  pt-30 overflow-x-clip' >
        <div className=' w-screen   top-0  mb-[100vh]  '>
            <motion.div style={{scale:scale4}} className='sticky bg-white w-screen top-0 absolute '>
                <div  className=' h-[30vh]   '>
                    <p className='flex justify-center items-center text-[250px] text-[#00A79B] '><motion.h1  style={{scale:scale5}}>st</motion.h1><span >
                        <img src="/Home/ourStory.jpg" alt="ourstory image" className='h-[250px] w-[250px] rounded-full fill placeholder-blur object-fit'></img>
                        </span><motion.h1  style={{scale:scale6}} >ry</motion.h1></p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default OurStory