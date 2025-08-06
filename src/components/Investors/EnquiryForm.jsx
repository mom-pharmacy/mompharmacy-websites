import React, { useState, useEffect } from "react";
const API_KEY = "YUM5cTBsU1hVQ05iaW1TT0pjeUR5OUdkNFM1Qmpwa0N3Qk9Qc05rZw==";
import bgImage from '../../assets/bgImage.png'
import Heart from "../../assets/momp/dotheart.png";
import Clock from "../../assets/momp/clock.png";
export default function EnquiryForm() {
  const [formData, setFormData] = useState({name: "",mobile: "",email: "",investment: "",country: "",state: "",city: "",background: "",});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedStateCode, setSelectedStateCode] = useState("");
  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries", {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to fetch countries", err));
  }, []);
  useEffect(() => {
    if (!selectedCountryCode) return;
    fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states`, {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Failed to fetch states", err));
  }, [selectedCountryCode]);
  useEffect(() => {
    if (!selectedStateCode || !selectedCountryCode) return;
    fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountryCode}/states/${selectedStateCode}/cities`, {
      headers: { "X-CSCAPI-KEY": API_KEY },
    })
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error("Failed to fetch cities", err));
  }, [selectedStateCode]);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    const selected = countries.find((c) => c.name === countryName);
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        country: selected.name,
        state: "",
        city: "",
      }));
      setSelectedCountryCode(selected.iso2);
      setStates([]);
      setCities([]);
      setSelectedStateCode("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/invest/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({name: "",mobile: "",email: "",investment: "",country: "",state: "",city: "",background: "",});
        setSelectedCountryCode("");
        setSelectedStateCode("");
        setStates([]);
        setCities([]);
      } else {
        alert("Submission failed. Try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred.");
    }
  };
  return (
    <div className="bg-white rounded-xl flex flex-col lg:flex-row gap-5 shadow border-2 border-[#00a99d] mt-10 w-auto mx-auto px-4 py-6  lg:px-3 lg:py-3 md:px-10 ">
      <div className="bg-[#00a99d] rounded-2xl p-4 text-white mb-4 flex flex-col gap-5 lg:gap-50">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-1">enquiry form</h1>
          <p className="text-lg sm:text-xl mb-4">
            invest in us to create a healthy experience
          </p>
        </div>

        <div
          className="justify-center items-center text-center flex flex-col gap-5 bg-contain min-h-[150px]"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <p className='text-3xl lg:text-3xl font-["Fredoka_One"] text-white font-bold '>
            mom pharmacy
          </p>
          <div className="flex justify-between items-center bg-white h-auto w-auto relative rounded-xl">
            <img
              src={Heart}
              alt="heart"
              className="w-6 h-8 relative top-2 right-1"
            />

            <p className="text-sm font-['Fredoka_One'] text-black">
              medicine & more on minutes
            </p>
            <img
              src={Clock}
              alt="heart"
              className="w-6 h-6 relative bottom-3 left-1"
            />
          </div>
        </div>
      </div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-teal-500"
            >
              your name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border-2 border-teal-500 text-sm rounded-lg w-full p-2.5 focus:ring-1 focus:ring-teal-500"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="mobile"
              className="block mb-2 text-lg font-medium text-teal-500"
            >
              your contact *
            </label>
            <input
              type="tel"
              id="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="bg-gray-50 border-2 border-teal-500 text-sm rounded-lg w-full p-2.5 focus:ring-1 focus:ring-teal-500"
              placeholder="+91"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-teal-500"
            >
              your email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border-2 border-teal-500 text-sm rounded-lg w-full p-2.5 focus:ring-1 focus:ring-teal-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="investment"
              className="block mb-2 text-lg font-medium text-teal-500"
            >
              investment value *
            </label>
            <input
              type="number"
              id="investment"
              value={formData.investment}
              onChange={handleChange}
              className="bg-gray-50 border-2 border-teal-500 text-sm rounded-lg w-full p-2.5 focus:ring-1 focus:ring-teal-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-5">
          <div className="w-full sm:w-1/3">
            <label className="block mb-2 text-lg font-medium text-teal-500">
              country *
            </label>
            <select
              value={formData.country}
              onChange={handleCountryChange}
              className="bg-gray-50 border-2 border-teal-500 rounded-lg text-sm text-gray-700 block w-full p-2.5 focus:ring-teal-500 focus:ring-1"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.iso2} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/3">
            <label className="block mb-2 text-lg font-medium text-teal-500">
              state *
            </label>
            <select
              value={formData.state}
              onChange={(e) => {
                const selectedName = e.target.value;
                const selectedCode = states.find(
                  (s) => s.name === selectedName
                )?.iso2;
                setSelectedStateCode(selectedCode);
                setFormData((prev) => ({
                  ...prev,
                  state: selectedName,
                  city: "",
                }));
              }}
              className="bg-gray-50 border-2 border-teal-500 rounded-lg text-sm text-gray-700 block w-full p-2.5 focus:ring-teal-500 focus:ring-1"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.iso2} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full sm:w-1/3">
            <label
              htmlFor="city"
              className="block mb-2 text-lg font-medium text-teal-500"
            >
              city *
            </label>
            <select
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="bg-gray-50 border-2 border-teal-500 rounded-lg text-sm text-gray-700 block w-full p-2.5 focus:ring-teal-500 focus:ring-1"
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="background"
            className="block mb-2 text-lg font-medium text-teal-500"
          >
            tell me about your background
          </label>
          <textarea
            id="background"
            value={formData.background}
            onChange={handleChange}
            className="bg-gray-50 border-2 border-teal-500 rounded-lg text-sm w-full p-2.5 focus:ring-1 focus:ring-teal-500"
            rows={4}
            placeholder="Tell us about your background"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            type="reset"
            onClick={() => {
              setFormData({
                name: "",
                mobile: "",
                email: "",
                investment: "",
                country: "",
                state: "",
                city: "",
                background: "",
              });
              setSelectedCountryCode("");
              setSelectedStateCode("");
              setStates([]);
              setCities([]);
            }}
            className="text-teal-500 hover:bg-teal-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 border-2 border-teal-500"
          >
            reset
          </button>
          <button
            type="submit"
            className="bg-[#00a99d] text-white font-medium rounded-lg text-sm px-5 py-2.5"
          >
            {" "}
            submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}