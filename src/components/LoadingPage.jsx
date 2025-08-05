// import { scale } from 'framer-motion'
// import React from 'react'
// import { motion } from "framer-motion";
// import Logo from "../../public/Home/logo.jpg";
// import Image from '../assets/heart.png';
// import MedicineAndMore from '../assets/medicineandmore.png';
// import On from '../assets/on.png';
// import Minutes from '../assets/minutes.png';
// const LoadingPage = () => {
//   return (
//     <div className="bg-teal-600 h-screen ">
//       <div className="flex justify-between p-5">
//         <div>
//           <img src={Logo} className="w-25 h-25" />
//         </div>
//         <div className=" text-center">
//           <img src={Image} className="w-8 h-7 relative top-4 left-70 " />
//           <p className="bg-white text-center px-10 py-2 rounded-2xl text-2xl font-bold">
//             a healthcare solution
//           </p>
//         </div>
//       </div>
//       <div className='flex font-["Fredoka_One"] justify-center items-center'>
//         <motion.p
//           animate={{ scale: 3 }}
//           transition={{ duration: 0.5 }}
//           className="text-white text-4xl py-30 relative left-90"
//         >
//           mom
//         </motion.p>

//         <motion.img
//           src={MedicineAndMore}
//           className="w-60 h-40 relative top-20 right-20"
//             initial={{ x: 0, opacity: 0 }}
//             animate={{ x: 40, opacity: 1 }}
//             transition={{ duration: 0.5, delay:0.5, ease: "easeOut" }}
//         />
//         <motion.img
//           src={On}
//           className="w-35 h-35 relative bottom-30 right-15"
//           initial={{ y: -60, opacity: 0 }} 
//           animate={{ y: 30, opacity: 1 }}
//           transition={{ duration: 0.5,delay:1, ease: "easeOut" }}
//         />
//         <motion.img
//           src={Minutes}
//           className="w-70 h-auto relative left-20 bottom-10"
//           initial={{ x: 60, opacity: 0 }}
//           animate={{ x: -10, opacity: 1 }}
//           transition={{ duration: 0.5, delay:1.5, ease: "easeOut" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default LoadingPage;



import { scale } from "framer-motion";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/Home/logo.jpg";
import Image from "../assets/heart.png";
import MedicineAndMore from "../assets/medicineandmore.png";
import On from "../assets/on.png";
import Minutes from "../assets/minutes.png";
const LoadingPage = (isVisible) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
            // initial={{ y: 0 }}
            // animate={{ y: "-100%",}}
          //   exit={{ y: "-100%" }}
            // transition={{delay:3}}
          className="bg-teal-600 h-screen "
        >
          <div className="flex justify-between p-3 lg:p-5 ">
            <div>
              <img
                src={Logo}
                className="w-20 h-20 lg:w-25 lg:h-25 2xl:w-60 2xl:h-60"
              />
            </div>
            <div className=" text-center">
              <img
                src={Image}
                className="w-8 h-7 right-20 relative xl:top-4 xl:left-70 md:left-30 2xl:w-15 2xl:h-15 2xl:left-1 md:top-3 left-30 top-3 lg:top-2 lg:right-180"
              />
              <p className="bg-white text-center px-2 py-2 lg:px-10 lg:py-2 rounded-2xl 2xl:p-8 2xl:text-5xl lg:text-2xl xl:text-2xl text-sm font-bold">
                a healthcare solution
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mr-35 mt-70 lg:mt-0">
            <motion.img
              src={On}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="lg:w-30 w-10 md:w-20 h-auto relative xl:w-35 bottom-7 left-15 lg:bottom-0 lg:left-0 md:left-5"
            />
          </div>

          <div className='flex font-["Fredoka_One"] justify-around items-center'>
            <motion.img
              src={MedicineAndMore}
              className="lg:w-60 xl:w-70 lg:h-35 h-auto w-25 relative lg:top-20 lg:left-20 top-8 right-10 md:left-1 md:top-13
               md:w-40"
              initial={{ x:   0, opacity: 0 }}
              animate={{ x: 70, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            />

            <motion.p
              animate={{ scale: 3 }}
              transition={{ duration: 0.5 }}
              className="text-white lg:text-4xl text-sm md:text-2xl xl:text-3xl"
            >
              mom
            </motion.p>

            <motion.img
              src={Minutes}
              className="lg:w-70 w-25 md:w-45 h-auto relative lg:right-25 xl:w-80 lg:bottom-10 bottom-4 left-3 md:-left-7 lg:-left-25"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: -30, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
