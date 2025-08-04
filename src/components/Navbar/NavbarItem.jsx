import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router'
import { Tooltip } from 'react-tooltip'

const NavbarItem = ({ title, image, link, setShowModal, tooltip }) => {
    const [underline, setUnderline] = useState(false)

    const navigate = useNavigate()

    const { pathname } = useLocation()

    console.log(pathname)

    function handleNavigation() {
        navigate(link)
        setShowModal(false)
    }

    return (
        <li className='text-white'>

            <button onClick={handleNavigation}>
                <div

                    data-tooltip-id={`react-tooltip-${link}`}
                    data-tooltip-content={tooltip}

                >
                    {title &&
                        <div>

                            <div className='flex flex-col items-center' onMouseEnter={() => setUnderline(true)} onMouseLeave={() => setUnderline(false)}>
                                {pathname == link ? <p className='text-amber-300 underline'>{title}</p> : <><p className=' duration-75 ease-in cursor-pointer'>{title}</p><AnimatePresence mode='wait'>
                                    {underline && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }} transition={{ duration: 0.2 }} className='border-white border-[1px]'></motion.div>}
                                </AnimatePresence></>}
                            </div>

                        </div>
                    }
                    {image && <img src={image} alt={title} className='w-24 h-20' />}
                </div>
            </button>
            <Tooltip id={`react-tooltip-${link}`} style={{ backgroundColor: "#FADB14", color: "#444444", borderRadius: "10px", width:"120px",fontSize:"13px",textAlign:"center",padding:0}} />
        </li>
    )
}

export default NavbarItem
