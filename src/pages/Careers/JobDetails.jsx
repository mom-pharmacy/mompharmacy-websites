import JobLanding from '../../components/Careers/JobDetails/JobLanding'
import KeyDetails from '../../components/Careers/JobDetails/KeyDetails'
import Details from '../../components/Careers/JobDetails/Details'
import Apply from '../../components/Careers/JobDetails/Apply'
import { useLocation } from 'react-router'
export default function JobDetails() {
  const location1 = useLocation();
  const { state } = location1;
  const { role,job_no, location,travel,experience,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect } = state
  console.log("from jobdetails", role,job_no, location,travel,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect)

  return (
    <div className="bg-gray-50 overflow-x-clip">
      <JobLanding role={role} job_no={job_no} employment_type={employment_type} location={location} experience={experience}/>
      <KeyDetails role={role } employee_expect={employee_expect} about_employee={about_employee} eligibility={eligibility} job_no={job_no}  location={location} experience={experience} travel={travel} job_category={job_category} we_offer={we_offer} work_model={work_model} date_published={date_published} employment_type={employment_type} role_description={role_description} />
      
    </div>)
}
