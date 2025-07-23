
import React from 'react';
import CardComp from './CardComp';
import Departments from './Departments';

const Founder = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center flex-col">
      <h2 className='text-[#00A79B] text-5xl font-bold'> founders</h2>
      <p className='text-2xl'>meet the people behind the promise</p>

      <div className="flex p-8 gap-10">
       <CardComp name="adarsh" designation="developer"></CardComp>
       <CardComp name="abhinai" designation="developer"></CardComp>
       
      </div>
    </div>
   
    </>
    
  );
};

export default Founder;


