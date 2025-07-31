import {motion, useScroll, useTransform} from 'framer-motion'
import BannerHeart from "../../assets/AboutUs/bannerHeart.png"

const sliderAnimationQuotes = [
    {
        id:1 , 
        title:'Medicine is need'

    },
    {
        id:2 , 
        title:'care and cure' 
    },
    {
        id:3 , 
        title:"medicine & more on minutes"
    },
    {
        id:4 , 
        title:"mom pharmacy"
    },
    {
        id:5 , 
        title:"care today cure tommorrow"
    },
    {
        id:6 , 
        title:"always together for better health"
    }
]


function SlideBarAnimation(){

    const {scrollYProgress} = useScroll()

    const x = useTransform(scrollYProgress , [0 ,1] , ["0%" , "-100%"])

    return <motion.div style={{x}} className="flex bg-[#dcfffb] px-2 py-5 w-fit overflow-hidden gap-6 whitespace-nowrap font-semibold text-3xl ">
        {sliderAnimationQuotes.map(item=><div key={item.id} className='flex gap-5 items-center justify-center'>
        
            <img src={BannerHeart} alt="img" className='h-5 w-7 ml-5 '/>
          <p className="text-[#444444]" >  {item.title} </p>
            </div>)}
    </motion.div>
}

export default SlideBarAnimation