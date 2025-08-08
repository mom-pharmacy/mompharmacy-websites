import React from 'react'
import Footercards from './footerComponent';
import AppIcon from '../../../public/Home/appicon.png'
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footers = () => {
    return (
        <div className='px-5 lg:p-5 xl:p-5 bg-linear-to-r/hsl from-[#01a69b] to-[#01a69b] flex flex-col'>
            <div className='hidden lg:block md:block xl:block'>
                <Footercards />
            </div>

            <div className='flex justify-between lg:p-10 lg:flex-row flex-col'>
                <div className=''>
                    <img src={AppIcon} alt="app logo" className='lg:w-35 lg:h-35 w-25 h-25' />
                    <p className="text-white py-5 text-lg">&copy;2025 mompharmacy<br />&nbsp;&nbsp;&nbsp;all rights reserved</p>

                </div>

                <div>
                    <div className='flex gap:5 lg:flex-row flex-col '>
                        <div className='p-1'>
                            <p className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] lg:mb-3 '>contact info</p>
                            <div className='text-white text-lg'>
                                <button className='cursor-pointer flex items-center lg:p-2 '><img src="/Home/phone.jpg" alt="call icon" className='size-8' /><a href="tel:+91 7702068334">+91 7702068334</a> </button>
                                <button className='cursor-pointer flex items-center lg:p-2'><img src="/Home/email.jpg" alt="mail icon" className='size-8' /> <a href="mailto:Ps@mompharmacy.in">Ps@mompharmacy.in</a></button>
                            </div>
                        </div>

                        <div>
                            <p className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] lg:mb-3 '>our location</p>

                            <button className='cursor-pointer flex items-center gap-3 mb-3 w-80 text-white'>
                                <img src="/Home/locationSymbol.jpg" alt=" location icon" className='size-9 animate-pulse' />
                                <span className='text-start'>100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </span>
                            </button>

                        </div>

                    </div>
                    <div className='py-10'>
                        <ul className='flex justify-center text-white'>
                            <li className='mx-5'>terms & conditions</li>
                            <li className='mx-5' >privacy policy</li>
                            <li className='mx-5'>cookies settings</li>
                        </ul>
                    </div>

                </div>


                <div>
                    <div className='bg-white w-90 p-3 rounded-xl h-auto'>
                        <p className="text-[#00A79B] text-xl font-bold">stay in the loop!</p>
                        <p className='text-xs py-1'>
                            {" "}
                            Subscribe to our newsletter and never miss updates, special
                            promotions, or tips to improve your lifestyle!
                        </p>
                        <div className="flex flex-row gap-3 py-2">
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
                    </div>
                    <div className='flex py-5 ml-15'>
                        <div>
                            <img src="/Home/footerPillman.jpg" alt="footerpillman " className='xl:w-30 md:w-25 sm:w-20' />
                        </div>
                        <div>

                            <h2 className='text-[20px] font-medium text-[#FADB14] text-start mb-3'>follow us on</h2>
                            <div className='flex gap-4'>
                                <FaFacebook className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125" />
                                <a href="https://www.linkedin.com/company/mompharmacy/" target='blank'><FaLinkedin className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125" /></a>
                                <FaInstagram className="size-8 rounded-full bg-white text-[#00A79B] hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transform hover:bg-[#FADB14]  transition duration-500 hover:scale-125" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Footers;