import {motion, useScroll, useTransform} from 'framer-motion'
import pharmacy from '../../assets/AboutUs/pharmacy.png'
import careandcure from '../../assets/AboutUs/careandcure.png'
import clock from '../../assets/AboutUs/clock.png'
import BannerHeart from '../../assets/AboutUs/bannerHeart.png'
const sliderAnimationQuotes = [
  {
    id: 1,
    title: "Medicine is need",
    image: careandcure,
  },
  {
    id: 2,
    title: "care and cure",
    image: careandcure,
  },
  {
    id: 3,
    title: "medicine & more on minutes",
    image: clock,
  },
  {
    id: 4,
    title: "mom pharmacy",
    image: BannerHeart,
  },
  {
    id: 5,
    title: "care today cure tommorrow",
    image: pharmacy,
  },
  {
    id: 6,
    title: "always together for better health",
    image: BannerHeart,
  },
  {
    id: 7,
    title: "Medicine is need",
    image: pharmacy,
  },
];


function SlideBarAnimation(){



    return <motion.div   
    animate={{ x: ["0%", "-40%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}  className="flex bg-[#dcfffb] px-2 animate-infinite-scroll w-fit py-5 overflow-hidden gap-6 whitespace-nowrap font-semibold text-2xl ">
        {sliderAnimationQuotes.map(item=><div key={item.id} className='flex gap-5 items-center justify-center'>
        
            <img src={item.image} alt="img" className='fh-5 w-7 ml-5  '/>
          <p className="text-[#444444]" >  {item.title} </p>
            </div>)}
    </motion.div>
}

export default SlideBarAnimation

