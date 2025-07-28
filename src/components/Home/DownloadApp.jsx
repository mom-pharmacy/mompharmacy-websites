import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'
import { ImCancelCircle } from "react-icons/im";


const DownloadApp = ({setDownloadApp,downloadapp}) => {
  return (
    <AnimatePresence mode="wait">
     { downloadapp &&<motion.div initial={{x:1500,display:"none"}} animate={{x:0,display:"flex"}} transition={{duration:0.2}} exit={{x:1500}} className="flex fixed h-screen w-screen justify-center z-1700">     
    <div className="flex outline-1 xl:w-200 xl:h-100 md:w-150 md:h-100  w-70 h-90 items-center justify-center gap-10 p-3 fixed bg-white rounded-2xl outline-[#00A79B] ">
        <div className="flex flex-col xl:gap-15 md:gap-6 gap-2 xl:w-90 md:w-60 w-45">
      <div className="flex flex-col items-center justify-center  ">
        <p className="text-[#00A79B] xl:text-4xl md:text-2xl text-xl">download our app</p>
        <p className=" xl:text-2xl md:text-xl text-sm">
          your health's new best <br></br>friend is just a tap away.
        </p>
        <p>
          "not just an app,it's a promise<br></br> from mom."
        </p>
      </div>

      <div className="flex flex-col gap-5  items-center ">
        <div className="outline-1 flex xl:w-65 md:w-45 w-30 items-center justify-center rounded-sm hover:bg-[#00A79B] outline-[#00A79B] p-1">
          <img src="/Home/googleplay.png" alt=" google play button" className="xl:w-8 xl:h-8 md:w-4 md:h-4 w-3 h-3"/>
          <div>
            <p className="text-[#00A79B] xl:text-2xl md:text-xl text-sm hover:text-white ">Get It On <br></br>Google Play</p>
          </div>
        </div>
        <div className="outline-1 flex xl:w-65 md:w-45 w-30 items-center justify-center rounded-sm hover:bg-[#FADB14] outline-[#00A79B]">
          <img src="/Home/apple.png" alt=" google play button" className="xl:w-8 xl:h-8 md:w-4 md:h-4 w-3 h-3"/>
          <div>
            <p className="xl:text-2xl md:text-xl text-sm "> Download On The <br></br>App Store</p>
          </div>
        </div>
      </div>
 </div>

      <div className="w-100">

      <div>
        <img src="/Home/twomobiles.png" alt="two mobiles" className="xl:h-72 md:h-65 h-55" />
      </div>
      <div>
          <button className='text-[#00A79B] cursor-pointer w-10 h-10 relative -top-70 -right-21  bg-white rounded-full hover:bg-[#FADB14] hover:text-black  md:-right-80 md:-top-80 xl:-right-94 xl:-top-84'  onClick={()=>setDownloadApp(false)}>
                        <ImCancelCircle className=' w-10 h-10'/>
                      </button>
      </div>
      </div>
    </div>
      </motion.div>}
    </AnimatePresence>
  );
};

export default DownloadApp;
