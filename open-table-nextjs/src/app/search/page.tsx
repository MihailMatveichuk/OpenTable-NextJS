import React from "react";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";
import { PrismaClient } from "@prisma/client";
import { IRestaurant } from "../page";

const prisma = new PrismaClient();

const fetchRestaurantData = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) prisma.restaurant.findMany({ select });
  const data = prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city?.toLowerCase(),
        },
      },
    },
    select,
  });
  if (!data) {
    throw new Error();
  }

  return data;
};
const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurantData = await fetchRestaurantData(searchParams.city);

  return (
    <>
      <Head />
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar />
        <div className='w-5/6'>
          {restaurantData.length ? (
            <>
              {restaurantData.map((restaurant: IRestaurant) => (
                <RestaurantCard data={restaurant} key={restaurant.id} />
              ))}
            </>
          ) : (
            <p className='font-bold'>Sorry. we didn't find any restaurant</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
