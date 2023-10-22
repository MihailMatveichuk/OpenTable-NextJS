"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == "Enter") {
      location === "" ? null : router.push(`search?city=${location}`);
      setLocation("");
    }
    return;
  };
  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <input
        type='text'
        className='rounded mr-3 p-2 w-[450px] bg-white'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className='bg-red-600 px-9 py-2 text-white'
        onClick={() => {
          location === "" ? null : router.push(`search?city=${location}`);
          setLocation("");
        }}
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
