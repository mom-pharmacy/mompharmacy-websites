import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdUploadFile, MdOutlineMyLocation } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { ImCancelCircle } from 'react-icons/im';

const UploadPrescription = ({ setShowUploadPrescription, showUploadPrescription }) => {
  const [data, setData] = useState({
    name: '',
    contact: '',
    gender: '',
    age: '',
    subject: '',
    additionaldetails: '',
    address: '',
    imageUrl: null
  });

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('contact', data.contact);
    formData.append('gender', data.gender);
    formData.append('age', data.age);
    formData.append('subject', data.subject);
    formData.append('additionaldetails', data.additionaldetails);
    formData.append('address', data.address);
    formData.append('imageUrl', data.imageUrl);

    try {
      const response = await fetch('http://18.61.201.132:3000/UploadPrescription/Prescription', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) {
        console.log('Error posting prescription:', result.message);
      } else {
        console.log('Prescription submitted:', result.message);
      }
    } catch (error) {
      console.log('Error in posting prescription:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData((prev) => ({
      ...prev,
      imageUrl: file
    }));
  };

  return (
    <AnimatePresence mode="wait">
      {showUploadPrescription && (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[1700] flex items-center justify-center"
        >
          <div className="border-[#00A79B] lg:w-[60%] md:w-[80%] w-11/12 max-h-[90vh] overflow-y-auto rounded-4xl bg-white">
            <div className="overflow-y-auto p-5">
              <div className="xl:grid xl:grid-cols-3 xl:gap-x-10 xl:px-10 xl:py-5 md:px-10 md:py-5 px-5 py-5">
                {/* Left Section */}
                <div className="flex flex-col xl:gap-7 md:gap-10 gap-5 xl:items-center">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#00A79B] xl:text-xl md:text-2xl text-2xl font-bold">
                      Fill Prescription Form
                    </h1>
                    
                    <p className="text-lg">
                      Upload prescription and give us few details then leave
                      everything to us
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* File Upload */}
                    <label className="bg-[#00A79B1A] xl:h-40 md:h-40 h-20 flex items-center justify-center xl:flex-col md:flex-col flex-row gap-2 rounded-xl hover:bg-[#FADB14] border border-[#00A79B] cursor-pointer">
                      <div className="bg-[#00A79B] text-white rounded-sm p-1 size-10">
                        <MdUploadFile className="size-8" />
                      </div>
                      <span className="text-[#00A79B] text-xl text-center font-bold ">
                        Upload Prescription
                      </span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        name="imageUrl"
                        className="hidden"
                      />
                    </label>

                    {/* Address Input */}
                    <div className="outline-1 rounded-md flex items-center justify-between px-2 text-[#00A79B]">
                      <CiLocationOn className="size-8" />
                      <input
                        type="text"
                        placeholder="Enter your address"
                        value={data.address}
                        onChange={handleChange}
                        name="address"
                        className="outline-none text-black w-full px-2"
                      />
                      <div className="rounded-xl px-2 py-2 bg-[#00A79B] text-white hover:text-black dark:bg-white border-8 border-white hover:border-[#FADB14] transition duration-500 hover:bg-[#FADB14]">
                        <MdOutlineMyLocation className="size-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section (Forms) */}
                <div className="grid col-span-2 gap-y-5 xl:mt-0 md:mt-8 mt-8">
                  <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-x-5 md:gap-x-5 gap-5">
                    <div className="flex flex-col gap-5">
                      <p className="text-[#00A79B] text-lg">Your Name*</p>
                      <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="outline-1 rounded-sm outline-[#00A79B] px-2 py-2"
                      />

                      <select
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                        className="outline-1 outline-[#00A79B] px-2 py-2 rounded-sm"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="not preferred">Not preferred</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-5">
                      <p className="text-[#00A79B] text-lg">
                        Your Contact Number*
                      </p>
                      <input
                        type="text"
                        name="contact"
                        value={data.contact}
                        onChange={handleChange}
                        placeholder="+91"
                        className="outline-1 rounded-sm outline-[#00A79B] px-2 py-2"
                      />
                      <input
                        type="text"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                        placeholder="Your age"
                        className="outline-1 rounded-sm outline-[#00A79B] px-2 py-2"
                      />
                    </div>
<div className='absolute'>
                               <button
                    className="text-[#00A79B] cursor-pointer w-10 h-10 relative bg-white rounded-full hover:bg-[#FADB14] hover:text-black relative lg:bottom-13 lg:left-110 bottom-86 left-75 md:bottom-112 md:left-137"
                    onClick={() => setShowUploadPrescription(false)}
                  >
                    <ImCancelCircle className="w-10 h-10" />
                  </button>
                  </div>
                    {/* Cancel Button */}
                  </div>
       

                  {/* Subject and Additional Details */}
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h1 className="text-[#00A79B] text-lg">Your subject*</h1>
                      <h1 className="text-gray-400 text-lg">20 words</h1>
                    </div>
                    <textarea
                      name="subject"
                      value={data.subject}
                      onChange={handleChange}
                      placeholder=""
                      className="outline-1 px-2 py-2 rounded-sm outline-[#00A79B]"
                      maxLength={100}
                    />

                    <div className="flex flex-row justify-between">
                      <h1 className="text-[#00A79B] text-lg">
                        Additional details*
                      </h1>
                      <h1 className="text-gray-400 text-lg">100 words</h1>
                    </div>
                    <textarea
                      name="additionaldetails"
                      value={data.additionaldetails}
                      onChange={handleChange}
                      placeholder="Write message here"
                      className="outline-1 px-2 py-2 rounded-sm outline-[#00A79B]"
                      maxLength={500}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row justify-between">
                    <button
                      type="reset"
                      onClick={() =>
                        setData({
                          name: "",
                          contact: "",
                          gender: "",
                          age: "",
                          subject: "",
                          additionaldetails: "",
                          address: "",
                          imageUrl: null,
                        })
                      }
                      className="outline-1 rounded-sm text-[#00A79B] outline-[#00A79B] hover:bg-[#00A79B] hover:text-white px-4 py-1"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="outline-1 rounded-sm bg-[#00A79B] text-white outline-[#00A79B] hover:bg-[#FADB14] hover:text-black px-4 py-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UploadPrescription;
