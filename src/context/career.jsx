import React, { useContext, useEffect, useState, createContext } from "react";

export const CareerContext = createContext("");

export const CareerProvider = ({ children }) => {
  const [career, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobFilter, setJobFilter] = useState(null);

  const getCareer = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://mom-load-balancer10-1035236598.ap-south-1.elb.amazonaws.com:3000/job/departments");

      if (!response.ok) {
        throw new Error(`error status: ${response.status}`);
      }

      const res = await response.json();
      setCareer(res);
      console.log("data fetched in career context", res);
    } catch (err) {
      console.log("failed to fetch career data", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCareer();
  }, []);

  const FilterJobs = async () => {
    try {
      const response = await fetch(
        `http://18.61.201.132:3000/job/search?role=${encodeURIComponent(
          query
        )}&location=${encodeURIComponent(
          location
        )}&experience=${encodeURIComponent(experience)}`
      );
      if (!response.ok) {
        console.log(`error ${response.status}`);
      }
      const res = await response.json();
      setJobFilter(res);
      console.log("job filter", res);
    } catch (error) {
      console.log("error in fetching jobs");
    }
  };

  return (
    <CareerContext.Provider
      value={{ career, getCareer, loading, error, jobFilter, FilterJobs }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error("useCareer must be used within a CareerProvider");
  }
  return context;
};
