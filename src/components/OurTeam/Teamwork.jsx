import React from "react";
import Quatation from "../../assets/AboutUs/quatation.png"

const Teamwork = ({ quote, role }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6">
      <img src={Quatation} className="h-15 w-15 mb-4" />
      <p className="text-2xl font-medium mb-4 ">{quote}</p>
      <span className="text-balance font-semibold text-gray-700 ">
        - {role}
      </span>
    </div>
  );
};

export default Teamwork;
