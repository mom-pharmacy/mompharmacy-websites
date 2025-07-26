import React ,{useState} from 'react'

function TalentedTeam() {

  const [counterOn , setCounterOn] =useState(false) 

  return (
    <div class="delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0" data-taos-offset="400">
      <div className=' bg-white h-110 p-20 text-center justify-center  m-auto '>
        <div className=' xl:w-[50%] md:w-[80%] w-[100%]  m-auto '>
        <div className='mb-10'>
            <h2 className="font-bold xl:text-[65px] md:text-[55px] text-[35px] text-[#00A79B]">talented team</h2>
            <h5 className="xl:text-[30px]  md:text-[25px] font-normal  ">real people with a passion for healing here to make your health journey easier</h5>
        </div>
        <div >
          <div className='flex relative  '>
            <div className='z-0 absolute xl:ml-20 md:ml-20 ml-0 xl:w-100 w-30'><img src="/Home/teamPerson1.jpg" alt="person1"  /></div>
            <div className='z-2 absolute xl:ml-40 md:ml-40 ml-10  xl:w-100 w-30'><img src="/Home/teamPerson2.jpg" alt="person2"  /></div>
            <div className='z-3 absolute xl:ml-60 md:ml-60 ml-20  xl:w-100 w-30'><img src="/Home/teamPerson3.jpg" alt="person3" /></div>
            <div className='z-4 absolute xl:ml-80 md:ml-80 ml-30  xl:w-100 w-30 cursor-pointer'><img src="/Home/plus.jpg" alt="plus symbol" /></div> 
        </div>
          <div>
            <h2 className="text-[50px] font-bold text-[#00A79B]">
              {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
              +
            </h2>
        </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default TalentedTeam