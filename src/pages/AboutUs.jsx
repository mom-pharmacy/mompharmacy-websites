import React from 'react'
import Carousel from '../components/AboutUs/carousel'
// import Mission from '../components/AboutUs/Mission'
import MisionVision from '../components/AboutUs/MisionVision'
import MomsDesk from '../components/AboutUs/momsdesk'
import WhyChooseUsBanner from '../components/AboutUs/whytochoose'
import As from '../components/AboutUs/filpCard'
import MomLogo from "../components/Home/momLogo"; 
import BacktoBottom from '../components/Home/backtobotton'  

function AboutUs() {
    return (
        <>
             <BacktoBottom />
            <Carousel />
            <div className='flex pb-10 flex-col gap-y-20'>
                <MisionVision />
                <As />
                <WhyChooseUsBanner />
                <MomsDesk />
                <MomLogo />
            </div>
        </>
    )
}

export default AboutUs