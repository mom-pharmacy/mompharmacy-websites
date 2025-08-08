import React, { useState } from "react";
import { FaPrescription } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import UploadPrescription from "./UploadPrescription";
import DownloadApp from "./DownloadApp";
import Button from "../Button";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcome";

const Banner = () => {

  const [showUploadPrescription, setShowUploadPrescription] = useState(false)
  const [downloadapp, setDownloadApp] = useState(false)
  const [index, setIndex] = useState(0);
  

  const wordList = ["అమ్మ", "mom", "ಅಮ್ಮ", "माँ"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % wordList.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <>
        {showUploadPrescription && (
          <div className="fixed h-screen w-screen bg-black/45 left-0 top-0 z-200"></div>
        )}
        <UploadPrescription
          showUploadPrescription={showUploadPrescription}
          setShowUploadPrescription={setShowUploadPrescription}
        />
        {downloadapp && (
          <div className="fixed h-screen w-screen bg-black/45 left-0 top-0 z-200"></div>
        )}
        <DownloadApp
          downloadapp={downloadapp}
          setDownloadApp={setDownloadApp}
        />
      </>

      <div className="overflow-x-hidden rounded-tr-2xl rounded-tl-2xl ">
        <div className="bg-[#00A79B] w-100% xl:h-110 md:h-110 h-auto flex flex-col gap-15 p-10">
            <div className="text-white font-['Fredoka_One'] text-[40px]">
              <h1 className="">
                We don't just deliver medicine.

              </h1>
              <h1> We deliver the kind of care only</h1>
              <h1>
                a
                <span className="text-[#FADB14] inline-block text-center font-bold w-[150px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordList[index]}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block"
                    >
                      {wordList[index]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                could give.
              </h1>
            </div>
         
              <div className="flex gap-4">
                <Button
                  onClick={() => setShowUploadPrescription(true)}
                  title="order via prescription"
                  icon={<FaPrescription />}
                  className="bg-white text-[#00A79B] hover:bg-[#FADB14] hover:text-black rounded-md shadow"
                />
                <Button
                  onClick={() => setDownloadApp(true)}
                  title="download our app"
                  icon={<MdDownload />}
                  className="bg-white text-[#00A79B] hover:bg-[#FADB14] hover:text-black rounded-md shadow"
                />
              </div>

        </div>
<Welcome />
      </div>
    </>
  );
};

export default Banner;
