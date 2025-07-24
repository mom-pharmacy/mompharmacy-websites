import React from 'react'
import TextComp from './textComp'
import ImageComp from './ImageComp'

export default function Leadershipcom(propes) {
  return (
     <div className=' flex h-screen items-center flex-col '>
          <div className=''>
                  <h1 className='m-10 text-5xl text-[#00A79B] font-semibold text-center '>Transforming Healthcare Policy <br/> Through Leadership</h1>
    
          </div>
          <div className='mx-auto h-110 w-250 rounded-2xl border-2 border-[#00A79B] flex items-center justify-between'>
                        <div className='m-15'><ImageComp img="/dev1.png"></ImageComp></div>

            <div className='m-10'><TextComp text=" to become the most trusted global name in doorstep
                  ealthcare, delivering not just medicines, but peace of mind, through technology that feels like
                   mother's care: fast, reliable, and full of heart.to become the most trusted global name in doorstep 
                  ealthcare, delivering not just medicines, but peace of mind, through technology that feels like a mother's 
                  are: fast, reliable, and full of heart.to become the most trusted global name in doorstep healthcare, delivering
                  not just medicines, but peace of mind, through technology that feels like a mother's care: fast, reliable, 
                  and full of heart.to become the most trusted global name in doorstep healthcare, delivering not just medicines, 
                  but peace of mind, through technology that feels like a mother's care: fast, reliable, and full of heart.
                  to become the most trusted global name in doorstep healthcare, delivering not just medicines, but peace of mind"></TextComp></div>

          </div>
        </div>
  )
}
