import Prise from "@/app/components/Prise";
import { IRestaurant } from "@/app/page";
import { Cuisine, Location, PRICE } from "@prisma/client";
import React from "react";

const SearchSideBar = ({
  location,
  cuisine,
  restaurant,
}: {
  location: Location[];
  cuisine: Cuisine[];
  restaurant: IRestaurant[];
}) => {
  const filteredPrices = restaurant.map((item) => item.price);
  const prices = Array.from(new Set(filteredPrices));

  return (
    <div className='w-1/5'>
      <div className='border-b pb-4'>
        <h1 className='mb-2'>Region</h1>
        {location.map((region) => (
          <p className='font-light text-reg capitalize' key={region.id}>
            {region.name}
          </p>
        ))}
      </div>
      <div className='border-b pb-4 mt-3'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisine.map((item) => (
          <p className='font-light text-reg capitalize' key={item.id}>
            {item.name}
          </p>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex flex gap-2'>
          {prices.map((price) => (
            <button
              className='border w-fit text-reg font-light rounded p-1'
              key={price}
            >
              <Prise price={price} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
