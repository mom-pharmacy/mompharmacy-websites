import React from 'react';
import Heart from '../../assets/momp/dotheart.png';
import Clock from '../../assets/momp/clock.png';
import '@fontsource/madimi-one'; // ✅ import font

function MomLogo() {
    return (
        <div className='justify-center items-center text-center p-10 flex flex-col gap-8'>
            <p className='text-4xl lg:text-7xl font-["Madimi_One"] text-[#00A79B] font-bold'>
                mom pharmacy
            </p>
            <div className="flex justify-between items-center bg-[#00A79B] h-auto w-auto relative px-5 py-1 rounded-xl">
                <img
                    src={Heart}
                    alt="heart"
                    className="w-13 h-15 relative top-5 right-10"
                />
                <p className="text-sm lg:text-3xl font-['Madimi_One'] text-white">
                    medicine & more on minutes
                </p>
                <img src={Clock} alt="heart" className="w-12 h-12 relative bottom-7 left-10" />
            </div>
        </div>
    )
}

export default MomLogo;
