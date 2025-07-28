import React, { useState } from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";



export default function CardComp(props) {

  //  let navigate = useNavigate();

  //  function handleClick()
  //  {
  //  console.log("clicked")
  //   navigate('/founderbio')

  //  }

  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  return (
    <div className="">
      <motion.div  className="h-60 w-60    rounded-xl relative cursor-pointer"
       
        onHoverStart={() =>
          setIsHovered({
            state: true,
            rotate: -35,
          })
        }
        onHoverEnd={() =>
          setIsHovered({
            state: false,
            rotate: 0,
          })
        }

        // onClick={onClick()}
        
      >
        <img
          src={props.img ? props.img : "/dev1.png"}
          className= "w-full h-full object-cover pad rounded-xl" 
        ></img>
        
        <motion.div
          className={`w-full flex justify-between  absolute bottom-0 left-0 text-white ${
            isHovered.state ? "bg-yellow-300" : "bg-[#00A79B]"
          } backdrop-blur-sm rounded-b-lg p-2.5`}
         
        >
          <motion.div
            whileHover={{ scale: 0.7 }}
            whileTap={{ scale: 0.3 }}
            transition={{ type: "spring", stiffness: 500, delay: 1.2   }}
          >
            <h1 className={`text-2xl ${isHovered.state ? "text-black" : "text-white"} font-bold`}> {props.name}   </h1>
            <h1 className={`${isHovered.state ? "text-black" : "text-white"}`}>
              {props.designation}
            </h1>
          </motion.div>

          <motion.div
            className="h-8 w-7 m-2"
            animate={{ rotate: isHovered.rotate }}
            whileTap={{ scale: 0.8 }}
          >
           <FaArrowRightLong className={`${isHovered.state ? "text-black" : "text-white"} h-7 w-7 `} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
