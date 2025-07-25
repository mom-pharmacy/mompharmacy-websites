import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router'

const NavbarItem = ({ title, image , link }) => {
    const [underline, setUnderline] = useState(false)

    const {pathname} = useLocation()

    console.log(pathname)

    return (
        <li className='text-white'>

        <Link to={link}>
            {title &&
                <div className='flex flex-col items-center' onMouseEnter={() => setUnderline(true)} onMouseLeave={() => setUnderline(false)}>
                    {pathname==link?<p className='text-amber-300 underline'>{title}</p>:<><p className=' duration-75 ease-in cursor-pointer'>{title}</p><AnimatePresence mode='wait'>
                        {underline && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }} transition={{ duration: 0.2 }} className='border-white border-[1px]'></motion.div>}
                    </AnimatePresence></>}
                </div>
            }
            {image && <img src={image} alt={title} className='w-24 h-20' />}
            </Link>
        </li>
    )
}

export default NavbarItem
