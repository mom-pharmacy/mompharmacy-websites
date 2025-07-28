import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";

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
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-10">
      <div ref={containerRef}>
        <motion.h2
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
          className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00a79b] mb-2">the successful candidate will demonstrate the following skills and competencies:</motion.h2>
        <motion.ul
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
          className="list-disc text-black-700 text-lg">
          {eligibility}
        </motion.ul>
        <motion.h2
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.4 }}
          className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00a79b] mb-2 mt-4">you are someone who is:</motion.h2>
        <motion.ul
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.5 }}
          className="list-disc text-black-700 text-lg">
          {about_employee}
        </motion.ul>
      </div>
      <div ref={containerRef}>
        <motion.h2
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: 80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.6 }}
          className="text-2xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-[#00a79b] mb-2">what can you expect in this role :</motion.h2>
        <motion.ul
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: 80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.7 }}
          className="list-disc text-black-700 text-lg ">
          {employee_expect}
        </motion.ul>
      </div>
    </div>
  )
}
