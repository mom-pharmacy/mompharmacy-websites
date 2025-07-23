import React from 'react'
import Image1 from '../../assets/Careerpage/work1.jpg'
import Image2 from '../../assets/Careerpage/work2.jpg'
import Image3 from '../../assets/Careerpage/work3.jpg'
import Image4 from '../../assets/Careerpage/work4.jpg'

const Workculture = () => {
    return(
        <div className='bg-white h-screen width-full'>
            <div className='text-center'>
            <p className='text-[#00a99d] text-6xl font-bold pt-10'>our work culture</p>
            </div>
            <div>
            <p className='text-center text-3xl '>To bridge the gap between people and essential healthcare by</p>
            <p className='text-center text-3xl '>delivering affordable, on-demand medication-with the speed of</p> 
            <p className='text-center text-3xl '>innovation ..</p>
            </div>
            <div className='p-4 flex'>
                <img src={Image1}  className='h-80 w-65 rounded-3xl ml-10' />
                 <img src={Image2} className='h-80 w-65 rounded-3xl ml-10' />
                  <img src={Image3}  className='h-80 w-65 rounded-3xl ml-10' />
                   <img src={Image4}  className='h-80 w-65 rounded-3xl ml-10' />
            </div>
        </div>
    )
}
export default Workculture