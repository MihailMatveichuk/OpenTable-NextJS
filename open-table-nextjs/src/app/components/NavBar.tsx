import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex gap-3">
          <button className="bg-blue-900 border p-1 px-4 rounded text-white">
            Sign In
          </button>
          <button className="text-black border p-1 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
