import React, { useState } from "react";
import JobCard from "../JobCard";
import { useCareer } from "../../context/career";
import { useNavigate } from "react-router";
import Image from '../../assets/Careerpage/backwardarrow.png'
import Image2 from '../../assets/Careerpage/forwardarrow.png'

const AllJobs = ({ Result, loading, error }) => {
  const { career } = useCareer();
  const navigate = useNavigate();

  const jobs = Result === null ? career : Result;
  const isFlatList = Array.isArray(Result);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const groupJobsByDepartment = (jobArray) => {
    const grouped = {};
    jobArray.forEach((job) => {
      const dept = job.department_name || "Other";
      if (!grouped[dept]) grouped[dept] = [];
      grouped[dept].push(job);
    });
    return grouped;
  };

  if (loading) return <p className="text-center text-sm">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  let flatJobs = [];
  if (isFlatList) {
    flatJobs = jobs;
  } else if (Array.isArray(jobs)) {
    jobs.forEach((dept) => {
      if (Array.isArray(dept.jobUpload)) {
        flatJobs = flatJobs.concat(dept.jobUpload);
      }
    });
  }
  const totalPages = Math.ceil(flatJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = flatJobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="px-4 sm:px-5 md:px-10 lg:px-15">
      <div className="flex flex-row sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <p className="text-2xl sm:text-3xl font-['Fredoka_One']">all jobs</p>

        <button className="group font-['Fredoka_One'] text-sm lg:text-2xl flex items-center rounded-3xl text-teal-600 border-2 px-2 lg:py-2 lg:px-4 md:px-2 md:py-2 md:text-xl hover:border-[#FADB14] hover:bg-[#FADB14] hover:text-black transition">
          saved jobs (1)
          <img
            src="./src/assets/savedicon.svg"
            alt="Saved Icon"
            className="w-5 h-5 ml-2"
          />
        </button>
      </div>

      <div className="mt-8 sm:mt-10 sm:mx-2 mb-10">
        {!jobs || flatJobs.length === 0 ? (
          <p className="text-xl text-center text-gray-500">No jobs available</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentJobs.map((job, idx) => (
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


            <div className="flex justify-center items-center mt-10 gap-4 flex-col sm:flex-row sm:6">
              <span className="text-lg font-medium mr-290 sm:tetx-base md:text-lg sm:text-left">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-2 py-3 sm:p-1 bg-[#00a99d] rounded-full ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                <img
                  src={Image}
                  alt="backarrow"
                  className="w-5 sm:w-6"
                />
              </button>

              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-2 py-3 sm:p-1 bg-[#00a99d] rounded-full ${currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                  }`}
              >
                <img
                src={Image2}
                alt="forwardarrow"
                className="w-5 sm:w-6"
                />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllJobs;