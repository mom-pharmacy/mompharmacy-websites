import React, { useState } from "react";
import Call from "../../assets/contactUs/call.png";
import Email from "../../assets/contactUs/email.png";
import Location from "../../assets/contactUs/location.png";
import Pills from "../../assets/contactUs/pills.png";
import { motion } from "framer-motion";
import { useContact } from "../../context/contactUs";

export default function Contact() {
  const [visible, setVisible] = useState(false);
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
    if (name === "supportType") setVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postContact(data);
  };

  return (
    <div className="bg-[#00A79B] min-h-screen w-full flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-lg border-4 border-[#00A79B] p-6 gap-10" 
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[#00A79B] text-white p-6 rounded-xl md:w-1/2 w-full mb-6 md:mb-0"
        >
          <motion.div
            initial={{ x: "-70px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-50%", opacity: 0 }}
            transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              let's get in touch
            </h1>
            <p className="text-sm md:text-base">
              Reach out with your questions, ideas, or feedback — and let's take
              a step toward healthier living, together.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: "-70px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-50%", opacity: 0 }}
            transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
            className="space-y-4 text-sm md:text-base"
          >
            <p className="flex items-center gap-2">
              <img src={Call} className="h-5 w-5" />
              +91 77020 68334
            </p>
            <div className="flex items-center gap-2">
              <img src={Email} className="h-5 w-5" />
              <span className="text-[#FADB14]">Ps@mompharmacy.in</span>
            </div>
            <div className="flex items-start gap-2">
              <img src={Location} className="h-6 w-6 mt-1" />
              <span>
                100 Feet Rd, opp. Biryani Times, VIP Hills, Silicon Valley,
                Madhapur, Hyderabad, Telangana 500081
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="md:w-1/2 w-full px-2">
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ x: "70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1">
                <label className="block mb-1 text-[#00A79B]">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  className="border-2 border-[#00A79B] p-2 rounded w-full outline-none"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-[#00A79B]">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="border-2 border-[#00A79B] p-2 rounded w-full outline-none"
                  required
                />
              </div>
            </motion.div>

            <motion.select
              initial={{ x: "70px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="bg-[#00A79B] p-3 rounded-lg w-full mt-4 text-white outline-none"
              onChange={handleChange}
              name="supportType"
              value={data.supportType}
              required
            >
              <option value="" disabled>
                Select support type
              </option>
              <option value="suggestion">Suggestion</option>
              <option value="grievances">Grievances</option>
            </motion.select>

            {visible && (
              <div className="mt-4">
                <label className="block mb-1 text-[#00A79B]">Description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  placeholder="Write your query related to our website or services"
                  className="border-2 border-[#00A79B] p-2 rounded w-full outline-none h-[100px] resize-none"
                  required
                />
              </div>
            )}

            <motion.div
              initial={{ y: "70px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "50%", opacity: 0 }}
              transition={{ duration: 0.78, ease: "easeInOut", delay: 0.3 }}
              className="flex items-center justify-between mt-6"
            >
              <button
                type="submit"
                className="bg-[#00A79B] text-white px-6 py-2 rounded-xl hover:bg-[#02988b] transition"
              >
                Send us
              </button>
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
