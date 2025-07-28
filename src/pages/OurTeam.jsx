import React from 'react'
import Founder from '../components/OurTeam/founder'
import Departments from '../components/OurTeam/Departments'
import MomsDesk from '../components/AboutUs/momsdesk'
import Maincard from '../components/OurTeam/Maincard'

export default function OurTeam() {
  return (
    <div>
      <Maincard/>
        <Founder/>
        <Departments/>
      <MomsDesk/>
    </div>
  )
}
