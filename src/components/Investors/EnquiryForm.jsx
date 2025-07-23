
import React, { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    investment: "",
    background: ""
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/invest/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          investment: "",
          background: ""
        });
      } else {
        alert("Submission failed. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="bg-white-500 rounded-xl shadow h-120 w-200 border-2 shadow border-[#00a99d]">
      <div className="bg-[#00a99d] rounded-2xl flex flex-wrap h-113 w-65 inline-block text-left p-1 m-3">
        <div className="p-1 ml-3 mb-30">
          <h1 className="text-white text-3xl font-bold mt-2">enquiry form</h1>
          <p className="text-white text-2xl">invest in us to create a healthy experience</p>
        </div>
        <div className="justify-left mb-2">
          <p className="text-white"><img className="h-5 w-5 inline-block ml-2 mr-3" src="/src/assets/call.png" alt="call" />+917702068334</p>
        </div>
        <div className="justify-left mb-2">
          <p className="text-[#fadb14]"><img className="h-5 w-5 inline-block ml-2 mr-3" src="/src/assets/email.png" alt="email" />ps@mompharmacy.in</p>
        </div>
        <div className="justify-left">
          <img className="h-5 w-5 inline ml-2 mr-3" src="/src/assets/location.png" alt="location" /><p className="text-white inline">
            100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081</p>
        </div>
      </div>

      <div className="inline-block ml-7 bg-white-500">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-5 mt-5">
            <div className="w-1/2">
              <label htmlFor="name" className="block mb-2 text-xl font-medium text-teal-500">your name *</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="enter your name" required/>

            </div>
            <div className="w-1/2">
              <label htmlFor="mobile" className="block mb-2 text-xl font-medium text-teal-500">your contact *</label>
              <input type="tel" id="mobile" value={formData.mobile} onChange={handleChange} className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="+91" required/>
            </div>
          </div>

          <div className="flex gap-4 mb-5">
            <div className="w-1/2">
              <label htmlFor="email" className="block mb-2 text-xl font-medium text-teal-500">your email *</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" required/>
            </div>
            <div className="w-1/2">
              <label htmlFor="investment" className="block mb-2 text-xl font-medium text-teal-500">investment value *</label>
              <input type="number" id="investment" value={formData.investment} onChange={handleChange} className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="background" className="block mb-2 text-xl font-medium text-teal-500">tell me about your background</label>
            <textarea id="background" value={formData.background} onChange={handleChange} className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5"placeholder="write text here"/>
          </div>

          <div className="flex gap-60">
            <button type="reset" className="text-teal-500 hover:bg-teal-500 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2"
              onClick={() =>
                setFormData({name: "",mobile: "",email: "",investment: "",background: ""})
              }>reset</button>
            <button type="submit" className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#00a99d]">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
