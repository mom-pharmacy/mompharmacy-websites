import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
 
export default function Details({eligibility,about_employee,employee_expect}) {
     const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);

  return (
    <div  className='items-center px-20 gap-10 justify-center flex flex-col md:flex-row sm:flex-row'>
        <div ref={containerRef}>
            <motion.h2 
            animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:-80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
             className="text-3xl font-bold text-[#00a79b] mb-2">the successful candidate will demonstrate the following skills and competencies:</motion.h2>
            <motion.ul
            animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:-80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }} 
            className="list-disc pl-8 text-black-700 text-lg">
              {eligibility}
                {/* <li>Experience of delivering several project/programs in SAP FICO with specialization in Treasury</li>
                <li>Experience of S/4 HANA BAM – Bank Account Management</li>
                <li>Experience in APM – Advanced Payment Management</li>
                <li>Experience in S/4 HANA complete scope Cash Management</li>
                <li>Experience in Treasury Risk Management</li>
                <li>Understand the global Finance E2E Business Process in S4HANA – GL , AP, AR, Assets etc</li> */}
                </motion.ul>
                <motion.h2
                animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:-80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.4 }} 
                className="text-3xl font-bold text-[#00a79b] mb-2 mt-4">you are someone who is:</motion.h2>
            <motion.ul
            animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:-80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.5 }}
             className="list-disc pl-8 text-black-700 text-lg">
                {/* <li>Passionate about solving customer’s problem with innovation and commitment</li>
                <li>A great communicator : you are able to communicate at all level – technical and non-technical</li> */}
                {about_employee}
                </motion.ul>
        </div>
        <div ref={containerRef}>
            <motion.h2
             animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.6 }} 
            className="text-3xl font-bold text-[#00a79b] mb-2">what can you expect in this role :</motion.h2>
            <motion.ul
             animate={mainControls}
              initial="hidden"
              variants={{
                hidden: { x:80, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.7 }} 
            className="list-disc pl-8 text-black-700 text-lg ">
                {/* <li>Lead the design and implementation of S/4 HANA FI-SD and FI-MM integrations to streamline financial processes and improve data accuracy.</li>
                <li>Oversee the integration of S/4 HANA Accounts Receivables and Profitability Analysis to enhance financial reporting and decision-making.</li>
                <li>Provide expert guidance on S/4 HANA Cost Center Accounting and SAP Controlling to optimize cost management and resource allocation.</li>
                <li>Develop strategies for S/4 HANA Profit Center Accounting and Product Costing to support profitability analysis and cost control.</li>
                <li>Collaborate with stakeholders in the Corporate and Finance and Utilities sectors to align technology solutions with business goals.</li>
                <li>Utilize Generative AI to innovate and automate financial processes driving efficiency and accuracy.</li>
                <li>Monitor system performance and provide recommendations for improvements to ensure optimal functionality.</li> */}
                {employee_expect}
            </motion.ul>
        </div>
    </div>
  )
}
