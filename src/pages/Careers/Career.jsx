import React from 'react'
import Welcome from '../../components/Careers/Welcomepage'
import Work from '../../components/Careers/work'
import Applynow from '../../components/Careers/applynow'
import CareerProgram from '../../components/Careers/CareerProgram'
import OpenPositions from '../../components/Careers/OpenPositions'
// import Animation from "../../components/Careers/animation"
import Review from "../../components/Careers/Review"
export const Career = () => {
  return (
    <div className='overflow-x-clip'>
        <Welcome/>
        <Work />
        <Applynow />
        <CareerProgram />
        {/* <Review/> */}
        
        <OpenPositions />

        {/* <Animation /> */}
        {/* <AllJobs /> */}
    </div>
  )
}
