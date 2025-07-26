import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <div className='bg-[#00A79B] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 sm:gap-y-10 xl:grid-cols-7 xl:gap-10 py-6 px-6 text-[20px] text-white text-start '>
            <div>
                <img src="/Home/logo.jpg" alt="mompharmacy logo" />
                <h2 className='text-white font-bold text-[30px ] lg:text-center sm:text-start lg:ml-auto md:ml-11 '>pharmacy</h2>
            </div>
            <div>
                <ul>
                    <li ><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3'><h2>quick links</h2></button></li>
                    <li ><button class="relative text-white hover:text-[#FADB14] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-[#FADB14] before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-200 after:absolute after:bg-[#FADB14] after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                        home</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>about us</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>our team</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>careers</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>investors</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>contact us</button></li>
                </ul>
            </div>
            <div>
                <ul >
                    <li><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3'><h2>legal</h2></button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>terms & conditions</button></li>
                    <li><button className='cursor-pointer text-start  hover:underline hover:text-[#FADB14] '>privacy policy</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>cookies</button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>settings</button></li>
                </ul>
            </div>
            <div className='xl:col-span-2'>
                <ul className=' xl:col-span-2'>
                    <li><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3 '><h2>contact info</h2></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/phone.jpg" alt="call icon" className='size-10' /><a href="tel:+91 7702068334">+91 7702068334</a> </button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/email.jpg" alt="mail icon" className='size-10' /> <a href="mailto:Ps@mompharmacy.in">Ps@mompharmacy.in</a></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/locationSymbol.jpg" alt=" location icon" className='size-10 animate-pulse' /> <span className='text-start'>100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </span></button></li>
                </ul>
            </div>
            <div className='col-span-2'>
                 <div className="text-black text-[20px] justify-end ">
                    <motion.div
                        className="w-full h-40 border-4 border-[#00A79B] bg-white rounded-3xl px-3 py-2  items-center justify-center"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <h1 className="text-[#00A79B] text-2xl font-bold"> stay in the loop!</h1>
                        <h1 className='text-sm'>
                            {" "}
                            Subscribe to our newsletter and never miss updates, special
                            promotions, or tips to improve your lifestyle!
                        </h1>
                        <div className="flex flex-row gap-3 mt-3">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="enter your email"
                                className="w-full h-10 px-4 py-1  border-2 border-[#00A79B] rounded-md shadow-sm "
                            />
                            <button className="bg-[#00A79B] border-[#00A79B]  border-1 rounded-xl  px-3 py-1 h-10 w-30 transition-transform duration-500 ease-in-out transform hover:scale-110">
                                <h1 className="mb-5 text-xl text-white"> submit</h1>
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className='flex justify-between'>
                    <div><h2 className='text-[25px] font-medium text-[#FADB14] text-start mb-3'>follow us on</h2>

                    <div className='flex gap-4 '>
                        <img src="/Home/faceBook.jpg" alt="facebook logo" className="hover:animate-pulse" />
                        <img src="/Home/linkedin.jpg" alt="facebook logo" className="hover:animate-pulse" />
                        <img src="/Home/instagram.jpg" alt="facebook logo" className="hover:animate-pulse" />
                    </div>
                </div>
               
                <div>
                <img src="/Home/footerPillman.jpg" alt="footerpillman " className='xl:w-40 md:w-40 sm:w-30' />
            </div>
                </div>
            </div>
            

        </div>
    )
}

export default Footer