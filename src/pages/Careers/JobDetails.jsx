import JobLanding from '../../components/Careers/JobDetails/JobLanding'
import KeyDetails from '../../components/Careers/JobDetails/KeyDetails'
import Details from '../../components/Careers/JobDetails/Details'
import Apply from '../../components/Careers/JobDetails/Apply'
import { useLocation } from 'react-router'
export default function JobDetails() {
  const location = useLocation();
  const { state } = location;
  const { role,job_no, travel,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect } = state
  console.log("from jobdetails", role,job_no, travel,job_category,date_published,employment_type,work_model,role_description,eligibility,about_employee,we_offer,employee_expect)

  return (
    <div className="bg-gray-50 overflow-x-clip">
      <JobLanding role={role}/>
      <KeyDetails job_no={job_no} travel={travel} job_category={job_category} work_model={work_model} date_published={date_published} employment_type={employment_type} role_description={role_description} />
      <Details eligibility={eligibility} about_employee={about_employee} employee_expect={employee_expect}/>
      <Apply we_offer={we_offer} />
    </div>)
}
