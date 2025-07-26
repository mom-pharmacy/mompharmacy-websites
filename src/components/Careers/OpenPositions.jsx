import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import AllJobs from './AllJobs'

const OpenPositions = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Enter a job role");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:3000/job/search?role=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.status) {
        setResults(data.roles);
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

  return (
    <div>
    <div className="px-4 py-10 bg-white">
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
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-[#BFE9E6] rounded-3xl px-3 py-2 w-full max-w-lg mx-auto">
            <div className="bg-white rounded-full p-1.5">
              <CiSearch className="text-xl text-teal-700" />
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
              className="text-sm font-medium rounded-3xl bg-teal-600 text-white px-3 py-1.5 hover:bg-[#FADB14] hover:text-black transition"
            >
              search
            </button>
          </div>
          <div>
            <button className="text-sm font-medium text-xl sm:text-1xl flex items-center rounded-3xl text-teal-600 border-2 px-4 py-1">
              filter
            </button>
          </div>
        </div>

       
      </div>
    </div>
     <AllJobs Result={results} />
    </div>
  );
};

export default OpenPositions;














