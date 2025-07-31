import React, { useState } from "react";
import { motion, scale } from "framer-motion";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
export default function Revew({ name, time, rating = 0, revew,img }) {
  // const [value, setValue] = useState(4);

  return (
    <div className="">
      <motion.div
        className="h-60 w-60   mt-10 border-1 rounded-xl relative overflow-hidden"

        
      >
        <div className="flex">
          <div className=" h-13 w-13 p-1 ">
            {" "}
            <img src={img} className="border-1 rounded-3xl"></img>
          </div>
          <div className="">
            <h1 className="font-bold text-1xl">
              {name} <br />
              <h1 className="font-medium">{time}</h1>
            </h1>
          </div>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
        <div className=" h-full p-1">
          <p>{revew}
    
          </p>
        </div>
      </motion.div>
    </div>
  );
}