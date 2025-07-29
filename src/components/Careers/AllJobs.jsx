import React from "react";
import JobCard from "../JobCard";
import { useCareer } from "../../context/career";
import { useNavigate } from "react-router";

const AllJobs = ({ Result, loading, error }) => {
  const { career } = useCareer();
  const navigate = useNavigate();

  const jobs = Result === null ? career : Result;


  const groupJobsByDepartment = (jobArray) => {
    const grouped = {};
    jobArray.forEach((job) => {
      const dept = job.department_name || "Other";
      if (!grouped[dept]) grouped[dept] = [];
      grouped[dept].push(job);
    });
    return grouped;
  };


  if (loading) return <p className="text-center text-lg">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const isFlatList = Array.isArray(Result);

  const groupedJobs = isFlatList ? groupJobsByDepartment(jobs) : null;

  return (
    <div className="px-4 sm:px-5 md:px-10 lg:px-15">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <p className="text-2xl sm:text-3xl font-['Fredoka_One']">all jobs</p>

        <button className="group font-['Fredoka_One'] text-xl sm:text-2xl flex items-center rounded-3xl text-teal-600 border-2 px-4 py-2 hover:border-[#FADB14] hover:bg-[#FADB14] hover:text-black transition">
          view saved jobs (1)
          <img
            src="./src/assets/savedicon.svg"
            alt="Saved Icon"
            className="w-5 h-5 ml-2"
          />
        </button>
      </div>

      <div className="mt-8 sm:mt-10 sm:mx-2 mb-10">
        {!jobs || (Array.isArray(jobs) && jobs.length === 0) ? (
          <p className="text-xl text-center text-gray-500">No jobs available</p>
        ) : (
          <div className="flex flex-col snap-x snap-mandatory scroll-smooth overflow-x-auto gap-5 custom-scroll">
            {isFlatList
              ? Object.entries(groupedJobs).map(([deptName, deptJobs], i) => (
                  <div key={i}>
                    <p className="text-xl sm:text-2xl flex flex-col px-2 m-3 py-2 border-l-4 border-black font-['Fredoka_One']">
                      {deptName}
                    </p>
                    {deptJobs.map((job, index) => (
                      <button
                        onClick={() => navigate("/jobdetails", { state: job })}
                        key={index}
                        className="text-left"
                      >
                        <JobCard
                          role={job.role}
                          experience={job.experience}
                          location={job.location}
                          vacancies={job.vacancy}
                        />
                      </button>
                    ))}
                  </div>
                ))
              : jobs?.map((department, index) => (
                  <div key={index}>
                    <p className="text-xl sm:text-2xl flex flex-col px-2 m-3 py-2 border-l-4 border-black font-['Fredoka_One']">
                      {department.department_name}
                    </p>
                    {department.jobUpload?.map((job, idx) => (
                      <button
                        onClick={() => navigate("/jobdetails", { state: job })}
                        key={idx}
                        className="text-left"
                      >
                        <JobCard
                          role={job.role}
                          experience={job.experience}
                          location={job.location}
                          vacancies={job.vacancy}
                        />
                      </button>
                    ))}
                  </div>
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
