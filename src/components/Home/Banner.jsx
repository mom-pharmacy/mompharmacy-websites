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
import bluePill from "../../assets/AboutUs/bluepill.png"
import bluePillBottom from "../../assets/AboutUs/bluepillbottom.png"
import Heart from "../../assets/AboutUs/heart.png"

const Banner = () => {

  const [showUploadPrescription, setShowUploadPrescription] = useState(false)
  const [downloadapp, setDownloadApp] = useState(false)
  const [welcome, setWelcome] = useState(true)
  const [index, setIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
      setShowButtons(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
            <div className="p-5">
              {/* <img src="/Home/pillimage.gif" alt="pill image"></img> */}
              <img src={bluePill} alt="pill image" className="h-30 w-30 animate-bounce" />
              <img src={bluePillBottom} alt="pill image" className="w-25" />
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
          {showImage && (<motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
            <img src={Heart} alt="pill image" className="w-15" />
          </motion.div>)}

          {showButtons && (
            <div className="relative w-full flex justify-center items-center mt-5">

              <motion.div
                initial={{ scaleX: 0, opacity: 0, originX: 0.5 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bg-white/30 rounded-full
                 shadow-lg h-20 w-[46%] z-0"
              />

              <div className="relative z-1 flex gap-3 flex-wrap items-center justify-center">
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
          )}

        </div>
        {/* <Welcome welcome={welcome} setWelcome={setWelcome} /> */}
      </div>
    </>
  );
};

export default Banner;
