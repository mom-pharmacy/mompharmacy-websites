import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPrescription } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import UploadPrescription from "./UploadPrescription";
import DownloadApp from "./DownloadApp";
import Button from "../Button";
import Welcome from "./Welcome";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Banner = () => {

  const [showUploadPrescription , setShowUploadPrescription] = useState(false)
  const[downloadapp,setDownloadApp]=useState(false)
  const [welcome,setWelcome]=useState(true)
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

      <div className="overflow-x-hidden">
        <div className="bg-[#00A79B] w-100% xl:h-110 md:h-110 h-auto flex flex-col gap-15 items-center justify-center">
          <div className="flex">
            <div>
              <img src="/Home/pillimage.gif" alt="pill image"></img>
            </div>
            <div className="text-white font-['Fredoka_One'] text-[50px]">
              <h1 className="">
                We don't just deliver medicine.<br></br> We deliver the kind of
                care only<br></br>
              </h1>
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
          </div>
          <div className="flex gap-10 sm:flex flex-wrap items-center justify-center">
            <Button
              onClick={setShowUploadPrescription}
              title=" upload prescription"
              icon={<FaPrescription />}
            ></Button>
            <Button
              onClick={() => {
                setDownloadApp(true);
              }}
              title=" download app"
              icon={<MdDownload />}
            ></Button>
          </div>
        </div>
        <Welcome welcome={welcome} setWelcome={setWelcome} />
      </div>
    </>
  );
};

export default Banner;
