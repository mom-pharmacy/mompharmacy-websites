import React from 'react'

const Applynow = () => {
    return (
        <div className='bg-[#F96E83] h-60 width-20px flex flex-col justify-center rounded-4xl mt-35 mr-47 ml-38'>
            <div className='text-center'>
                <p className='text-yellow-300 text-5xl font-semi bold mr-60'>mom is calling mom to</p>
                <p className='text-yellow-300 text-5xl font-semi bold mr-90 p-2'>get back to work</p>
                <p className='text-white text-2xl mr-15'>An exclusive program helping women return to the workforce</p>
                <p className='text-white text-2xl mr-127'>after a career break</p>
            </div>
            <div className='flex-1 mb-40'>
                <button className='text-black bg-white hover:bg-yellow-300 text-3xl font-semibold  h-15 w-50 rounded-full ml-220 '><p className='text-center'>apply now</p></button>
            </div>

        </div>
    )
}
export default Applynow