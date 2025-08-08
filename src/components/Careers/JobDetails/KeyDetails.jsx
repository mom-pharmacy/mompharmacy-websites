import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import JobCard from "../../JobCard";

export default function KeyDetails({
  location,
  experience,
  vacancy,
  role,
  role_description,
  employee_expect,
  eligibility,
  we_offer,
  about_employee,

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
    <div className="flex flex-col lg:flex-row  justify-between gap-10 py-5 lg:gap-12 px-5 sm:px-8 lg:px-10">

      <div className="w-full lg:w-1/2 h-auto ">
        <motion.div

          className="text-left"
        >
          <h2 className="text-lg md:text-2xl lg:text-2xl text-[#00a79b] mb-2 font-['fredoka_one']">The Role</h2>
          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            {role_description}
                      </p>
        </motion.div>
        <motion.div >
          <h3 className="text-lg md:text-2xl lg:text-2xl text-[#00a79b] mb-2 font-['fredoka_one']">
            What can you expect in this role :
          </h3>
          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            {employee_expect}
                     </p>

        </motion.div>
        <motion.div >
          <h3 className="text-lg md:text-2xl lg:text-2xl text-[#00a79b] mb-2 font-['fredoka_one']">
            the successful candidate will demostrate the following skills and
            competencies:
          </h3>
          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            {eligibility}
                     </p>

        </motion.div>
        <motion.div >
          <h3 className="text-lg md:text-2xl lg:text-2xl font-['fredoka_one'] text-[#00a79b] mb-2">
            you are someone who is:
          </h3>
          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            {about_employee}
       
          </p>

        </motion.div>
        <motion.div >
          <h3 className="text-lg md:text-2xl lg:text-2xl font-['fredoka_one'] text-[#00a79b] mb-2">
            what we offer:
          </h3>
          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            {we_offer}

          </p>

        </motion.div>

      </div>



      <div className="w-full  lg:w-1/3 flex justify-center mb-10">
        <motion.div

          className="w-full p-6 text-center"
        >
          <h2 className="text-3xl font-['fredoka_one'] text-[#00a79b] item-left mb-5">Similar Jobs</h2>
          <JobCard location={location} experience={experience} role={role}></JobCard>



        </motion.div>
      </div>
    </div>
  );
}


