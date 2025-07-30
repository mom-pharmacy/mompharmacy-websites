import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Details({ eligibility, about_employee, employee_expect }) {
  const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-8 ml-30, flex mb-30 ">
      <div ref={containerRef} className="space-y-8">
      
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Secondary responsibilities :</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
            {eligibility}
          </ul>
        </motion.div>

        
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-3">
            {about_employee}
          </div>
        </motion.div>

        
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Type</h3>
          <p className="text-gray-700 text-base">{employee_expect}</p>
        </motion.div>
      </div>
    </div>
  );
}
