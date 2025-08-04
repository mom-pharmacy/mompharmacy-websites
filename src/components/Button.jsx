import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPrescription } from "react-icons/fa";


function Button({ title = '', link = null, onClick= null, icon = null }) {
  return (
    <Link to={link} onClick={onClick}>
      <motion.button
        className="min-w-[4px] max-w-[80px] h-[30px] lg:min-w-[100px] lg:max-w-[280px] lg:h-[38px] p-1 py-1 md:p-3 md:py-6 lg:p-3 lg:py-6 bg-white text-[#444444] border-2 border-white rounded-full
                   whitespace-nowrap overflow-hidden text-ellipsis text-xs lg:text-lg  md:text-lg transition-all duration-300 
                   cursor-pointer flex flex-row items-center justify-center gap-1 font-['fredoka_one'] "
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          
          cursor: 'pointer',
          backgroundColor: '#fadb14',
    
          ease: 'easeOut',
        }}
        whileTap={{ scale: 0.93 }}
      >

        {title}
        {icon && <span className='rounded-full bg-black text-white ml-2 p-1'>{icon}</span>}
      </motion.button>
    </Link>
  );
}

export default Button;