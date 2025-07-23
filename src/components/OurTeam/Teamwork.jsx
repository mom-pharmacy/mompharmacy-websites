import React from "react";

const Teamwork = ({ quote, role }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6">
      <img src="./commas.png" className="h-20 w-30 mb-4" />
      <p className="text-2xl font-medium mb-4 ">{quote}</p>
      <span className="text-balance font-semibold text-gray-700 ">
        - {role}
      </span>
    </div>
  );
};

export default Teamwork;
