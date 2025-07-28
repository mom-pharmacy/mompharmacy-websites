import React, { useRef, useEffect } from "react";
import CardComp from "./CardComp";
import { motion, AnimatePresence } from "framer-motion";

const TeamPopup = ({ state, setState }) => {
  const sectionRef = useRef(null);

  const handleClose = () => {
    setState(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "A") handleClose();
    };

    if (state) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [state]);

  if (state) {
    document.body.style.overflow = "hidden";
  }

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          key="team-popup"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          ref={sectionRef}
          className="fixed inset-0 z-50  bg-opacity-30 flex justify-center items-center"
          onClick={handleClose} 
        >
          <div
            className="w-full max-w-6xl h-screen bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="relative h-full flex flex-col">

              <div className="sticky top-0 bg-white z-20 border-b border-gray-200 px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-teal-700">Departments</h2>
                    <p className="text-gray-600 text-sm">Meet the Team</p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-600 hover:text-red-500 text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  
                  <CardComp name="Uday" designation="Developer"  />
                  <CardComp name="Adarsh" designation="Developer"  />
                  <CardComp name="Poojitha" designation="Developer"  />
                  <CardComp name="Pushpa" designation="Developer" />
                  <CardComp name="Chandu" designation="Developer" />
                  <CardComp name="Akhila" designation="Developer" />
                  <CardComp name="Supriya" designation="Developer" />
                  <CardComp name="Rohith" designation="Developer" />
                  <CardComp name="Navya" designation="Developer" />
                  <CardComp name="Shiva" designation="Developer" />
                  <CardComp name="Gnaneshwar" designation="Developer" />
                  <CardComp name="Charan" designation="Developer" />
                  <CardComp name="Tejaswini" designation="Developer" />
                  <CardComp name="RaviTeja" designation="Developer" />

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamPopup;
