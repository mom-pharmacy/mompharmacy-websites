import {motion, useScroll, useTransform} from 'framer-motion'

const sliderAnimationQuotes = [
    {
        id:1 , 
        title:'/Medicine is need'

    },
    {
        id:2 , 
        title:'/care and cure' 
    },
    {
        id:3 , 
        title:"/medicine & more on minutes"
    },
    {
        id:4 , 
        title:"/mom pharmacy"
    },
    {
        id:5 , 
        title:"/care today cure tommorrow"
    },
    {
        id:6 , 
        title:"/always together for better health"
    }
]


function SlideBarAnimation(){

    const {scrollYProgress} = useScroll()

    const x = useTransform(scrollYProgress , [0 ,1] , ["0%" , "-100%"])

    return <motion.div style={{x}} className="flex flex-row bg-amber-300 px-2 py-5 w-fit overflow-hidden gap-6 whitespace-nowrap font-semibold text-3xl ">
        {sliderAnimationQuotes.map(item=><p className="" key={item.id}>{item.title}</p>)}
    </motion.div>
}

export default SlideBarAnimation