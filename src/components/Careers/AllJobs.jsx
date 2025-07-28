import React from "react";
import JobCard from "../JobCard";
import { useCareer } from "../../context/career";
import { useNavigate } from "react-router";

const AllJobs = ({Result}) => {
  const { career } = useCareer();
  const navigate = useNavigate();
   const jobs = Result === null ? career : Result;

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


      <div>
        <p className="text-xl sm:text-2xl p-2 border-l-4 border-black font-['Fredoka_One']">
          departments
        </p>
      </div>

   
      <div className="mt-8 sm:mt-10 sm:mx-2 mb-10">
        {Array.isArray(Result) && Result.length === 0 ? (
          <p className="text-x1 text-center text-black-500">No jobs available</p>
        ) : (
            <div className="flex flex-row snap-x snap-mandatory scroll-smooth overflow-x-auto gap-5 custom-scroll">
          {jobs.map((department,index)=>(
            <div key={index}>
              <h2>{department.department_name}</h2>
              {department.jobUpload.map((
              {
                role,
                experience,
                location,
                vacancy,
                job_no,
                travel,
                job_category,
                date_published,
                employment_type,
                work_model,
                role_description,
                eligibility,
                about_employee,
                we_offer,
                employee_expect,
              },
              index
            ) => (
              <button
                onClick={() =>
                  navigate("/jobdetails", {
                    state: {
                      role,
                      job_no,
                      travel,
                      job_category,
                      date_published,
                      employment_type,
                      work_model,
                      role_description,
                      eligibility,
                      about_employee,
                      we_offer,
                      employee_expect,
                    },
                  })
                }
                key={index}
                className="text-left"
              >
                <JobCard
                  role={role}
                  experience={experience}
                  location={location}
                  vacancies={vacancy}
                />
              </button>
            )
          )}
        
        </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
