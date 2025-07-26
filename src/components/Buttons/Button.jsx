import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Button({ title = 'Button', link = null, onClick= null, icon = null }) {
  return (
    <Link to={link} onClick={onClick}>
      <motion.button
        className="min-w-[120px] max-w-[280px] h-[48px] px-4 bg-white text-black border-2 border-white rounded-[104px]
                   whitespace-nowrap overflow-hidden text-ellipsis text-lg transition-all duration-300 
                   cursor-pointer flex flex-row items-center justify-center gap-2 font-['Fredoka_one']"
                  
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.1,
          cursor: 'pointer',
          backgroundColor: '#fadb14',
          border: '4px solid #00a79b',
          ease: 'easeOut',
        }}
        whileTap={{ scale: 0.93 }}
      >

        {title}
        {icon && <span className='text-lg'>{icon}</span>}
      </motion.button>
      </Link>
  );
}

export default Button;