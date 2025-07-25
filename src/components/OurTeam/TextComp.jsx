import React from "react";
import { motion } from "framer-motion";

export default function TextComp(propes) {
  return (
    <div className="h-100 w-120 flex ">

      <motion.p class="mb-3 text-gray-500
                      dark:text-gray-900 
                       first-line:uppercase first-line:tracking-widest 
                       first-letter:text-7xl first-letter:font-bold
                       first-letter:text-gray-900 
                       dark:first-letter:text-green-200 
                        first-letter:me-3 
                        first-letter:float-start"
                        >
                            {propes.text}

      </motion.p>

    </div>
  );
}
