import { useEffect, useState } from "react"
import {AnimatePresence, motion} from 'framer-motion'
import NavbarItem from "../Navbar/NavbarItem"
import { IoIosArrowDropdown } from "react-icons/io";
import NavButton from "./NavButton";
import { RiMenuFold2Line } from "react-icons/ri";
import NavModal from "../Navbar/NavModal";

export const navbarList = [
    {
        id:1 , 
        title:"home" , 
        imageUrl:null  ,
        link:"/"
    },
    {
        id:2 , 
        title:"about us" , 
        imageUrl:null , 
        link:"/about"

    },
    {
        id:3 , 
        title:"our team" , 
        imageUrl:null  ,
        link:"/ourteams"  
    },
    {
        id:4 , 
        title:"" , 
        imageUrl:"/Navbar/logo.png" ,
        link:"/ourteams"  
    },
    {
        id:5 , 
        title:"careers" , 
        imageUrl:null   ,
        link:"/jobdetails"   
    },
    {
        id:6 , 
        title:"investors" , 
        imageUrl:null   ,
        link:"/investors"   
    },
    {
        id:7 , 
        title:"contact us" , 
        imageUrl:null   ,
        link:"/contactus"   
    },
    // {
    //     id:8 , 
    //     title:"animation" , 
    //     imageUrl:null   ,
    //     link:"/animation"   
    // },
    
    
]

const languageList = [
    {
        id:1 ,
        title:"english"
    },
    {
        id:2 ,
        title:"hindi"
    },
    {
        id:3,
        title:"telugu"
    },
    {
        id:4,
        title:"tamil"
    },
    {
        id:5,
        title:"urdu"
    },
]

function RenderLanguage({language , setActiveLanguage , setShowLanguages}){
    
    function handleChangeLanguage(){
        setActiveLanguage(language)
        setShowLanguages(false)
    }

    return <li className="flex flex-col justify-stretch">
        <button className="border-2 p-1 rounded-2xl text-center" onClick={handleChangeLanguage}>
        {language.title}
        </button>
    </li>
}


export function RenderLink({showLink , setShowLink}){
    return <div className="bg-white text-black py-2 px-3 rounded-full font-semibold flex flex-col items-center cursor-pointer" onMouseEnter={()=>setShowLink(true)} onMouseLeave={()=>setShowLink(false)} >
            <p>momp.in</p>
            <AnimatePresence>
            {showLink && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4  , ease:"easeInOut"}} className="absolute mt-8 text-white">
                <p>mompharmacy.in</p>
            </motion.div>}
            </AnimatePresence>
        </div>
}


function Navbar(){

    // states for navbar 
    const [showLink , setShowLink] = useState(false)
    const  [showLanguages , setShowLanguages] = useState(false)
    const [activeLanguage , setActiveLanguage] = useState(languageList[0])
    const [inactiveLanguages , setInactiveLanguages] = useState([])
    const [showModal , setShowModal] = useState(false)

    useEffect(()=>{

        // function for filter for in active languages
        function handleActiveLanguage(){
            const remainingLanguages = languageList.filter(item=>item.id!==activeLanguage.id)
            setInactiveLanguages(remainingLanguages)
        }
         handleActiveLanguage()
    }, [activeLanguage])

    return <div className="bg-[#00A79B] px-2 md:px-10 py-2 z-10 flex justify-between items-center sticky top-0">

        {/* modal for mobilel and smaller devices view */}
        <AnimatePresence mode="wait">
        {showModal && <NavModal setShowModal={setShowModal} showLink={showLink} setShowLink={setShowLink}  />}
        </AnimatePresence>
        {/* rendre link in home page  */}
        <div className="md:block hidden">
        <RenderLink setShowLink={setShowLink} showLink={showLink}/>
        </div>

        <div className="md:hidden">
            <NavButton onClick={()=>setShowModal(true)}>
                <div className="flex items-center gap-1 ">
                    <p>menu</p> <span className="mt-1"><RiMenuFold2Line/></span>
                </div>
            </NavButton>
        </div>

        {/* showing logo in mobile and tablets */}
        <div className="md:hidden">
            <img src="/Navbar/logo.png" alt="mom pharmacy" className="w-30 h-20" />
        </div>

        {/* navigation links  */}
        <div className="items-center hidden md:flex">
            <ul className="flex items-center gap-6 font-[32px]" >
                {navbarList.map(item=><NavbarItem key={item.id} title={item.title} image={item.imageUrl} link={item.link}/>)}
            </ul>
        </div>

        {/* Language selection */}
        <div className="flex flex-col items-center">
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold flex items-center gap-1 hover:bg-amber-300 ease-in-out duration-100 min-w-28 justify-center" onClick={()=>setShowLanguages(!showLanguages)}>{activeLanguage.title}<IoIosArrowDropdown className="mt-1"/></button>
            {showLanguages && <div className="absolute mt-10 bg-black/75  text-white p-3 rounded-2xl">
                <ul className="flex flex-col gap-2">
                    {inactiveLanguages.map(item=><RenderLanguage key={item.id} setShowLanguages={setShowLanguages} language={item} setActiveLanguage={setActiveLanguage}/>)}
                </ul>
            </div>}
        </div>
    </div>
}

export default Navbar