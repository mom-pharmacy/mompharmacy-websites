import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Details({
  eligibility,
  about_employee,
  employee_expect,
}) {
  const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);

  return (
    <div className="ml-20 ">
      <div ref={containerRef} className="space-y-1">
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          <h3 className="text-2xl  font-bold text-[#00A79B] mb-3">
            What can you expect in this role :
          </h3>
          {employee_expect}
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
          <h3 className="text-2xl  font-bold text-[#00A79B] mb-3">
            the successful candidate will demostrate the following skills and
            competencies:
          </h3>
          <div className="flex flex-wrap gap-3">{eligibility}</div>
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
          <h3 className="text-2xl  font-bold text-[#00A79B] mb-3">
            you are someone who is:
          </h3>
          <p className="text-gray-700 text-base">{about_employee}</p>
        </motion.div>
      </div>
    </div>
  );
}
