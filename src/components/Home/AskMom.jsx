import React from 'react'

function AskMom() {
    return ( 
        <div className=' flex justify-center bg-[#00A79B1A] items-center  border-2 rounded-xl border-[#00A79B] mt-25 mb-25 p-[20px] gap-[50px] w-[60%] m-auto'>
            <div className='w-40 animate-pulse'>
                <img src="/Home/askmom.jpg" alt="askmom pillman" />
            </div>
            <div>
                <h2 className='font-bold text-[42px] text-[#00A79B]'>got a question?</h2>
                <h4 className='text-[24px] font-medium '>mom is just one message away!</h4>
                <p className='text-[18px]] font-normal  w-[450px] '>whether it’s a health query or a concern, mom ai chat bot is here to help with clarity and a touch of mom like warmth-just start asking questions.</p>
            </div>
            {/* <button className='py-2 px-3  bg-[#00A79B] rounded-xl text-white hover:bg-[#FADB14] font-bold'>
                ask mom
            </button> */}
            <button class="relative inline-flex shadow-xs shadow-[#00A79B] items-center justify-center px-2 py-3 overflow-hidden  font-bold tracking-tighter text-white bg-[#00A79B] rounded-lg group">
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FADB14] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-[#FADB14] from-transparent via-transparent to-[#00A79B]"></span>
                <span class="relative">ask mom</span>
            </button>
        </div>
    )
}

export default AskMom


