import { useEffect, useState } from "react";

export default function useEarlyAccess(initialData) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (initialData) {
      postEmailAccess({initialData});
    }
  }, [initialData]);

  async function postEmailAccess(data) {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("http://18.61.201.132:3000/EarlyAccess/EAccess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log("Successful access");
        setSuccess(true);
      } else {
        console.log("Server error in hook");
        setError(true);
      }
    } catch (e) {
      console.error("Network error in hook", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, success, postEmailAccess };
}
