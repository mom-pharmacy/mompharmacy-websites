import React from 'react'

const AllJobs = () => {
  return (
    <div>
      <div className='flex justify-between p-10'>
        <p className="text-3xl">all jobs</p>
        <button className="text-xl rounded-3xl text-white bg-teal-600 px-4 py-2 ml-2 hover:bg-[#FADB14] hover:text-black">
          view saved jobs (1)
        </button>
      </div>

      <p className="text-3xl pl-15 bl-1">departments</p>
    </div>
  );
}

export default AllJobs
