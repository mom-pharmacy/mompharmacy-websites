import React, { useState } from 'react'
import EarlyAccessForm from './EarlyAccessForm'
// import { Link } from 'react-router'

const EarlyAccess = () => {
  const [earlyaccess,setEarlyAccess]=useState(false)
  const totop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <>
    <>
    {earlyaccess && <div className='fixed  top-0 left-0'></div>}
    <EarlyAccessForm earlyaccess={earlyaccess} setEarlyAccess={setEarlyAccess}/>
    </>
    <div className='flex items-center justify-between fixed bottom-0 w-full p-6'>
      <button className='outline-1 px-4 py-2 bg-[#00A79B] border-white border-2 rounded-full font-bold text-white hover:text-black  hover:bg-[#FADB14]' onClick={()=>{setEarlyAccess(true)}}>get early access</button>
     <button className='outline-1 px-4 py-2 bg-[#444444] text-white rounded-full hover:text-black hover:bg-[#FADB14]' onClick={totop}>back to top</button>
    </div>
    </>
  )
}

export default EarlyAccess