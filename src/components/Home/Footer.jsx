import React from 'react'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import {FaLinkedin } from "react-icons/fa6";
import {FaInstagram } from "react-icons/fa6";
import Footercards from './footerComponent';

function Footer() {
    return (
     <div className='p-5 lg:p-0 xl:p-0 bg-linear-to-r/hsl from-[#01a69b] to-[#01a69b] '>
        <div className='hidden lg:block xl:block'>
        <Footercards/>
        </div>
          <div className=' grid grid-cols-1 gap-4 md:gap-2 md:grid-cols-2 mt-10 sm:gap-y-10 xl:grid-cols-6 xl:gap-10 text-[16px] text-white '>
           
            <div>
                <Link to='/'><img src="/Home/appicon.png" alt="mompharmacy logo" className='h-45 w-45 md:h-30 md:w-30'/></Link>
                <h2 className='text-white font-bold text-[30px ] lg:text-center sm:text-start xl:ml-auto lg:ml-auto md:ml-13 ml-13 '></h2>
                <p className='ml-6'>&copy;2025 mompharmacy<br/>&nbsp;&nbsp;&nbsp;all rights reserved</p>
            </div>
            <div className='xl:col-span-1'>
                
                <ul className=' xl:col-span-2'>
                    <li><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3 '><h2>contact info</h2></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 '><img src="/Home/phone.jpg" alt="call icon" className='size-8' /><a href="tel:+91 7702068334">+91 7702068334</a> </button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 '><img src="/Home/email.jpg" alt="mail icon" className='size-8' /> <a href="mailto:Ps@mompharmacy.in">Ps@mompharmacy.in</a></button></li>
                    {/* <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/locationSymbol.jpg" alt=" location icon" className='size-8 animate-pulse' /> <span className='text-start'>100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </span></button></li> */}
                </ul>
                <div className='absolute'>
                    <ul className='relative top-115 lg:top-0 md:mb-15 flex gap-4 mt-10 justify-center m-auto'>
                        <li className='mx-5'>terms & conditions</li>
                        <li className='mx-5' >privacy policy</li>
                        <li className='mx-5'>cookies settings</li>
                    </ul>
                </div>
            </div>
            <div className='xl:col-span-2'>
                <ul className=' xl:col-span-2'>
                    <li><button className='cursor-pointer text-center lg:mt-0 text-[25px] font-medium text-[#FADB14] mb-3 '><h2>our location</h2></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/locationSymbol.jpg" alt=" location icon" className='size-9 animate-pulse' /> <span className='text-start'>100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </span></button></li>
                </ul>
            </div>
            <div className='xl:col-span-2'>
                 <div className="text-black text-[15px] justify-end ">
                    <motion.div
                        className="w-80 lg:w-110 xl:w-110 h-auto border-4 border-[#00A79B] bg-white rounded-3xl px-4 py-4 gap-2 flex flex-col justify-center"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 20px rgba(0,0,0,0.6)",
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <h1 className="text-[#00A79B] text-xl font-bold"> stay in the loop!</h1>
                        <h1 className='text-sm'>
                            {" "}
                            Subscribe to our newsletter and never miss updates, special
                            promotions, or tips to improve your lifestyle!
                        </h1>
                        <div className="flex flex-row gap-3 ">
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
                     <div className='flex justify-end mt-5'>
                <img src="/Home/footerPillman.jpg" alt="footerpillman " className='xl:w-30 md:w-25 sm:w-20' />
            </div>
                    <div className='mr-25 mt-10'><h2 className='text-[20px] font-medium text-[#FADB14] text-start mb-3'>follow us on</h2>

                    <div className='flex gap-4 '>
                        <FaFacebook className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125" />
                        <a href="https://www.linkedin.com/company/mompharmacy/" target='blank'><FaLinkedin className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125"  /></a>
                        <FaInstagram className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125" />
                    </div>
                </div>
               
               
                </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-between py-1 xl:px-1 md:px-1 xl:gap-40 md:gap-5'>
           <div> 
            <h2 className='text-base text-[#00A79B]   '>© 2025 mom pharmacy||all rights reserved</h2>
            </div>
           <div >
                <ul className='flex flex-wrap xl:gap-10 gap-4 md:gap-4 '>
                    <li className='cursor-pointer text-base text-[#00A79B]  hover:underline hover:text-[#FADB14] '><button >terms & conditions</button></li>
                    <li className='cursor-pointer text-base text-[#00A79B] hover:underline hover:text-[#FADB14] '><button >privacy policy</button></li>
                    <li className='cursor-pointer text-base text-[#00A79B] hover:underline hover:text-[#FADB14] '><button >cookies</button></li>
                    <li className='cursor-pointer text-base text-[#00A79B] hover:underline hover:text-[#FADB14] '><button >settings</button></li>
                </ul>
            </div>
        </div>
     </div>
    )
}

export default Footer