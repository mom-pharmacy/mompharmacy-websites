import { MdOutlineClose } from "react-icons/md";
import {motion} from 'framer-motion'

import NavButton from "../Attachments/NavButton"
import { RenderLink } from "../Attachments/Navbar";
import {navbarList} from '../Attachments/Navbar'
import NavbarItem from "./NavbarItem";


function NavModal({showLink , setShowLink , setShowModal}){
    return <motion.div initial={{x:500 , display:"none"}} animate={{x:0 , display:"block"}} exit={{x:500}} transition={{duration:0.4 ,}} className="fixed z-10 top-0 left-0 w-[400px] sm:w-full h-full bg-[#00A79B]">
        <div className="p-10 flex justify-between">
            <NavButton onClick={()=>setShowModal(false)}>
                <p>close</p> <span className="mt-1"><MdOutlineClose/></span>
            </NavButton>
            <RenderLink showLink={showLink} setShowLink={setShowLink}/>
        </div>
        <div className="flex flex-col gap-4 items-center" >
         <ul className="flex flex-col gap-5 w-fit justify-center items-center text-3xl">
                    {navbarList.map(item=>item.imageUrl==null && <NavbarItem image={item.imageUrl} title={item.title} key={item.id} link={item.link} />)}
                </ul>
        </div>
    </motion.div>
}

export default NavModal