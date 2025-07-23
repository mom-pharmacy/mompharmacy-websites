import React from 'react';
import { motion } from 'framer-motion';
import ImageCapsule from '../../assets/AboutUs/capsule.png'
import '@fontsource/fredoka-one';
import '@fontsource/dm-sans';

// circles
function ConcentricCircle() {
    return (

        <div className='w-8 h-8 rounded-full border-2 border-teal-500 flex items-center justify-center'>
            <div className='w-5 h-5 bg-teal-500 rounded-full'></div>
        </div>
    );
}

// main component 

function Mission() {
    return (
        <>
            <div className='flex justify-between items-center px-20'>

                <div className="flex items-center gap-4">
                    <ConcentricCircle />
                    <motion.h1 className="font-['Fredoka_One'] text-2xl md:text-4xl lg:text-6xl font-bold text-[#00a99d]"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>
                        our mission
                    </motion.h1>
                </div>

                {/* Group 2: Vision Text + Circle */}
                <div className="flex items-center gap-4">
                    <motion.h1 className="font-['Fredoka_One'] text-2xl md:text-4xl lg:text-6xl font-bold text-[#00a99d]"
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>
                        our vision
                    </motion.h1>
                    <ConcentricCircle />
                </div>
            </div>

            <div className='flex justify-between flex-row'>

                {/* Mission code */}
                <div className='flex flex-col items-start p-5 ml-20'>
                    <motion.div
                        className='relative bg-white w-auto h-auto rounded-lg border-2 border-dashed border-[#00a99d] p-4 hover:border-solid'
                        whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0,0,0,0.6)' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>

                        <p className="text-[#444444] font-['DM_Sans']">to bridge the gap between people and essential healthcare by <br />
                            delivering affordable, on-demand medication - with the speed<br />
                            of innovation and the compassion of family - ensuring that<br />
                            every home is just moments away from well-being.</p>

                        <img src={ImageCapsule}
                            className='absolute bottom-[-130px] right-[50px] transform translate-x-1/2 w-[550px] h-[250px] md:w-32'
                            alt='capsule' />
                    </motion.div>
                </div>




                {/* vision code */}
                <div className='flex flex-col p-5 mr-20'>
                    <motion.div className='relative bg-white w-auto h-auto rounded-lg border-2 border-dashed border-[#00a99d] p-4 hover:border-solid overflow-visible'
                        whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0,0,0,0.6)' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}>

                        <p className="text-[#444444] font-['DM_Sans']">
                        to become the most trusted global name in doorstep healthcare,<br />
                         delivering not just medicines, but peace of mind, through <br />
                         technology that feels like a mother's care: fast, reliable,<br /> 
                        and full of heart, making exceptional wellness accessible.<br /> </p>

                        <img
                            src={ImageCapsule}
                            className='absolute bottom-[-130px] right-[45px] transform translate-x-1/2 w-[550px] h-[250px] md:w-32'
                            alt='capsule' />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Mission;
