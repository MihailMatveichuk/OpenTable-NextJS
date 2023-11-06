import React, { useState } from "react";
import axios from "axios";

const useAvalability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setDate] = useState<
    { time: string; available: boolean }[] | null
  >();
  console.log(data);

  const fetchAvailability = async ({
    slug,
    day,
    time,
    partySize,
  }: {
    slug: string;
    day: string;
    time: string;
    partySize: number;
  }) => {
    console.log(slug, day, time, partySize);
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
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

  return { data, error, loading, fetchAvailability };
};

export default useAvalability;
