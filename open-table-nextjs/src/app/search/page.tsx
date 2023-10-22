import React from "react";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import Head from "./head";
import { PRICE, PrismaClient, Review } from "@prisma/client";
import { IRestaurant } from "../page";

const prisma = new PrismaClient();

interface ISearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
  reviews?: Review[];
}

const fetchRestaurantData = (searchParams: ISearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  const data = prisma.restaurant.findMany({
    where,
    select,
  });
  if (!data) {
    throw new Error();
  }

  return data;
};

const fetchLocation = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: ISearchParams }) => {
  const restaurantData = await fetchRestaurantData(searchParams);
  const location = await fetchLocation();
  const cuisine = await fetchCuisines();

  return (
    <>
      <Head />
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar
          location={location}
          cuisine={cuisine}
          searchParams={searchParams}
        />
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
