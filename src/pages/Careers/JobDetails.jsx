import React from 'react'
import JobLanding from '../../components/Careers/JobDetails/JobLanding'
import KeyDetails from '../../components/Careers/JobDetails/KeyDetails'
import Details from '../../components/Careers/JobDetails/Details'
import Apply from '../../components/Careers/JobDetails/Apply'
export default function JobDetails() {
  return (
    <div className="bg-gray-50 min-h-screen">
    <JobLanding />
    <KeyDetails />
    <Details />
    <Apply />
    </div>)
}
