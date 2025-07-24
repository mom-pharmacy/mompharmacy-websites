import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext } from 'react';
import {useCareer} from "../context/career"
const JobCard = ({role, experience, location, vacancies}) => {
  const Career =useContext(useCareer);
  return (
    <div className="">
      <div className=" group flex-col w-90 pl-3 border-teal-600 border-2 rounded-lg transition-transform duration-700 ease-in-out hover:transition-300 hover:bg-[#FADB14] hover:rounded-lg hover:text-black hover:border-[#FADB14]">
        <div className="flex p-2 ">
          <p className="flex-1 text-teal-600 text-3xl group-hover:text-black ">
            {role}
          </p>
          <span className="transition-transform duration-700 ease-in-out group-hover:-rotate-390 ">
            <FaArrowRightLong className="ml-3 text-2xl text-teal-600 group-hover:text-black" />
          </span>
        </div>
        <div className="flex">
          <p className="text-x">experience: {experience}</p>
        </div>
        <div className="flex">
          <p className="flex-1 text-xl pl-2 bp-2">{location}</p>

          <p className="text-xl pr-2 pb-2">vacancies: {vacancies}</p> 
        </div>
      </div>
    </div>
  );
}

export default JobCard
