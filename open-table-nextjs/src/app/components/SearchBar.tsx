'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const handleKeyDown = (e: { key: string }) => {
    if (e.key == 'Enter') {
      location === '' ? null : router.push(`search?city=${location}`);
      setLocation('');
    }
    return;
  };
  return (
    <div className="text-left text-lg my-3 m-auto flex flex-col items-center gap-2 lg:flex lg:justify-center">
      <input
        type="text"
        className="rounded mr-3 p-2 w-[80%] lg:w-[384px] bg-white"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-red-600 md:px-9 px-5 md:py-2 py-1 text-white"
        onClick={() => {
          location === '' ? null : router.push(`search?city=${location}`);
          setLocation('');
        }}
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
