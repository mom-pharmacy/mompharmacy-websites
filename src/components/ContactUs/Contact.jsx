import React, { useState } from 'react'
import Call from '../../assets/contactUs/call.png'
import Email from '../../assets/contactUs/email.png'
import Location from '../../assets/contactUs/location.png'
import Pills from '../../assets/contactUs/pills.png'

export default function Contact() {
    const contactDetails = [
        { id: 1, text: "+917702068334", image: Call },
        { id: 2, text: "Ps@mompharmacy.in", image: Email },
        { id: 3, text: "100 Feet Rd, opp. biryani times, vip hills, silicon valley, madhapur, hyderabad, telangana 500081", image: Location }
    ]
const[visible, setVisible]=useState(false)

const handleChange =()=>{
    setVisible(true)
}
    return (
        <div className="bg-[#00A79B] h-screen w-full flex items-center justify-center">
        <div className="flex items-center justify-center w-250 h-auto bg-white rounded-4xl shadow-lg border-5 border-[#00A79B] p-5 m-30">

            <div className="bg-[#00A79B] text-white p-4 rounded-lg w-100 flex-initial">
                <div>
                    <div className="mb-10">
                        <h1 className='text-3xl font-bold mb-3'>let's get in touch</h1>
                        <p className='text-40'>reach out with your questions, ideas, or feedback - and let's take
                            a step toward healthier living, together.</p>
                    </div>
                    <div className="flex flex-col py-4 space-y-4">
                        {contactDetails.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 text-lg">
                                <img src={item.image} alt="icon" className='h-7 w-7' />
                                <div className="underline">{item.text}</div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

            <div className='p-8 w-150 flex-initial text-lg '>
                
                    <form>
                        <div className="flex">
                            <div className="flex-1 mr-4">
                                <label className="block mb-2 text-[#00A79B]">your name</label>
                                <input type="text" className="border-2 border-[#00A79B] p-2 rounded w-full mb-4 outline-none" />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 text-[#00A79B]">your email</label>
                                <input type="email" className="border-2 border-[#00A79B] p-2 rounded w-full mb-4 outline-none" />
                        </div>
                        </div>
                        <select className="bg-[#00A79B] p-4 rounded w-full mb-4 text-white outline-none" onChange={handleChange} name="select support type" >
                            <option value="suggestion">suggestion</option>
                            <option value="grievances">grievances</option>
                        </select>
                      {visible && (
                        <div>
                       <label className="block mb-2 text-[#00A79B]">discription</label>
                        <textarea className="border-2 border-[#00A79B] p-2 rounded w-full mb-4 outline-none" placeholder="write your query related to our website or services"></textarea>
                      </div>
                      ) }
                      <div className='flex  gap-70 items-end'>
                        <button type="submit" className=" justify-end bg-[#00A79B] text-white p-2 rounded-xl w-30 h-13 justify-center flex-initial">send us</button>
                        <img src={Pills} alt="pill" className='h-20 w-30 flex-initial' />
                    </div>
                    </form>
                </div>
            
        </div>
        </div>
    )
}
