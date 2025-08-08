import React, { useState, useEffect, useRef } from "react";
import Image from "../../assets/Careerpage/filter.svg";
import { useCareer } from "../../context/career";

const Filter = ({ onApply }) => {
  const { career } = useCareer();

  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  const isInitialMount=useRef(true);
  useEffect(()=>{
    if (isInitialMount.current){
      isInitialMount.current=false;
      return;
    }
    onApply({location,department,experience});

  },[location,department,experience]

);


  const getDropdownData = () => {
    const departments = new Set();
    const cities = new Set();
    const experiences = new Set();

    career?.forEach((dept) => {
      if (dept.department_name) departments.add(dept.department_name);
      dept.jobUpload?.forEach((job) => {
        if (job.location) cities.add(job.location);
        if (job.experience) experiences.add(job.experience);
      });
    });

    return {
      departmentOptions: Array.from(departments).sort(),
      cityOptions: Array.from(cities).sort(),
      experienceOptions: Array.from(experiences).sort(),
    };
  };

  const { departmentOptions, cityOptions, experienceOptions } =
    getDropdownData();

  return (
    <div className="w-full flex flex-col lg:flex-row md:flex-row items-center justify-center gap-2 sm:gap-4 px-2 bg-white rounded-xl z-10 mt-10">
      <select
        className="outline-1 outline-[#00A79B] p-2 w-full lg:w-auto rounded-md bg-teal-600 text-white min-w-[150px] "
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">select department</option>
        {departmentOptions.map((dept, index) => (
          <option key={index}>{dept}</option>
        ))}
      </select>
      <select
        className="outline-1 outline-[#00A79B] w-full lg:w-auto p-2 rounded-md bg-teal-600  text-white min-w-[150px]"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      >
        <option value="">year of experience</option>
        {experienceOptions.map((exp, index) => (
          <option key={index}>{exp}</option>
        ))}
      </select>
      <select
        className="outline-1 outline-[#00A79B] p-2 w-full lg:w-auto rounded-md bg-teal-600 text-white  min-w-[150px]"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">select city</option>
        {cityOptions.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;