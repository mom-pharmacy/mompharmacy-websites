import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Button({ title = 'Button', link = null, icon = null }) {
  const [isClicked, setIsClicked] = useState(() => {
    const saved = localStorage.getItem('savedButtonState');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('savedButtonState', isClicked);
  }, [isClicked]);

  const handleClick = () => {
  
      setIsClicked((prev) => !prev);
      console.log(`${isClicked?"true":"false"}`)
    

  };

  return (

      <motion.button
      onClick={handleClick}
        className={`min-w-[120px] max-w-[280px] h-[48px] px-4 border-2 border-[#00a79b] hover:border-none rounded-[104px]
                    ${isClicked ? 'bg-[#fadb14]-500' : 'bg-[#00a79b]-300 '} `}
                  
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
      >

       {isClicked ? 'Saved!' : title}
        {icon && <span className='text-lg'>{icon}</span>}
      </motion.button>
    
  );
}

export default Button;
