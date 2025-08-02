// 'use client';
// import { useTransform , useScroll , motion } from 'framer-motion';
// import React ,{useRef} from 'react'

// const OurStory = () => {

//     const container = useRef(null);

// const {scrollYProgress} = useScroll({
//     target: container ,
//     offSet:['start end' , ' end start']
// })

// const scale4 = useTransform(scrollYProgress , [0,0.8,1] , [1,3,7])
// const scale5 = useTransform(scrollYProgress , [0,0] , [0,1])
// const scale6 = useTransform(scrollYProgress , [0,0] , [0,1])

//   return (
//     <div ref={container} className=' w-screen  rounded-4xl shadow-sm shadow-[#00A79B]  flex justify-center items-center relative z-[-10] m-auto  pt-10 overflow-x-clip' >
//         <div className=' w-screen   top-0  mb-[100vh]  '>
//             <motion.div style={{scale:scale4}} className='sticky bg-white w-screen top-0 absolute '>
//                 <div  className=' h-[30vh]   '>
//                     <p className='flex justify-center items-center text-[250px] text-[#00A79B] '><motion.h1  style={{scale:scale5}}>st</motion.h1><span >
//                         <img src="/Home/ourStory.jpg" alt="ourstory image" className='h-[250px] w-[250px] rounded-full fill blur-[0.5px] object-fit'></img>
//                         </span><motion.h1  style={{scale:scale6}} >ry</motion.h1></p>
//                 </div>
//             </motion.div>
//         </div>
//     </div>
//   )
// }

// export default OurStory


import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router';

function OurStory() {
    useEffect(() => {
        AOS.init({
            duration: 200,
            once: true,
            debounceDelay: 10,
            throttleDelay: 99,
            offset:50,
            delay: 10,
            easing: 'ease', 
            mirror: true, 
            anchorPlacement: 'top-bottom',
        });
    }, []);
    return (

    <div data-aos="zoom-in-up" data-aos-offset="-50"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-easing="ease-in-quad"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <div class="relative xl:w-[90%] xl:sm-auto  xl:h-screen md:h-80 h-60 mx-auto  md:mt-10 " >
                <img class="xl:w-screen xl:h-screen h-60 md:h-80 md:w-screen object-cover rounded-md" src="/Home/ourStory.jpg" alt="team image" />
                <div class="absolute inset-0 bg-black opacity-60 rounded-md"></div>
                <div class="absolute inset-0 flex items-center justify-center xl:px-20 md:px-20 px-6 ">
                    <h2 class="text-white xl:text-[45px] md:text-[30px] font-['fredoka_one'] text-xl text-center">mom pharmacy is where speed meets soul delivering essential medicines under 10 minutess </h2>
                </div>
                <div className='z-[10] xl:mt-[-20px] md:mt-[-20px] mt-[-30px] flex items:center justify-center'>
                    <button class="relative inline-flex xl:px-15 px-10 py-3 xl:py-3 md:py-3 md:px-15 xl:text-2xl shadow-xs shadow-[#00A79B] items-center justify-center  overflow-hidden  font-bold tracking-tighter text-white bg-[#00A79B] rounded-2xl group ">
                        <span class=" absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FADB14] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class=" absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-[#FADB14] from-transparent via-transparent to-[#00A79B]"></span>
                       <Link to="/about"> <span class="relative ">our story</span></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurStory
