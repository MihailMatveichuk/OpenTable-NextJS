import React, { useState } from "react";
import axios from "axios";

const useAvalability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setDate] = useState(null);

  const fetchAvailability = async ({
    name,
    day,
    time,
    partySize,
  }: {
    name: string;
    day: string;
    time: string;
    partySize: string;
  }) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${name}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setDate(response.data);
    } catch (error: any) {
      setDate(null);
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };

  return [data, error, loading, fetchAvailability];
};

export default useAvalability;
