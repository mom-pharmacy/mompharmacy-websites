
import React, { useContext, useEffect, useState, createContext } from "react";

export const CareerContext = createContext("");

export const CareerProvider = ({ children }) => {
  const [career, setCareer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCareer = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/job/alljobs");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
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

  return (
    <CareerContext.Provider value={{ career, getCareer, loading, error }}>
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