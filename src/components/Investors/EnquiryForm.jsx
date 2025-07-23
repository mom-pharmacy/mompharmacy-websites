import React, {useRef, useState} from "react";

export default function EnquiryForm(){
    return (
        <>
        <div className="bg-white-500 rounded-xl shadow h-120 w-200 border-2 shadow border-[#00a99d] ">
            <div className="bg-[#00a99d] rounded-2xl flex flex-wrap h-113 w-65 inline-block text-left p-1 m-3 ">
                <div className="p-1 ml-3 mb-30">
                <h1 className="text-white text-3xl font-bold mt-2">enquiry form</h1>
                <p className="text-white text-2xl text-left items-left">invest in us to create a healthy experience</p>
                </div>
            <div className="justify-left mb-2">
                
                <p className="text-white"><img className="h-5 w-5 inline-block ml-2 mr-3"src='/src/assets/call.png' alt='call icon' />+917702068334</p>
            </div>
            <div className="justify-left text-left items-left mb-2">
                <p className="text-[#fadb14]"><img className="h-5 w-5 inline-block ml-2 mr-3"src='/src/assets/email.png' alt='call icon' />ps@mompharmacy.in</p>
            </div>
            <div className="justify-left text-left items-left">
               <img className="h-5 w-5 inline ml-2 mr-3"src='/src/assets/location.png' alt='call icon' /> <p className="text-white inline">100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081 </p>
            </div>
            </div>
            <div className="inline-block ml-7 bg-white-500">
            <form className="max-w-sm mx-auto">
                <div className="flex gap-4 mb-5 mt-5">
                <div className="w-1/2">
                    <label for="name" className="block mb-2 text-xl font-medium text-teal-500 ">your name *</label>
                    <input type="text" id="name" className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="enter your name" required />
                </div>
                <div className="w-1/2">
                    <label for="mobile" className="block mb-2 text-xl font-medium text-teal-500 ">your contact *</label>
                    <input type="tel" id="mobile" className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="+91" required />
                </div>
                </div>
                <div className="flex gap-4 mb-5">
                <div className="w-1/2">
                    <label for="email" className="block mb-2 text-xl font-medium text-teal-500 ">your email *</label>
                    <input type="email" id="email" className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div className="w-1/2">
                    <label for="investment" className="block mb-2 text-xl font-medium text-teal-500 ">investment value *</label>
                    <input type="number" id="investment" className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>
                </div>
                <div className="mb-5">
                    <label for="background" className="block mb-2 text-xl font-medium text-teal-500 ">tell me about your background</label>
                    <textarea id="background" className="bg-gray-50 border-2 border-teal-500 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="write text here"/>
                </div>
                <div className="flex gap-60">
                <button type="reset" className="text-teal-500 hover:bg-teal-500 hover:text-white-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border-2">reset</button>
                <button type="submit" className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-[#00a99d]">submit</button>
                </div>
            </form>
            </div>
        </div>
        </>
    );
}
