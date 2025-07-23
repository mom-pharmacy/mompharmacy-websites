import React from 'react'
import Medicine from "../../assets/contactUs/medicine.gif"

export default function TopComponent() {
  return (
    <div className='bg-[#00A79B] text-white h-screen w-full text-center flex flex-col items-center justify-center md:h-screen md:w-full sm:h-screen sm:w-full'>
        <h1 className='text-white text-7xl font-bold pt-5'> have any innovative</h1>
        <h1 className='text-yellow-300 text-7xl font-bold p-5'>idea, suggestion</h1>
        <h1 className='text-white text-7xl font-bold p-5'>or grievances</h1>

        <div className='flex gap-5 mt-10'>
          <button className='bg-white p-3 text-black text-xl font-bold rounded-full'>get in touch</button>
          <button className='bg-white p-3 text-black text-xl font-bold rounded-full'>give feedback</button>
        </div>
        <img src={Medicine} alt="medicine" className='relative bottom-60 left-100' />

    </div>
  )
}
