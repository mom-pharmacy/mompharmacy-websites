import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Button({ title = 'Button', link = '/', icon = null, onClick }) {
  const isButtonOnly = (onClick && (!link || link === '#'));
  if (isButtonOnly) {
    return (
      <motion.button
        className="min-w-[120px] max-w-[280px] h-[48px] px-4 bg-white text-black border-2 border-[#00a79b] hover:border-none rounded-[104px]
                   whitespace-nowrap overflow-hidden text-ellipsis text-sm font-semibold transition-all 
                   duration-300 cursor-pointer flex flex-row items-center justify-center gap-2"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.1,
          cursor: 'pointer',
          backgroundColor: '#fadb14',
          ease: 'easeOut',
        }}
        whileTap={{ scale: 0.93 }}
        type="button"
        onClick={onClick}
      >
        {title}
        {icon && <span className='text-lg'>{icon}</span>}
      </motion.button>
    );
  }
  return (
    <Link to={link} onClick={onClick}>
      <motion.button
        className="min-w-[120px] max-w-[280px] h-[48px] px-4 bg-white text-black border-2 border-[#00a79b] hover:border-none rounded-[104px]
                   whitespace-nowrap overflow-hidden text-ellipsis text-sm font-semibold transition-all 
                   duration-300 cursor-pointer flex flex-row items-center justify-center gap-2"
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.1,
          cursor: 'pointer',
          backgroundColor: '#fadb14',
          ease: 'easeOut',
        }}
        whileTap={{ scale: 0.93 }}
        type="button"
      >
        {title}
        {icon && <span className='text-lg'>{icon}</span>}
      </motion.button>
    </Link>
  );
}

export default Button;