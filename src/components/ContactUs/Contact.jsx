import React, { useState } from 'react'
import Call from '../../assets/contactUs/call.png'
import Email from '../../assets/contactUs/email.png'
import Location from '../../assets/contactUs/location.png'
import Pills from '../../assets/contactUs/pills.png'
import { motion } from "framer-motion";
import { useContact } from '../../context/contactUs'

export default function Contact() {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    supportType: "",
    description: ""
  })
  const { postContact } = useContact()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
    if (name === "supportType") setVisible(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    postContact(data)
  }


  return (
    <div className="bg-[#00A79B] h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex items-center justify-center w-250 h-110 bg-white rounded-4xl shadow-lg border-5 border-[#00A79B] p-5 m-30">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#00A79B] text-white p-4 rounded-lg w-100 flex-initial">
          <div>
            <motion.div
              initial={{ x: "-70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="mb-10">
              <h1 className="text-3xl font-bold mb-3">let's get in touch</h1>
              <p className="text-40">
                reach out with your questions, ideas, or feedback - and let's
                take a step toward healthier living, together.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "-70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex flex-col py-4 space-y-4">
              <p className="flex">
                <img src={Call} className="h-6 w-6" />
                +917702068334
              </p>
              <div className="flex">
                <img src={Email} className="w-5 h-5" />
                <p className="pl-1 text-[#FADB14]"> Ps@mompharmacy.in</p>
              </div>
              <div className="flex">
                <img src={Location} className="w-7 h-7" />
                <p>
                  100 Feet Rd, opp. biryani times, vip hills, silicon valley,
                  madhapur, hyderabad, telangana 500081{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="p-8 w-150 flex-initial text-lg ">
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ x: "70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex pt-7">
              <div className="flex-1 mr-4">
                <label className="block mb-2 text-[#00A79B]">your name</label>
                <input
                  type="text"

                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="border-2 border-[#00A79B] p-2 rounded w-full mb-4 outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-[#00A79B]">
                  your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="border-2 border-[#00A79B] p-2 rounded w-full mb-4 outline-none"
                />
              </div>
            </motion.div>
            <motion.select
              initial={{ x: "70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="bg-[#00A79B] p-4 rounded-lg w-full mb-4 text-white outline-none"
              onChange={handleChange}
              name="supportType"
              value={data.supportType}

            >
              <option value="suggestion">suggestion</option>
              <option value="grievances">grievances</option>
            </motion.select>
            {/* {visible && ( */}
            {visible && (
              <div>
                <label className="block mb-2 text-[#00A79B]">description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  placeholder="Write your query related to our website or services"
                  className="border-2 border-[#00A79B] p-2 rounded w-full outline-none h-[120px] resize-none"
                  required
                ></textarea>
              </div>
            )}
            {/* )} */}
            <motion.div
              initial={{ y: "70px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex gap-70">
             
              
              <button
                type="submit"
                className=" justify-end bg-[#00A79B] text-white p-1 rounded-xl w-30 h-13 justify-center flex-initial"
              >
                send us
              </button>
              <img
                src={Pills}
                alt="pill"
                className="h-20 w-30 flex-initial"
              />
            </motion.div>
          </form>
        </div>
      </motion.div>

    </div>

  );
}
