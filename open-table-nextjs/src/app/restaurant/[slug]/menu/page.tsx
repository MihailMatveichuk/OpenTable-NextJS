import React from "react";
import Link from "next/link";

const RestaurantDetailsPageMenu = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* navbar */}
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
        {/* navbar */}
        {/* header */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalized text-shadow text-center">
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* header */}
        {/* description portion */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* restaurants navbar */}
            <nav className="flex text-reg border-b pb-2">
              <Link href="/restaurant/milestone-grill" className="mr-7">
                Overview
              </Link>
              <Link href="/restaurant/milestone-grill/menu" className="mr-7">
                Menu
              </Link>
            </nav>
            {/* restaurants navbar */}
            {/* menu */}
            <div className="bg-white mt-5">
              <div>
                <div className="mt-4 pb-1 mb-1">
                  <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                  {/* menu card */}
                  <div className="border rounded p-3 w-[49%] mb-3">
                    <h3 className="font-bold text-lg">Surf and Turf</h3>
                    <p className="font-light mt-1 text-sm">
                      A well done steak with lobster and rice
                    </p>
                    <p className="mt-7">$80.00</p>
                  </div>
                  {/* menu card */}
                </div>
              </div>
            </div>
            {/* menu */}
          </div>
        </div>
        {/* reservation card portion */}
        {/* description portion */}
      </main>
    </main>
  );
};

export default RestaurantDetailsPageMenu;
