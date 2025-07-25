import React from 'react'
import Carousel from '../components/AboutUs/carousel'
import Mission from '../components/AboutUs/Mission'
import MomsDesk from '../components/AboutUs/momsdesk'
import WhyChooseUsBanner from '../components/AboutUs/whytochoose'
import As from '../components/AboutUs/3As'   

function AboutUs() {
    return (
        <>
            <Carousel />
            <div className='flex pb-10 flex-col gap-y-20'>
                <Mission />
                <As />
                <WhyChooseUsBanner />
                <MomsDesk />
            </div>
        </>
    )
}

export default AboutUs