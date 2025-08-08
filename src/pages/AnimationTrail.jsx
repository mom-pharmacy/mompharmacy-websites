import { useTransform , motion, useScroll } from "framer-motion"
import { useEffect } from "react"

function AnimationTrail(){



const x  = useScroll(scrollX)

console.log(x)

    return <div>
        <motion.div>
            <img src="/Home/pill.png" alt="logo" />
        </motion.div>
           </div>
}

export default AnimationTrail