import React from 'react'
import Carousel from '../components/AboutUs/carousel'
import Mission from '../components/AboutUs/Mission'
import MomsDesk from '../components/AboutUs/momsdesk'
import WhyChooseUsBanner from '../components/AboutUs/whytochoose'

function AboutUs() {
    return (
        <>
            <Carousel />
            <Mission />
            <WhyChooseUsBanner />
            <MomsDesk />
        </>
    )
}

export default AboutUs