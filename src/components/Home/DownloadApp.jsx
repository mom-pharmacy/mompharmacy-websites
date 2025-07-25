import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";


const DownloadApp = ({ setDownloadApp, downloadapp }) => {
  return (
    <AnimatePresence mode="wait">

      {downloadapp && <motion.div initial={{ x: 1000, display: "none" }} animate={{ x: 0, display: "flex" }} transition={{ duration: 0.2 }} exit={{ x: 1000 }} className="flex fixed h-screen w-screen justify-center ">
        <div className="flex outline-1 w-200 items-center justify-center gap-10 p-3 fixed bg-white rounded-2xl outline-[#00A79B] ">

         
              <div className="flex flex-col gap-15 w-90">
                <div className="flex flex-col items-center justify-center ">
                  <p className="text-[#00A79B] text-4xl">download our app</p>
                  <p className="text-2xl">
                    your health's new best <br></br>friend is just a tap away.
                  </p>
                  <p className="xl">
                    "not just an app,it's a promise<br></br> from mom."
                  </p>
                </div>

                <div className="flex flex-col gap-5 ">
                  <div className="outline-1 flex w-45 items-center justify-center rounded-sm hover:bg-[#00A79B] outline-[#00A79B] p-1">
                    <img src="/Home/googleplay.png" alt=" google play button" className="w-8 h-8" />
                    <div>
                      <p className="text-[#00A79B] text-xl hover:text-white ">Get It On <br></br>Google Play</p>
                    </div>
                  </div>
                  <div className="outline-1 flex w-45 items-center justify-center rounded-sm hover:bg-[#FADB14] outline-[#00A79B]">
                    <img src="/Home/apple.png" alt=" google play button" className="w-8 h-8" />
                    <div>
                      <p>Download on the</p>
                      <p className="text-2xl">App Store</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-100">
                <img src="/Home/twomobiles.png" alt="two mobiles" />
                <div>
                  <img src="/Home/twomobiles.png" alt="two mobiles" className="h-72" />
                </div>
                <div>
                  <button className='text-[#00A79B] cursor-pointer w-10 h-10 relative -top-45 -right-7 bg-white rounded-full' onClick={() => setDownloadApp(false)}>
                    <ImCancelCircle className='w-10 h-10' />
                  </button>
                </div>
              </div>
              </div>
          </motion.div>}
        </AnimatePresence>
        );
};

        export default DownloadApp;
