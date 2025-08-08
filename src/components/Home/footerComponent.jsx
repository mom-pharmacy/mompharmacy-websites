import React, { useState } from 'react';
import Hear from '../../assets/Footer/hear.svg';
import Book from '../../assets/Footer/book.svg';
import Career from '../../assets/Footer/career.svg';
import Investors from '../../assets/Footer/investors.svg';
import Team from '../../assets/Footer/team.svg';
import Contact from '../../assets/Footer/contact.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { GiHeartPlus } from "react-icons/gi";

const footerList = [
    {
        id: 1,
        title: "welcome",
        imageUrl: Hear,
        tooltip: "welcome to mom pharmacy",
        darkImg: '/Navbar/heart-dark.png'
    },
    {
        id: 2,
        title: "aboutus",
        imageUrl: Book,
        tooltip: "explore page to know about us",
        darkImg: '/Navbar/about-dark.png'
    },
    {

        id: 3,
        title: "ourteam",
        imageUrl: Team,
        tooltip: "meet our incredible team",
        darkImg: '/Navbar/tesm-dark.png'
    },
    {
        id: 4,
        title: "careers",
        imageUrl: Career,
        tooltip: "make your career grow with us",
        darkImg: '/Navbar/career-dark.png'
    },
    {
        id: 5,
        title: "investors",
        imageUrl: Investors,
        tooltip: "investors who loves business",
        darkImg: '/Navbar/investor-dark.png'
    },
    {
        id: 6,
        title: "contactus",
        imageUrl: Contact,
        tooltip: "contact for suggestions or grievances",
        darkImg: '/Navbar/contact-dark.png'
    },
];

const Footercards = () => {
    const [hoveredId, setHoveredId] = useState(false);

    return (
        <div className='flex w-full h-30 justify-around items-center gap-2'>
            {footerList.map((item) => (
                <motion.div key={item.id} className='flex flex-col justify-start bg-white  space-x-2 text-[#00a99d] p-2 pb-4 w-150 rounded-lg hover:bg-[#FADB14] hover:border-[#FADB14] cursor-pointer border border-transparent hover:text-black'
                    onHoverStart={() => setHoveredId(item.id)}
                    onHoverEnd={() => setHoveredId(false)}
                >
                    <div className='flex flex-col '>
                        <div className={`font-fredoka  font-semibold flex ${hoveredId === item.id ? 'text-black text-lg' : 'text-[#00a99d] text-xl'}`}>
                            <div className='flex-1 pr-5'>
                                {hoveredId === item.id ? item.tooltip : item.title}
                            </div>
                            <div className='flex flex-col gap-5'>
                                <FaArrowRightLong size={25} className={`${hoveredId === item.id ? 'text-black transition duration-500 -rotate-90' : 'text-[#00a99d] -rotate-30'}`} />
                                <motion.div className=''>
                                    {hoveredId === item.id ? <img src={item.darkImg} alt={item.title} className={`w-10 h-10 mt-2 ${hoveredId === item.id ? 'fill-black ' : 'fill-current'} hover:text-black`} /> : <img src={item.imageUrl} alt={item.title} className={`w-10 h-10 mt-2 ${hoveredId === item.id ? 'fill-black ' : 'fill-current'} hover:text-black`} />}

                                </motion.div>
                            </div>
                        </div>

                    </div>   
                </motion.div>

            ))}
        </div>

    )
}
export default Footercards;


