import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
      <input
        type="text"
        className="rounded mr-3 p-2 w-[450px] bg-white"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="bg-red-600 px-9 py-2 text-white"
        onClick={() => {
          location === "banana" ? null : router.push("search");
        }}
      >
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;