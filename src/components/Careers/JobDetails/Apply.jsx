import React, { useRef, useEffect } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import share from '../../../assets/jobrole/share.svg'
import save from '../../../assets/jobrole/save.svg'
import GlowButton from '../../Buttons/GlowButton'
import BorderButton from '../../Buttons/BorderButton'

export default function Apply() {
  const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);
  return (
    <div className='items-center py-8 px-20 gap-1justify-center flex flex-col md:flex-row sm:flex-row'>
      <div ref={containerRef}>
        <motion.h2
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.1 }}
          className="text-3xl font-bold text-[#00a79b] mb-2">what we offer:</motion.h2>
        <motion.ul
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.1 }}
          className="list-disc pl-8 text-black-700 text-lg">
          <li>A career in one of the largest and fastest growing IT services providers worldwide</li>
          <li>SAP Training and Certifications</li>
          <li>Competitive Salary in line with market rates and experience</li>
          <li>Opportunity to work for the large multinationals and other leading companies</li>
          <li>Personal development in hard and soft skills</li>
        </motion.ul>
      </div>
      <div>
        <div

          className='flex gap-2 mt-20'>
          <BorderButton title="share" link="#" icon={<img src={share} alt="share icon" className='inline-block h-5 w-5' />} />
          <BorderButton title="save job" link="#" icon={<img src={save} alt="save icon" className='inline-block h-5 w-5' />} />
          <GlowButton title="apply now" link="#" />
        </div>
      </div>

    </div>
  )
}
