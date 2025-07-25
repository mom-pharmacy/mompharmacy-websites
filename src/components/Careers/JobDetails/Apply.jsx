import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useInView, useAnimation } from "framer-motion";
import share from '../../../assets/jobrole/share.svg';
import save from '../../../assets/jobrole/save.svg';
import GlowButton from '../../Buttons/GlowButton';
import BorderButton from '../../Buttons/BorderButton';
import whatsapp from '../../../assets/Careerpage/whatsapp-logo.png'
import facebook from '../../../assets/Careerpage/facebook.png'
import linkedin from '../../../assets/Careerpage/linkedin.png'
import copylink from '../../../assets/Careerpage/copylink.png'
import SavedButton from   '../../Buttons/SavedButton'

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
          {we_offer}
        </motion.ul>
      </div>
      <div>

        <div className='flex gap-2 mt-20 relative'>
          <BorderButton
            title="Share"
            link="#"
            icon={<img src={share} alt="share icon" className='inline-block h-5 w-5' />}
            onClick={e => { e.preventDefault(); setShowShareMenu(v => !v); }}
          />
          {showShareMenu && (
            <div className="share-menu absolute z-10 top-12 left-0 bg-white border border-gray-200 rounded shadow-md p-2 flex flex-col min-w-[180px]">
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2">
                   <span className="h-5 w-5">
                    <img src={linkedin} alt="linkedin logo"/>
                  </span>
                LinkedIn
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2">
                   <span className="h-7 w-7">
                    <img src={facebook} alt="facebook logo"/>
                  </span>
                  Facebook
              </a>
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2">
                  <span className="h-7 w-7">
                    <img src={whatsapp} alt="whatsapp logo"/>
                  </span>
                  WhatsApp
              </a>
              <button
                onClick={handleCopyLink}
                className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2 text-left"
                style={{ outline: 'none', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                 <span className="h-5 w-5">
                    <img src={copylink} alt="copylink logo"/>
                  </span>
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
            </div>
          )}
          <BorderButton title="save job" link="#" icon={<img src={save} alt="save icon" className='inline-block h-5 w-5' />} />
        <div

          className='flex gap-2 mt-20'>
          <BorderButton title="share" link="#" icon={<img src={share} alt="share icon" className='inline-block h-5 w-5' />} />
          <SavedButton title="save job" icon={<img src={save} alt="save icon" className='inline-block h-5 w-5' />} />
          <GlowButton title="apply now" link="#" />
        </div>
      </div>
    </div>
  );
}


