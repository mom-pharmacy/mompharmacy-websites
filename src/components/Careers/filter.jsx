import React, { useState } from "react";
import Image from "../../assets/Careerpage/filter.svg";
import { useCareer } from "../../context/career";

const Filter = () => {
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const { career} = useCareer();
  const[jobFilter,setJobFilter]=useState([])

  const [location, setLocation] = useState("");
  const [department_name, setDepartment] = useState("");
  const [experience, setExperience] = useState("");

  const toggleFilter = () => {  
    setShowFilterOptions(!showFilterOptions);
  };

  const closeModal = () => {
    setShowFilterOptions(false);
  };

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
      departmentOptions: Array.from(departments),
      cityOptions: Array.from(cities),
      experienceOptions: Array.from(experiences),
    };
  };

  const { departmentOptions, cityOptions, experienceOptions } =
    getDropdownData();


  const applyFilter = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/job/search?location=${encodeURIComponent(
          location
        )}&experience=${encodeURIComponent(
          experience
        )}&department=${encodeURIComponent(department_name)}`
      );

      if (!response.ok) {
        console.log(`error ${response.status}`);
        return;
      }

      const res = await response.json();
      setJobFilter(res);
      console.log("model,",res)
      // closeModal(); 
    } catch (error) {
      console.log("error in fetching filtered jobs", error);
    }
  };


  const resetFilters = () => {
    setLocation("");
    setDepartment("");
    setExperience("");
    setJobFilter([]);
    closeModal();
  };

  return (
    <div className="relative">
      <div
        className="border-2 w-fit h-10 flex items-center px-4 gap-2 border-teal-600 rounded-3xl cursor-pointer"
        onClick={toggleFilter}
      >
        <button className="text-xl text-teal-600 font-bold">Filter</button>
        <img src={Image} alt="Filter icon" className="w-6 h-6" />
      </div>

      {showFilterOptions && (
        <div className="fixed inset-0 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              x
            </button>

            <h2 className="text-lg font-semibold text-teal-600 mb-4">
              Filter Jobs
            </h2>

            <div className="space-y-4">
              <select
                className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white"
                name="department"
                value={department_name}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select Department</option>
                {departmentOptions.map((department, index) => (
                  <option key={index}>{department}</option>
                ))}
              </select>

              <div className="flex gap-2">
                <select
                  className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white"
                  name="experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Years of Experience</option>
                  {experienceOptions.map((exp, index) => (
                    <option key={index}>{exp}</option>
                  ))}
                </select>

                <select
                  className="outline-1 outline-[#00A79B] p-2 rounded-sm w-full bg-teal-600 text-white"
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cityOptions.map((city, index) => (
                    <option key={index}>{city}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  className="border border-teal-300 text-teal-600 px-3 text-lg rounded-xl"
                  onClick={resetFilters}
                >
                  Reset
                </button>
                <button
                  className="bg-teal-600 px-3 text-lg rounded-xl text-white"
                  onClick={applyFilter}
                >
                  Apply Filter
                </button>
              </div>
            </div>

            {jobFilter.map((job,index)=>(
              <div key={index}>
                {job}
                </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
