import Link from "next/link";
import React from "react";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Prise from "@/app/components/Prise";

export interface ISelectedData {
  id: number;
  main_image: string;
  name: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  slug: string;
}

const RestaurantCard = ({ data }: { data: ISelectedData }) => {
  return (
    <div className='border-b flex pb-5'>
      <img src={data.main_image} alt='' className='w-44 h-36 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{data.name}</h2>
        <div className='flex items-start'>
          <div className='flex mb-2'>*****</div>
          <p className='ml-2 text-sm'>Awesome</p>
        </div>
        <div className='mb-9'>
          <div className='font-light flex text-reg'>
            <p className='mr-4'>{<Prise price={data.price} />}</p>
            <p className='mr-4 capitalize'>{data.cuisine.name}</p>
            <p className='mr-4 capitalize'>{data.location.name}</p>
          </div>
        </div>
        <div className='text-red-600'>
          <Link href={`/restaurant/${data.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
