import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactUsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState(null);

  const postContact = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("http://18.61.201.132:3000/contactus/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const responseData = await res.json();
      setContact(responseData);
      console.log("Posted data successfully", responseData);
    } catch (error) {
      console.error("Error posting contact data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider value={{ contact, postContact, loading }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactUsProvider");
  }
  return context;
};
