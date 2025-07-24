import React from 'react'

function TalentedTeam() {
  return (
    <div className=' bg-white h-110 p-20 text-center justify-center  m-auto '>
        <div className=' w-[50%]  m-auto '>
        <div className='mb-10'>
            <h2 className="font-bold text-[65px] text-[#00A79B]">talented team</h2>
            <h5 className="text-[30px] font-normal  ">real people with a passion for healing here to make your health journey easier</h5>
        </div>
        <div className='flex relative  '>
            <div className='z-0 absolute ml-20'><img src="/Home/teamPerson1.jpg" alt="person1"  /></div>
            <div className='z-10 absolute ml-40'><img src="/Home/teamPerson2.jpg" alt="person2"  /></div>
            <div className='z-20 absolute ml-60'><img src="/Home/teamPerson3.jpg" alt="person3" /></div>
            <div className='z-30 absolute ml-80 cursor-pointer'><img src="/Home/plus.jpg" alt="plus symbol" /></div> 
        </div>
    </div>
    </div>
  )
}

export default TalentedTeam