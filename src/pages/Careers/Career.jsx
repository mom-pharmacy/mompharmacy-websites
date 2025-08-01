import React from 'react'
import Welcome from '../../components/Careers/Welcomepage'
import Work from '../../components/Careers/work'
import Applynow from '../../components/Careers/applynow'
import CareerProgram from '../../components/Careers/CareerProgram'
import OpenPositions from '../../components/Careers/OpenPositions'
// import Animation from "../../components/Careers/animation"

export const Career = () => {
  return (
    <div className='overflow-x-clip'>
        <Welcome/>
        <Work />
        <Applynow />
        <CareerProgram />
      
        
        <OpenPositions />

        {/* <Animation /> */}
        {/* <AllJobs /> */}
    </div>
  )
}
