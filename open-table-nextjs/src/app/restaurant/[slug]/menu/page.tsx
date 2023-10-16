import React from "react";
import NavBarMenu from "../../components/NavBarMenu";
import RestaurantNav from "../../components/RestaurantNav";
import Head from "./head";

const RestaurantDetailsPageMenu = () => {
  return (
    <>
      <Head />
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNav />
        <NavBarMenu />
      </div>
    </>
  );
};

export default RestaurantDetailsPageMenu;
