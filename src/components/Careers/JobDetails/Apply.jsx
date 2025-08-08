import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
export default function Apply({we_offer}) {
  const containerRef = useRef(null);
  const inInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(pageUrl)}`,
  };


  useEffect(() => {
    if (!showShareMenu) return;
    function handleClick(e) {
      if (!e.target.closest('.share-menu') && !e.target.closest('.share-btn')) {
        setShowShareMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showShareMenu]);


  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (inInView) {
      mainControls.start("visible");
    }
  }, [inInView, mainControls]);

  return (
 <div className="items-center justify-center gap-6  sm:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-10">
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
          className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#00a79b]">what we offer:</motion.h2>
        <motion.ul
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { x: -80, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          exit={{ x: "50%", opacity: 0 }}
          transition={{ duration: 0.78, ease: "easeInOut", delay: 0.1 }}
          className="list-disc text-black-700 text-lg">
          {we_offer}
        </motion.ul>
      </div>
    </div>
  );
}