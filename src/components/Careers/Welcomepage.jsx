import React from 'react'
import Image from '../../assets/Careerpage/tablets.png'
import TransitionButton from '../Buttons/transitionButton';
import Button from '../Buttons/GlowButton';

const Welcome = () => {
    return (
      <div className="bg-[#00a79b] h-200 width-800px">
        <div className="text-center">
          <p className="text-white text-7xl font-bold pt-30">
            welcome to careers
          </p>
          <p className="text-yellow-300 text-7xl font-bold p-5">
            @mom pharmacy
          </p>
          <p className="text-white text-7xl font-bold">let's work together</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex-1 p-10">
            {/* <button className='text-black bg-white hover:bg-yellow-300 text-3xl font-semibold  h-15 w-60 rounded-full'><p className='text-center'>explore jobs</p></button> */}
            <TransitionButton
            title='explore jobs'/>
        
          </div>
          <div className="flex-1 mb-100">
            <img src={Image} className="h-50 w-120" />
          </div>
        </div>
      </div>
    );
};
export default Welcome