import React from 'react'
import Carousel from '../components/AboutUs/carousel'
import Mission from '../components/AboutUs/Mission'
import MomsDesk from '../components/AboutUs/momsdesk'
import WhyChooseUsBanner from '../components/AboutUs/whytochoose'

function AboutUs() {
    return (
        <>
            <Carousel />
            {/* Add a gap class like gap-y-20 or gap-20 */}
            <div className='flex pb-10 flex-col gap-y-20'>
                <Mission />
                <WhyChooseUsBanner />
                <MomsDesk />
            </div>
        </>
    )
}

export default AboutUs