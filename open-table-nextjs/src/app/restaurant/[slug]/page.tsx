import React from "react";
import NavBar from "@/app/components/NavBar";
import Header from "../components/Header";
import Description from "../components/Description";

const RestaurantDetailsPage = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <Description />
      </main>
    </main>
  );
};

export default RestaurantDetailsPage;
