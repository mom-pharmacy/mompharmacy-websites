import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Details from "./Details";
// import SkillsCompetencies from "./SkillsCompetencies";
import JobCard from "../../JobCard";

export default function KeyDetails({
  job_no,
  role,
  travel,
  job_category,
  date_published,
  employment_type,
  work_model,
  role_description,
  location,
  experience,
  vacancy
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
    <div className="flex flex-col lg:flex-row-reverse  justify-between gap-10 lg:gap-12 px-4 sm:px-8 lg:px-20 py-20">

      <div className="w-full  lg:w-1/3 flex justify-center">
        <motion.div
     
          className="w-full p-6 text-center  h-20"
        >
          <h2 className="text-3xl font-bold text-[#00a79b] mb-4">Similar Jobs</h2>
          <JobCard location={location} experience={experience} role={role}></JobCard>
                  

         
        </motion.div>
      </div>

      {/* Right: The Role */}
      <div className="w-full lg:w-1/2 h-auto ">
        <motion.div
          whileHover={{ scale: 1.03 }}
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          className="text-left"
        >
          <h2 className="text-4xl font-bold text-[#00a79b] mb-4">The Role</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {role_description}
          {/* As a Principal Functional Architect you will leverage your extensive experience in S/4 HANA integrations and financial modules to drive impactful solutions in the Corporate and Finance and Utilities domains. You will work in a hybrid model collaborating with cross-functional teams to optimize business processes and enhance system efficiencies. Your expertise in Generative AI and S/4 HANA will be pivotal in transforming financial operations and achieving strategic objectives. */}
          </p>
       

        </motion.div>

      </div>
    </div>
  );
}

// Component for each job detail row
// function DetailRow({ label, value }) {
//   return (
//     <div className="flex items-center">
//       <span className="w-40 text-gray-800 font-medium">{label}</span>
//       <span className="ml-2 px-2 py-1 rounded bg-[#00A79B1A] text-[#00a79b] font-semibold">
//         {value}
//       </span>
//     </div>
//   );
// }
