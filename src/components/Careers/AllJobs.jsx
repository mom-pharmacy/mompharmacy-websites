import React from "react";
import JobCard from "../JobCard";
import { useCareer } from "../../context/career";
import { Link, useNavigate } from "react-router";

const AllJobs = () => {
  const { career } = useCareer();
  const navigate = useNavigate();

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
      <div className=" pl-15 pl-1">
        <p className="text-3xl p-2 border-l-3">departments</p>
      </div>
      <div className="pl-15 pb-10 pt-10">
        <div className="flex flex-wrap gap-5">

          {career.map(({role,experience,location,vacancy,job_no,travel,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect}, index) => (
            
            <button onClick={() => navigate("/jobdetails",{state:{job_no,travel,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect}})} key={index}>

              <JobCard

                role={role}
                experience={experience}
                location={location}
                vacancies={vacancy}
              />

            </button>
          ))}

        </div>
      </div>
    </div>
  );
};

export default AllJobs;
