import React from "react";
import NavBarMenu from "../../components/NavBarMenu";
import Header from "../../components/Header";
import RestaurantNav from "../../components/RestaurantNav";

const RestaurantDetailsPageMenu = () => {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNav />
          <NavBarMenu />
        </div>
      </div>
    </>
  );
};

export default RestaurantDetailsPageMenu;
