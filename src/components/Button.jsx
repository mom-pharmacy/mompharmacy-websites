import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPrescription } from "react-icons/fa";


function Button({ title = 'hii', link = null, onClick= null, icon = null }) {
  return (
    <Link to={link} onClick={onClick}>
      <motion.button
        className="min-w-[120px] max-w-[280px] h-[48px] p-7 py-7 bg-white text-[#444444] border-2 border-white rounded-full
                   whitespace-nowrap overflow-hidden text-ellipsis text-xl transition-all duration-300 
                   cursor-pointer flex flex-row items-center justify-center gap-2 font-['fredoka_one']"
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
        {icon && <span className='text-1 rounded-full bg-black text-white p-1.5'>{icon}</span>}
      </motion.button>
    </Link>
  );
}

export default Button;