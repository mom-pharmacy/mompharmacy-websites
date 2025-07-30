import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CardComp({ name, designation, img, about, isActive }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <motion.div
        className={`bg-white rounded-3xl shadow-md text-center px-4 py-6 gap-2 transition-all duration-300 ${isActive
            ? "scale-105 shadow-xl border-b-4 border-green-400 h-70 w-50"
            : "opacity-80 scale-95"
          }`}>
        <div className="relative flex justify-center">
          <img
            src={img}
            alt={name}
            className="h-30 w-30 rounded-full object-cover mb-4 border border-black-200"/>
        </div>
        <h2 className="font-bold text-1xl text-black-800">{name}</h2>
        <p className="text-sm text-[#00a99d] mt-1">{designation}</p>

        {isActive && (
          <motion.div
            className="text-sm text-[#00a99d] mt-2 inline-flex items-center gap-1 cursor-pointer" whileHover={{ scale: 1.05 }} onClick={handleOpenModal}>
            Read More <FaArrowRightLong />
          </motion.div>
        )}
      </motion.div>

      {showModal &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-0 m-0 w-screen h-screen">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="bg-white w-150 h-100 max-w-none max-h-none rounded-2xl p-0 flex flex-col justify-center items-center relative">
              <button

                onClick={handleCloseModal}
                className="absolute top-0 ml-138 text-black-600 text-4xl font-bold hover:text-black-900 transition z-60" aria-label="Close modal">
                &times;
              </button>
              <img
                src={img}
                alt={name}
                className="w-32 h-32 rounded-full object-cover mb-4 mt-20"/>
               <h2 className="text-3xl font-bold mb-1 text-center">{name}</h2>
               <p className="text-[#00a99d] text-lg text-center mb-4">{designation}</p>
               <div className="px-8">
                <p className="text-black-600 text-center">
                  {about || "No additional information available."}
                </p>
              </div>
            </motion.div>
          </div>,
          document.body
        )
      }
    </>
  );
}