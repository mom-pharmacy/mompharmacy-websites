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
        //   initial={{ y: 0 }}
        //   animate={{ y: "-100%",}}
        // //   exit={{ y: "-100%" }}
        //   transition={{delay:3}}
          className="bg-teal-600 h-screen "
        >
          <div className="flex justify-between p-5">
            <div>
              <img src={Logo} className="w-25 h-25" />
            </div>
            <div className=" text-center">
              <img src={Image} className="w-8 h-7 relative lg:top-4 lg:left-70 " />
              <p className="bg-white text-center px-3 py-3 lg:px-10 lg:py-2 rounded-2xl lg:text-2xl text-xl font-bold">
                a healthcare solution
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mr-35">
            <motion.img
              src={On}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 50, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              className="w-30 h-auto "
            />
          </div>

          <div className='flex font-["Fredoka_One"] justify-around items-center'>
            <motion.img
              src={MedicineAndMore}
              className="w-60 h-35 relative top-20 left-20"
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 70, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            />

            <motion.p
              animate={{ scale: 3 }}
              transition={{ duration: 0.5 }}
              className="text-white text-4xl"
            >
              mom
            </motion.p>

            <motion.img
              src={Minutes}
              className="w-70 h-auto relative right-25 bottom-10"
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
