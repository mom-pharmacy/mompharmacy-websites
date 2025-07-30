import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function KeyDetails({
  job_no,
  travel,
  job_category,
  date_published,
  employment_type,
  work_model,
  role_description,
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
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-12 px-4 sm:px-8 lg:px-20 py-20">

      <div className="w-full lg:w-1/3 flex justify-center">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full p-6 rounded-lg shadow-md border-2 border-[#00a79b] bg-white"
        >
          <h2 className="text-3xl font-bold text-[#00a79b] mb-4">Key Job Details</h2>
          <div className="space-y-3 text-base">
            <DetailRow label="Job No:" value={job_no || 'N/A'} />
            <DetailRow label="Travel Required:" value={travel ? "Yes" : "No"} />
            <DetailRow label="Job Category:" value={job_category || 'N/A'} />
            <DetailRow label="Location:" value="Location" />
            <DetailRow label="Date Published:" value={date_published || 'N/A'} />
            <DetailRow label="Employment Type:" value={employment_type || 'N/A'} />
            <DetailRow label="Work Model:" value={work_model || 'N/A'} />
          </div>
        </motion.div>
      </div>

      {/* Right: The Role */}
      <div className="w-full lg:w-1/2">
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
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Component for each job detail row
function DetailRow({ label, value }) {
  return (
    <div className="flex items-center">
      <span className="w-40 text-gray-800 font-medium">{label}</span>
      <span className="ml-2 px-2 py-1 rounded bg-[#00A79B1A] text-[#00a79b] font-semibold">
        {value}
      </span>
    </div>
  );
}
