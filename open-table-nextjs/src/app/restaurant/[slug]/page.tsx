import React from "react";
import RestaurantNav from "../components/RestaurantNav";
import Item from "../components/Item";
import Ratings from "../components/Ratings";
import DescriptionItem from "../components/DescriptionItem";
import Images from "../components/Images";
import Review from "../components/Review";
import ReservationCard from "../components/ReservationCard";
import Head from "./head";

const RestaurantDetailsPage = () => {
  return (
    <>
      <Head />
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNav />
        <Item />
        <Ratings />
        <DescriptionItem />
        <Images />
        <Review />
      </div>
      <ReservationCard />
    </>
  );
};

export default RestaurantDetailsPage;
