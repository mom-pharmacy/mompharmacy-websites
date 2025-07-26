import React, { useContext } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const JobCard = ({ role, experience, location, vacancies }) => {


  return (
    <div className="m-0 p-0 group flex-col w-90 pl-3 border-teal-600 border-2 rounded-lg transition-transform duration-700 ease-in-out hover:transition-300 hover:bg-[#FADB14] hover:rounded-lg hover:text-black hover:border-[#FADB14] text-left">
      
      <div className="flex p-2 items-center justify-between">
        <p className="font-['Fredoka_One'] text-teal-600 text-2xl group-hover:text-black">
          {role}
        </p>
        <span className="transition-transform duration-700 ease-in-out group-hover:-rotate-390">
          <FaArrowRightLong className="ml-3 text-2xl text-teal-600 group-hover:text-black" />
        </span>
      </div>

      <div className="pl-2 pb-1">
        <p className="text-lg">Experience: {experience}</p>
      </div>

      <div className="flex justify-between pl-2 pr-2 pb-2">
        <p className="text-xl">{location}</p>
        <p className="text-xl">Vacancies: {vacancies}</p>
      </div>
      
    </div>
  );
}

export default JobCard;
