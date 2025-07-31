import React, { useRef } from "react";
import Revew from "./ReviewCard";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Revews() {
  const Ref = useRef(null);
  // const {scrollYprogress}=useScroll({target:Ref})
  // const x=useTransform(scrollYprogress,[0,1],["0%","-55%"])
  return (
    <div className="">
      <motion.div
        className="flex space-x-8 scroll-auto"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <Revew name="Uday" img ="/dev1.png" time="2h ago" rating={4} revew="I am currently working as a full-stack developer at Mom-Pharmacy, I am a core member and part of a team of 28. Every colleague is very approachable and nice which is important at work." />
        <Revew name="J.Adarsh" img ="/dev1.png"time="2h ago" rating={4} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        <Revew name="Poojita" img ="/dev1.png" time="1h ago" rating={3}  revew="Working as a Full Stack Developer at mompharmacy has been an incredibly rewarding experience. Our mission to deliver medicines to people within minutes drives everything we do, and it's inspiring to see the dedication and passion of the entire team working towards that goal. It's not just a job it's meaningful work, and I'm proud to contribute to it every day" />
        <Revew name="Pushpa" img ="/dev1.png" time="1day ago" rating={5}  revew="I am currently working as a full-stack developer at Mom-Pharmacy, I am a core member and part of a team of 28. Every colleague is very approachable and nice which is important at work."/>
        <Revew name="Chandu" img ="/dev1.png" time="2h ago" rating={4}  revew="I am currently working as a full-stack developer at Mom-Pharmacy, I am a core member and part of a team of 28. Every colleague is very approachable and nice which is important at work."/>
        <Revew name="Gnaneswar" img ="/dev1.png" time="2h ago" rating={4} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        <Revew name="Shiva" img ="/dev1.png" time="1h ago" rating={3} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        
      </motion.div>

      <motion.div
       className="flex space-x-8 scroll-auto"
        animate={{ x: ["-70%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }} 
        >
        <Revew name="Charan" time="1day ago" rating={5} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        <Revew name="RaviTeja" time="2h ago" rating={4} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        <Revew name="Tejaswini" time="1h ago" rating={3} revew="I am currently working as a full-stack developer at Mom-Pharmacy, I am a core member and part of a team of 28. Every colleague is very approachable and nice which is important at work." />
        <Revew name="Akhila" time="1day ago" rating={5} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
        <Revew name="Supriya" time="1day ago" rating={5} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>

        <Revew name="Navya" time="1day ago" rating={5} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>

        <Revew name="Rohith" time="1day ago" rating={5} revew="I am currently working as a full-stack developer at Mom-Pharmacy, I am a core member and part of a team of 28. Every colleague is very approachable and nice which is important at work." />

        <Revew name="Akhila" time="1day ago" rating={5} revew="MomPharmacy makes getting medicines quick and easy. The app is simple, delivery is fast, and the service is reliable. Great for everyday healthcare needs!.."/>
      </motion.div>
    </div>
  );
}