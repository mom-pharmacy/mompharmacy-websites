import React from 'react'
import JobCard from '../JobCard';

const AllJobs = () => {
  const jobs = [
    {
      role: "job role name",
      experience: "1-2 year",
      location: "location name",
      vacancies: "02",
    },
    {
      role: "job role name",
      experience: "1-2 year",
      location: "location name",
      vacancies: "02",
    },
    {
      role: "job role name",
      experience: "1-2 year",
      location: "location name",
      vacancies: "02",
    },

  ];
  return (
    <div>
      <div className="flex justify-between p-15">
        <p className="text-3xl">all jobs</p>
        <button className="group text-xl flex rounded-3xl text-teal-600 border-2 px-4 py-2 ml-2 hover:border-[#FADB14] hover:bg-[#FADB14] hover:text-black">
          view saved jobs (1)
          <img
            src="./src/assets/savedicon.svg"
            className="w-5 h-5 mt-1 pl-1 pt-1 hover:fill-current hover:text-black"
          />
        </button>
      </div>
      <div className=" pl-15 bl-1">
        <p className="text-3xl p-2 border-l-3">departments</p>
      </div>
      <div className="pl-15 pb-10 pt-10">
        <div className="flex flex-wrap gap-5">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              role={job.role}
              experience={job.experience}
              location={job.location}
              vacancies={job.vacancies}
            />
          ))}
        </div>
      </div>

      <div>
        <div className=" pl-15 bl-1">
          <p className="text-3xl border-l-3 p-2">departments</p>
        </div>
        <div className="pl-15 pb-10 pt-10">
          <div className="flex flex-wrap gap-5">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                role={job.role}
                experience={job.experience}
                location={job.location}
                vacancies={job.vacancies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllJobs
