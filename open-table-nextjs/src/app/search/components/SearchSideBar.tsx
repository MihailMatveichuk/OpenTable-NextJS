"use client";

import Prise from "@/app/components/Prise";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import React from "react";

const SearchSideBar = ({
  location,
  cuisine,
  searchParams,
}: {
  location: Location[];
  cuisine: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const prices = [PRICE.CHEAP, PRICE.REGULAR, PRICE.EXPENSIVE];

  return (
    <div className='w-1/5'>
      <div className='border-b pb-4 flex flex-col'>
        <h1 className='mb-2'>Region</h1>
        {location.map((region) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                city: region.name,
              },
            }}
            style={
              searchParams.city === region.name
                ? { fontWeight: 500 }
                : { fontWeight: 300 }
            }
            id={region.name}
            className='font-light text-reg capitalize'
            key={region.id}
          >
            {region.name}
          </Link>
        ))}
      </div>
      <div className='border-b pb-4 mt-3 flex flex-col'>
        <h1 className='mb-2'>Cuisine</h1>
        {cuisine.map((item) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                ...searchParams,
                cuisine: item.name,
              },
            }}
            style={
              searchParams.cuisine === item.name
                ? { fontWeight: 500 }
                : { fontWeight: 300 }
            }
            className='font-light text-reg capitalize'
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className='mt-3 pb-4'>
        <h1 className='mb-2'>Price</h1>
        <div className='flex flex gap-2'>
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: price,
                },
              }}
              style={
                searchParams.price === price
                  ? { fontWeight: 500 }
                  : { fontWeight: 300 }
              }
              className='border w-fit text-reg font-light rounded p-1 text-center'
              key={price}
            >
              <Prise price={price} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
