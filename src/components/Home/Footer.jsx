import React from 'react'

function Footer() {
    return (
        <div className='bg-[#00A79B] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 sm:gap-y-10 lg:grid-cols-7 lg:gap-10 py-6 px-6 text-[20px] text-white text-start '>
            <div>
                <img src="/Home/logo.jpg" alt="mompharmacy logo" />
                <h2 className='text-white font-bold text-[30px ] lg:text-center sm:text-start lg:ml-auto md:ml-11 '>pharmacy</h2>
            </div>
            <div>
                <ul>
                    <li><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3'><h2>quick links</h2></button></li>
                    <li><button className='cursor-pointer text-start hover:underline hover:text-[#FADB14] '>home</button></li>
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
            <div className='lg:col-span-2'>
                <ul className=' lg:col-span-2'>
                    <li><button className='cursor-pointer text-start text-[25px] font-medium text-[#FADB14] mb-3 '><h2>contact info</h2></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/phone.jpg" alt="call icon" className='size-10' /><a href="tel:+91 7702068334">+91 7702068334</a> </button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/email.jpg" alt="mail icon" className='size-10' /> <a href="mailto:Ps@mompharmacy.in">Ps@mompharmacy.in</a></button></li>
                    <li><button className='cursor-pointer flex items-center gap-3 mb-3 '><img src="/Home/locationSymbol.jpg" alt=" location icon" className='size-10 animate-pulse' /> <span className='text-start'>100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </span></button></li>
                </ul>
            </div>
            <div>
                <h2 className='text-[25px] font-medium text-[#FADB14] text-start mb-3'>follow us on</h2>

                <div className='flex gap-4 '>
                    <img src="/Home/faceBook.jpg" alt="facebook logo" className="hover:animate-pulse" />
                    <img src="/Home/linkedin.jpg" alt="facebook logo"  className="hover:animate-pulse"/>
                    <img src="/Home/instagram.jpg" alt="facebook logo" className="hover:animate-pulse"/>
                </div></div>
            <div>
                <img src="/Home/footerPillman.jpg" alt="footerpillman " className='lg:w-60 md:w-40 sm:w-30' />
            </div>

        </div>
    )
}

export default Footer