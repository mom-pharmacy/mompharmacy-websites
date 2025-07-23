import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blossomVariants = {
  initial: {
    scale: 0,
    borderRadius: '50%',
  },
  hover: {
    scale: 1,
    borderRadius: '16px',
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const buttonVariants = {
  initial: {
    color: '#FFFFFF',
  },
  hover: {
    color: '#000000',
    scale: 1.1,
  },
};

function Button({ title = 'submit', link = '/', icon = null }) {
  return (
    <Link to={link}>
      <motion.button
        className="relative flex flex-row items-center justify-center min-w-[120px] max-w-[280px] h-[48px] px-4 bg-teal-500 text-white rounded-2xl
                   overflow-hidden text-lg font-semibold cursor-pointer"
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.90 }}
        variants={buttonVariants}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#FADB14] z-0"
          style={{ transformOrigin: 'bottom' }}
          variants={blossomVariants}
        />

        <span className="relative z-10 flex items-center justify-center gap-2">
          {title}
          {icon && <span className='text-lg'>{icon}</span>}
        </span>
      </motion.button>
    </Link>
  );
}

export default Button;