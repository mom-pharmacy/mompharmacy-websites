import React, { useRef, useState } from 'react';
import CardComp from './CardComp';
import { motion } from 'framer-motion';

const TeamPopup = ({state , setState}) => {
  

        console.log("....................uvjadbdsjsda.........lnkcfnkndsl;clicke",state)

  const sectionRef = useRef(null);
  const handleOpen = () => {
    setOpen(true);

    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    console.log("button clciked .. on opencard comp ", state)
    setState(false)
    document.body.style.overflow = 'auto';
  };

  return (

    <div className="relative min-h-screen bg-gray-100">
      {/* Trigger Button */}
      {/* <div className="p-6 h-1000 w-1000 bg-amber-200">
        <button
          onClick={handleOpen}
          className="px-6 py-3 bg-teal-600 text-white rounded-xl shadow hover:bg-teal-700 transition"
        >
          Meet the Team
        </button>
      </div> */}

      {/* Team Section */}
    {state && (
        <motion.div initial={{x:-1000 , display:"none"}} animate={{x:0 , display:"flex"}} transition={{duration:0.2}}  exit={{x:-1000}}
          ref={sectionRef}
          className="fixed inset-0 z-50 h-200 m-0   bg-opacity-5 flex justify-center items-start overflow-y-auto"
        >
          <div className="w-screen  max-w-5xl mx-auto p-6 bg-white rounded-2xl mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className=' ml-90'>
              <h2 className="text-3xl font-bold text-teal-700 m-3">departments</h2>
               <p className="text-center text-gray-600 mb-3">meet the team</p>
              </div>

              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-red-500 text-xl"
              >
                ✕
              </button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">

              <CardComp  name="Uday" designation="Developer" />
              <CardComp  name="Adarsh" designation="Developer" />
              <CardComp  name="Poojitha" designation="Developer" />
              <CardComp  name="Pushpa" designation="Developer" />
              <CardComp  name="Chandu" designation="Developer" />
              <CardComp  name="Sai" designation="Tester" />
               <CardComp  name="name" designation="designation" />
                <CardComp  name="name" designation="designation" />

              
              
             
              
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TeamPopup;