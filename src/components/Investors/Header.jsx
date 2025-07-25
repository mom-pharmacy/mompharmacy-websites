import React from 'react'
import '@fontsource/fredoka-one';
import Button from '../Buttons/Button';
import GlowButton from '../Buttons/GlowButton';
import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';

function Header() {
    return (
        <div className='bg-[#00A79B] h-auto'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className="text-[clamp(2.5rem,8vw,5.625rem)] text-white font-['Fredoka_One']">become a investor</h1>

                <motion.div className='flex flex-row gap-3'
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3, ease: 'easeOut'}}>
                    <h2 className="text-[clamp(2.5rem,8vw,5.625rem)] text-[#FADB14] font-['Fredoka_One']">@mom</h2>
                    <h3 className="text-[clamp(2.5rem,8vw,5.625rem)] text-white font-['Fredoka_One']">pharmacy</h3>
                </motion.div>
                
                <div className='flex flex-row gap-5 mt-10'>
               <GlowButton title="invest in us" link="#form" />
                <Button title="view pitch deck" link='/home' /> 
                </div>
                <div id="form" className='m-25'>
                <EnquiryForm />
                </div>
            </div>
        </div>
    )
}

export default Header