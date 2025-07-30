import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiFlag, FiShare2, FiBookmark } from "react-icons/fi";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobLanding({ role, job_no }) {
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#00a79b] to-[#007d75] rounded-xl p-6 md:p-8 lg:p-10 w-full mx-auto text-white relative overflow-hidden shadow-lg"
    >
      {/* Title & Icons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 mb-8 lg:mb-10 py-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-0">
          {role || "Senior Software Engineer"}
        </h2>
        <div className="flex gap-4 text-white text-xl items-center">
          {/* Save Icon */}
          <button className="hover:opacity-80" title="Save Job">
            <FiBookmark className="h-5 w-5" />
          </button>

          {/* Share Icon */}
          <button
            onClick={() => setShowShareMenu(v => !v)}
            className="relative share-btn hover:opacity-80"
            title="Share Job"
          >
            <FiShare2 className="h-5 w-5" />
            {showShareMenu && (
              <div className="share-menu absolute z-10 top-8 right-0 bg-white text-black border border-gray-200 rounded shadow-md p-2 flex flex-col min-w-[180px]">
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
          </button>
        </div>
      </div>

      {/* Job Details & Apply */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <FiFlag />
          <span>Job ID {job_no || "N/A"}</span>
        </div>

        {/* Apply Button */}
        <Link
          to="/apply"
          className="ml-auto bg-white text-[#00a79b] px-5 py-2 rounded-md font-medium transition hover:bg-[#e6f7f6] hover:text-[#007d75]"
        >
          Apply Now
        </Link>
      </div>
    </motion.div>
  );
}
