import React from "react";
import RestaurantNav from "./RestaurantNav";
import Ratings from "./Ratings";
import Images from "./Images";
import Review from "./Review";
import ReservationCard from "./ReservationCard";
import DescriptionItem from "./DescriptionItem";
import Item from "./Item";

const Description = () => {
  return (
    <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNav slug={""} />
        <Item name={""} />
        <Ratings reviews={[]} />
        <DescriptionItem desc={""} />
        <Images images={[]} />
        <Review reviews={[]} />
      </div>
      <ReservationCard />
    </div>
  );
};

export default Description;
