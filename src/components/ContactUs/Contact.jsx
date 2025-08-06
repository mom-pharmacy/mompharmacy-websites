import React, { useState } from "react";
import Call from "../../assets/contactUs/call.png";
import Email from "../../assets/contactUs/email.png";
import Location from "../../assets/contactUs/location.png";
import Pills from "../../assets/contactUs/pills.png";
import { motion } from "framer-motion";
import { useContact } from "../../context/contactUs";
import DropDown from "./DropDown"
import GlowButton from '../Buttons/GlowButton'
import Heart from "../../assets/momp/dotheart.png";
import Clock from "../../assets/momp/clock.png";
import bgImage from '../../assets/bgImage.png'
export default function Contact() {

  const [data, setData] = useState({
    name: "",
    email: "",
    supportType: "",
    description: "",
  });
  const { postContact } = useContact();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(data);
  };

  return (
    <div className="bg-[#00A79B] max-w-auto flex items-center justify-center px-4 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-lg border-4 border-[#00A79B] p-5 gap-3 lg:gap-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#00A79B] text-white p-5 rounded-xl md:w-1/2  w-full mb-10 md:mb-0"
        >
          <motion.div
            initial={{ x: "-70px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-50%", opacity: 0 }}
            transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
            className="mb-10"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              let's get in touch
            </h1>
            <p className="text-sm md:text-base">
              Reach out with your questions, ideas, or feedback — and let's take
              a step toward healthier living, together.
            </p>
          </motion.div>

          <div
            className="justify-center items-center text-center py-10 flex flex-col gap-5 bg-contain"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <p className='text-3xl lg:text-4xl font-["Fredoka_One"] text-white font-bold '>
              mom pharmacy
            </p>
            <div className="flex justify-between items-center bg-white h-auto w-auto relative rounded-xl">
              <img
                src={Heart}
                alt="heart"
                className="w-10 h-13 relative top-4 right-5"
              />

              <p className="text-m lg:text:sm font-['Fredoka_One'] text-black">
                medicine & more on minutes
              </p>
              <img
                src={Clock}
                alt="heart"
                className="w-10 h-10 relative bottom-7 left-0"
              />
            </div>
          </div>
        </motion.div>

        <div className="md:w-1/2 lg:w-2/3 w-full px-2">
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ x: "70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex md:flex-row gap-4"
            >
              <div className="flex-1">
                <label className="block mb-1 text-[#00A79B]">your name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="border-1 border-[#00A79B] p-2 rounded w-full outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-[#00A79B]">your email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="border-1 border-[#00A79B] p-2 rounded w-full outline-none"
                  required
                />
              </div>
            </motion.div>

            <DropDown
              onSelect={(value) =>
                setData((prev) => ({ ...prev, supportType: value }))
              }
              selectedValue={data.supportType}
            />
            <div className="mt-2">
              <label className="block mb-1 text-[#00A79B]">description</label>
              <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Write your query related to our website or services"
                className="border-1 border-[#00A79B] p-2 rounded w-full outline-none h-[100px] resize-none"
                required
              />
            </div>

            <motion.div
              initial={{ y: "70px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex items-center justify-between mt-2"
            >
              <GlowButton title="send us" />
              <img
                src={Pills}
                alt="pill"
                className="h-25 w-25 object-contain"
              />
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
