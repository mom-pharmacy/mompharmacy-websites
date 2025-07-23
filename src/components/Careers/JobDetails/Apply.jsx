import React from 'react'
import share from '../../../assets/jobrole/share.svg'
import save from '../../../assets/jobrole/save.svg' 

export default function Apply() {
  return (
    <div className='flex gap-80 px-12 py-8'>
        <div>
            <h2 className="text-3xl font-bold text-[#00a79b] mb-2">what we offer:</h2>
            <ul className="list-disc pl-8 text-black-700 text-lg">
                <li>A career in one of the largest and fastest growing IT services providers worldwide</li>
                <li>SAP Training and Certifications</li>
                <li>Competitive Salary in line with market rates and experience</li>
                <li>Opportunity to work for the large multinationals and other leading companies</li>
                <li>Personal development in hard and soft skills</li>
                </ul>
        </div>
        <div>
        <div className='flex gap-5 mt-30'>
            <button className="  border-1 border-[#00a79b] text-[#00a79b] text-lg font-bold px-6 flex rounded-full mt-4 hover:bg-yellow-400 hover:text-black hover:border-none transition duration-300 justify-center items-center text-centerS">
               <p > share</p> 
                 <img src={share} alt="share icon" className='inline-block ml-2 h-5 w-5 hover:fill-black-900' />
            </button>
            <button className=" border-1 border-[#00a79b] text-[#00a79b] text-lg font-bold  px-6 flex rounded-full mt-4 hover:bg-yellow-400 hover:text-black hover:border-none transition duration-300 justify-center items-center text-centerS">
                save job
               <img src={save} alt="save icon" className='inline-block ml-2 h-5 w-5' />
                
            </button>
            <button className=" border-1 border-[#00a79b] bg-[#00a79b] text-lg font-bold  text-white px-6 flex rounded-full mt-4 hover:bg-yellow-400 hover:text-black hover:border-none transition duration-300 justify-center items-center text-centerS">
                apply now
            </button>
        </div>
        </div>

    </div>
  )
}
