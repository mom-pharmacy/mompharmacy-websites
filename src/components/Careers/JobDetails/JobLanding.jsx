import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiFlag, FiShare2, FiBookmark } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaRegCopy, FaHashtag, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import Button from "../../Button";



export default function JobLanding({ role, job_no, location, employment_type, experience }) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(pageUrl)}`,
  };

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
    if (!showShareMenu) return;
    function handleClick(e) {
      if (!e.target.closest('.share-menu') && !e.target.closest('.share-btn')) {
        setShowShareMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showShareMenu]);

  return (
    <div className="px-5 py-5 md:px-5 md:py-5 lg:py-3 lg:px-5 mb-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-gradient-to-r from-[#00a79b] to-[#007d75] flex flex-col md:flex-row lg:flex-row rounded-xl p-3 md:p-8 mx-10 lg:p-5 mx-auto text-white relative overflow-hidden shadow-lg"
      >
        {/* Title & Icons */}
        <div className="flex flex-col flex-1 justify-between items-start mb-3 ">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-3 md:mb-5 lg:mb-5 font-['fredoka_one']">
            {role || "Senior Software Engineer"}
          </h2>

          <div className="flex items-center gap-2 mb-5  ">
            <FaClock style={{ height: 28 }} />
            <span className="text-xs lg:text-xl md:text-xl">Posted 2hr ago </span>

            <FaHashtag style={{ height: 20 }} className="ml-2" />
            <span className="text-xs lg:text-xl md:text-xl">Job Id {job_no || "N/A"}</span>
          </div>

          {/* Job Details & Apply */}
          <div className="flex flex-row  sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap text-sm sm:text-base">
            <div className="  w-auto flex items-center gap-2">
              <FaLocationDot style={{ height: 25, marginTop: 3 }} />
              <span className="text-xs lg:text-xl md:text-xl">{location},India</span>
            </div>
            <div className="flex items-center gap-2 " >
              <IoBagHandle style={{ height: 25, width: 23 }} />
              <span className="text-xs lg:text-xl md:text-xl">{experience}</span>
            </div>

            <div className="flex items-center gap-2" >
              <FaHome />
              <span className="text-xs lg:text-xl md:text-xl">{employment_type}</span>
            </div>

          </div>
        </div>

        <div className="flex flex-col text-white text-xl items-start">
          <div className="flex gap-7 md:flex-col lg:flex-col md:gap-10 lg:gap-10">
            <div className="flex-1 flex-row flex gap-1">
              <div>

                <Button title="Save Job" icon={<FiBookmark />}></Button>
              </div>
              <div>
                {/* Share Icon */}
                <motion.button
                  onClick={() => setShowShareMenu(v => !v)}
                  className="relative share-btn hover:opacity-80 min-w-[4px] max-w-[80px] h-[30px] lg:min-w-[100px] lg:max-w-[280px] lg:h-[38px] p-1 py-1 md:p-6 md:py-6 lg:p-6 lg:py-6 bg-white text-[#444444]
             border-2 border-white rounded-full  whitespace-nowrap text-ellipsis text-sm md:text-lg lg:text-lg transition-all duration-300 
                   cursor-pointer flex flex-row items-center justify-center gap-2 font-['fredoka_one']"
                  title="Share  "
                  whileHover={{

                    cursor: 'pointer',
                    backgroundColor: '#fadb14',

                    ease: 'easeOut',
                  }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Share
                  <FiShare2 className="h-5 w-5" />
                  {showShareMenu && (
                    <div className="share-menu absolute z-60 top-8 right-0 bg-white mt-5 text-black border border-gray-200 rounded shadow-md p-2 flex flex-col min-w-[180px]">
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2"
                      >
                        <FaLinkedinIn className="h-4 w-4" /> LinkedIn
                      </a>
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2"
                      >
                        <FaFacebookF className="h-4 w-4" /> Facebook
                      </a>
                      <a
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2"
                      >
                        <FaWhatsapp className="h-4 w-4" /> WhatsApp
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="px-2 py-1 hover:bg-gray-100 rounded text-sm flex items-center gap-2 text-left"
                      >
                        <FaRegCopy className="h-4 w-4" />
                        {copied ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  )}
                </motion.button>
              </div>

            </div>

            {/* Apply Button */}
            <div>
              <Link
                to="/apply"
                className="bg-white text-[#444444] px-2 py-2 md:px-4 md:py-4 lg:px-4 lg:py-4  rounded-full text-sm md:text-lg lg:text-lg font-['fredoka_one'] transition hover:bg-[#e6f7f6] hover:text-[#007d75]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

      </motion.div>






    </div>
  );
}
