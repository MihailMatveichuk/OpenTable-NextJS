import React from "react";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";

const Search = () => {
  return (
    <>
      <Head />
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <RestaurantCard />
      </div>
    </>
  );
};

export default Search;
