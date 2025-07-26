import React from 'react'
import Welcome from '../../components/Careers/Welcomepage'
import Work from '../../components/Careers/work'
import Applynow from '../../components/Careers/applynow'
import CareerProgram from '../../components/Careers/CareerProgram'
import OpenPositions from '../../components/Careers/OpenPositions'
import AllJobs from '../../components/Careers/AllJobs'
export const Career = () => {
  return (
    <div className='overflow-x-clip'>
        <Welcome/>
        <Work />
        <Applynow />
        <CareerProgram />
        <OpenPositions />
        {/* <AllJobs /> */}
    </div>
  )
}
