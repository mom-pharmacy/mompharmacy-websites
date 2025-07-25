import React, { useRef, useEffect, useContext } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";

export default function KeyDetails({job_no,travel,job_category,date_published,employment_type,work_model,role_description,}) {
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

      <div ref={containerRef} className="flex flex-col md:flex-col sm:flex-row">
        <motion.p
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 1, ease: "easeOut" ,delay:0.1 }}
          className="text-4xl mb-2 font-bold text-[#00a79b] text-left"
        >
          the role
        </motion.p>
        <motion.p
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut", delay:0.2 }}
          className="pl-8 text-xl text-black-700 text-left font-400"
        >
          {role_description}
        </motion.p>
      </div>

      <div className="flex-initial items-center justify-center ">
        <motion.div

          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ mainControls, opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" w-100 p-2 rounded-lg shadow-md border-2 border-dashed border-[#00a79b] items-center gap-10 justify-center"
        >
          <h2 className="text-3xl font-bold text-[#00a79b] mb-2">
            key job details
          </h2>

          <form ref={containerRef} className="space-y-2 text-lg">
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.1 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">job no:</label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
                {job_no||'N/A'}
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.2 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">
                travel required:
              </label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
                {travel?"yes":"no"}
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex items-center"
            >
              <label className="w-40  text-black-700 font-medium ">
                job category:
              </label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
                {job_category}
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.4 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">
                location:
              </label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
                
              location
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.5 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">
                date published:
              </label>
              <p className=" font-semibold ml-2 border-1 p-1 w-50 rounded text-[#00a79b] bg-[#00A79B1A] ">
                {date_published}
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.6 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">
                employment type:
              </label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
               {employment_type}
              </p>
            </motion.div>
            <motion.div
              animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x: "70px", opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.7 }}
              className="flex items-center"
            >
              <label className="w-40 text-black-700 font-medium">
                work model:
              </label>
              <p className="text-[#00a79b] font-semibold ml-2 border-1 p-1 w-50 rounded bg-[#00A79B1A]">
                {work_model}
              </p>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
