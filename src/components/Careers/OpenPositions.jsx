import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Filter from "./filter";
import AllJobs from "./AllJobs";

const OpenPositions = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchJobs = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);

      const searchParams = new URLSearchParams();

      // Support query-based search
      if (params.query) {
        searchParams.append("role", params.query);
      }

      // Add optional filters
      if (params.location) searchParams.append("location", params.location);
      if (params.experience)
        searchParams.append("experience", params.experience);
      if (params.department)
        searchParams.append("department", params.department);

      const res = await fetch(
        `http://18.61.201.132:3000/job/search?${searchParams}`
      );
      const data = await res.json();

      if (data.status) {
        setResults(data.jobUpload);
      } else {
        setResults([]);
        setError(data.message || "No results found.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!query.trim()) {
      setError("Enter a job role");
      return;
    }
    fetchJobs({ query });
  };

  return (
    <div>
      <div className="px-4 pb-10 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-['Fredoka_One'] md:text-5xl text-teal-600 mb-4">
            open positions
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-2">
            calling all talent! We are hiring for the positions listed below.
          </p>
          <p className="text-lg md:text-2xl text-teal-600 mb-8">
            if you are ready to join the mom team, apply today only!
          </p>

          <div className="flex gap-2 lg:px-32">
            <div className="flex items-center gap-2 bg-[#BFE9E6] rounded-full p-2 w-full max-w-lg mx-auto">
              <div className="bg-white rounded-full items-center justify-center p-1">
                <CiSearch className="text-xl text-teal-700 "size={30} />
              </div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search job role or designation"
                className="flex-grow border-none outline-none bg-transparent text-sm md:text-base text-black placeholder-gray-600"
              />
              <button
                onClick={handleSearch}
                className="text-sm font-medium rounded-3xl bg-teal-600 text-white px-4 py-2 hover:bg-[#FADB14] hover:text-black transition"
              >
                search
              </button>
            </div>
            
          </div>
          <Filter onApply={fetchJobs}/>
        </div>
      </div>

      <AllJobs Result={results} loading={loading} error={error} />
    </div>
  );
};

export default OpenPositions;