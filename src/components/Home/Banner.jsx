import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPrescription } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import UploadPrescription from "./UploadPrescription";
import DownloadApp from "./DownloadApp";
import EarlyAccess from "./EarlyAccess";

const Banner = () => {

  const [showUploadPrescription , setShowUploadPrescription] = useState(false)
  const[downloadapp,setDownloadApp]=useState(false)

  return (
    <>

    <> 
      {showUploadPrescription && <div className="fixed h-screen w-screen bg-black/45 left-0 top-0"></div>}
          <UploadPrescription showUploadPrescription={showUploadPrescription} setShowUploadPrescription={setShowUploadPrescription}/>
          {downloadapp && <div className="fixed h-screen w-screen bg-black/45 left-0 top-0"></div>}
          <DownloadApp downloadapp={downloadapp} setDownloadApp={setDownloadApp}/>
    </>

      <div className="overflow-x-hidden ">   
               
        <div className="bg-[#00A79B] w-100% h-180 flex flex-col gap-15 items-center justify-center">
          <div className="flex">
            <div>
             
              <img src="/Home/pillimage.gif" alt="pill image"></img>
            </div>
            <div className="text-white text-[40px]">
              <h1>
                We don't just deliver medicine.<br></br> We deliver the kind of
                care only<br></br>
              </h1>
              <h1>
                a
                <span className="text-[#FADB14]">
                  <Typewriter
                    words={[" అమ్మ", " mom", " ಅಮ್ಮ", " माँ"]}
                    loop={true}
                    typeSpeed={100}
                  ></Typewriter>
                </span>{" "}
                could give.
              </h1>
            </div>
          </div>
          <div className="flex gap-10 sm:flex flex-wrap items-center justify-center">
            <button
              className="bg-white rounded-full hover:bg-[#FADB14] p-3 w-50 flex flex-row justify-around"
              onClick={()=>{setShowUploadPrescription(true)}}
            >
              upload prescription
              <span className="rounded-full bg-black text-white p-1">
                <FaPrescription />
              </span>
            </button>
            <button className="bg-white rounded-full hover:bg-[#FADB14] p-3 w-50 flex flex-row justify-around"
            onClick={()=>{setDownloadApp(true)}}
            >
              download app
              <span className="rounded-full bg-black text-white p-1">
                <MdDownload />
              </span>
            </button>
          </div>
          
        </div>
      <EarlyAccess/>
      </div>

     
    </>
  );
};

export default Banner;
