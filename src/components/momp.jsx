import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Buttons/BorderButton";
import logo from '../../public/Home/logo.jpg';
import Heart from '../assets/momp/dotheart.png';
import Clock from '../assets/momp/clock.png'
import rectangle1 from '../assets/momp/mainImg.png'
import img1 from '../assets/momp/img1.png'
import img2 from '../assets/momp/bloodDonor.png'
import img3 from '../assets/momp/location.png'
import img4 from '../assets/momp/prescription.png'
import img5 from '../assets/momp/map.png'
import img6 from '../assets/momp/icon.png'
import Footer from "./Home/Footer";
export default function JobLanding() {
const[isHover, setHover]=useState(false)


  return (
    <div className="bg-[#00a79b] h-full w-full inline-block pb-20">
      <motion.div className="px-2 ,py-2 flex justify-between">
        <div className="py-5 px-10">
          <Button title="back" link="#" />
        </div>

        <motion.div initial={{y:"-20%"}} animate={{y:0}} transition={{duration:1}} className="flex" >
          <p className="font-family:Fredoka text-xl rounded-bl-2xl rounded-br-2xl px-10 mb-6 py-3 bg-white inline">
            be among first few users to try our app and gives us your valuable
            feedback &nbsp;
            <span className="text-[#00a79b] text-xl inline">try now!</span>
          </p>
        </motion.div>
        <div className="px-10 py-5">
          <button className="bg-white rounded-4xl px-5 py-1 h-9 flex justify-center">
            english
          </button>
        </div>
      </motion.div>
      <div className="flex justify-between ">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 50,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >
          <div className="flex py-30">
            <div>
              <img src={logo} alt="logo" className="w-45 h-45" />
            </div>
            <div>
              <p className="text-7xl text-white font-['Fredoka_One'] py-10 px-5">
                pharmacy
              </p>
            </div>
          </div>
          <div className="flex justify-between bg-white h-14 w-150 relative bottom-25 left-25 px-5 py-1 rounded-xl">
            <img
              src={Heart}
              alt="heart"
              className="w-13 h-15 relative bottom-7"
            />

            <p className="text-3xl font-['Fredoka_One'] mb-2">
              medicine & more on minutes
            </p>
            <img src={Clock} alt="heart" className="w-12 h-12 relative top-5" />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          className="px-20 py-15"
        >
          <motion.img
            src={img6}
            alt="icon"
            className="absolute z-0 h-30 top-21 right-100"
            animate={
              isHover ? { x: 5, y: -5, rotate: 20 } : { x: 0, y: 0, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 100 }}
          />
          <motion.img
            src={img1}
            alt=""
            animate={isHover ? { x: 0, y: 5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute h-18 right-2 z-1"
          />
          <motion.img
            src={img2}
            alt="bloodDonor"
            animate={isHover ? { x: -4, y: 4 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-52 right-65 h-30 w-70 z-1"
          />
          <motion.img
            src={img3}
            alt="location"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute top-100 h-10 right-25 z-1"
          />
          <motion.img
            src={img4}
            alt="prescription"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute z-1 h-30 top-120 left-195"
          />
          <motion.img
            src={img5}
            alt="map"
            animate={isHover ? { x: 5, y: -5 } : { x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute z-1 h-30 top-135 right-8"
          />
          <motion.img
            src={rectangle1}
            alt="mainimg"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-90 h-120 relative"
          />
        </motion.div>
      </div>
    </div>

  );
}





// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Button from "./Buttons/BorderButton";
// import logo from '../../public/Home/logo.jpg';
// import Heart from '../assets/momp/dotheart.png';
// import Clock from '../assets/momp/clock.png'
// import rectangle1 from '../assets/momp/mainImg.png'
// import img1 from '../assets/momp/img1.png'
// import img2 from '../assets/momp/bloodDonor.png'
// import img3 from '../assets/momp/location.png'
// import img4 from '../assets/momp/prescription.png'
// import img5 from '../assets/momp/map.png'
// import img6 from '../assets/momp/icon.png'
// export default function JobLanding() {
//   // Define variants for the parent container (rectangle1)
//   const parentVariants = {
//     initial: { scale: 1 }, // Initial state for parent
//     hover: {
//       scale: 1.05, // Slight scale up on hover
//       transition: {
//         duration: 0.3,
//         staggerChildren: 0.1, // Stagger child animations by 0.1 seconds
//       },
//     },
//   };

//   // Define variants for the child images
//   const childVariants = {
//     initial: {
//       x: 0,
//       y: 0,
//     //   opacity: 0.8, // Initial opacity for child images
//     },
//     hover: (i) => ({
//       // Using a custom prop 'i' (index) for varied movement
//       x: i % 2 === 0 ? -20 : 20, // Move left or right depending on the index
//       y: i % 2 === 0 ? 20 : -20, // Move up or down depending on the index
//       opacity: 1, // Full opacity on hover
//       transition: {
//         duration: 0.3,
//         ease: "easeOut", // Smooth transition
//       },
//     }),
//   };

//   return (
//     <div className="bg-[#00a79b] h-full w-full inline-block pb-20">
//       <motion.div className="px-2 ,py-2 flex justify-between">
//         <div className="py-5 px-10">
//           <Button title="back" link="#" />
//         </div>

//         <div className="flex">
//           <p className="font-family:Fredoka text-xl rounded-bl-2xl rounded-br-2xl px-10 mb-2 py-5 bg-white inline">
//             be among first few users to try our app and gives us your valuable
//             feedback &nbsp;
//             <span className="text-[#00a79b] text-xl inline">try now!</span>
//           </p>
//         </div>
//         <div className="px-10 py-5">
//           <button className="bg-white rounded-4xl px-5 py-1 h-9 flex justify-center">
//             english
//           </button>
//         </div>
//       </motion.div>
//       <div className="flex justify-between ">
//         <motion.div
//           initial={{
//             x: -100,
//             opacity: 0,
//           }}
//           animate={{
//             x: 50,
//             opacity: 1,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.1,
//           }}
//         >
//           <div className="flex py-30 px-20">
//             <div>
//               <img src={logo} alt="logo" className="w-45 h-45" />
//             </div>
//             <div>
//               <p className="text-7xl text-white font-['Fredoka_One'] py-10 px-5">
//                 pharmacy
//               </p>
//             </div>
//           </div>
//           <div className="flex justify-between bg-white h-14 w-150 relative bottom-25 left-25 px-5 py-1 rounded-xl">
//             <img
//               src={Heart}
//               alt="heart"
//               className="w-13 h-15 relative bottom-7"
//             />

//             <p className="text-3xl font-['Fredoka_One'] mb-2">
//               medicine & more on minutes
//             </p>
//             <img src={Clock} alt="heart" className="w-12 h-12 relative top-5" />
//           </div>
//         </motion.div>
//         <motion.div
//           // animate={{}}
//           variants={parentVariants}
//           initial="initial"
//           whileHover="hover"
//           className="px-20 py-15 relative"
//         >
//           <motion.img
//             variants={childVariants}
//             src={img6}
//             alt="icon"
//             className="absolute z-0 h-30 top-15 right-100"
//           />
//           <motion.img
//             variants={childVariants}
//             src={img1}
//             alt=""
//             className="absolute h-18 right-2 z-1"
//           />
//           <motion.img
//             variants={childVariants}
//             src={img2}
//             alt="bloodDonor"
//             className="absolute top-52 right-65 h-30 w-70 z-1"
//           />
//           <motion.img
//             variants={childVariants}
//             src={img3}
//             alt="location"
//             className="absolute top-100 h-10 right-25 z-1"
//           />
//           <motion.img
//             variants={childVariants}
//             src={img4}
//             alt="prescription"
//             className="absolute z-1 h-30 top-103 left-5"
//           />
//           <motion.img
//             variants={childVariants}
//             src={img5}
//             alt="map"
//             className="absolute z-1 h-30 top-115 right-8"
//           />
//           <motion.img
//             src={rectangle1}
//             alt="mainimg"
//             initial={{ scale: 0.5 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-90 h-120 relative"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

