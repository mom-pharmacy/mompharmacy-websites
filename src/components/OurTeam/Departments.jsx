import React from 'react'
import CardComp from './CardComp'

export default function Departments() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center flex-col">
            <h2 className='text-[#00A79B] text-5xl font-bold'> Departments </h2>
            <p className='text-2xl'>Departments across</p>
      
            <div className="flex p-8 gap-10">
             <CardComp name="Developers" />
             <CardComp name="Designers" />
             <CardComp name="Testers" />
            </div>
          </div>
      
    </div>
  )
}
