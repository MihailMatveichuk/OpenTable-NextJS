import Link from "next/link";
import React from "react";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Prise from "@/app/components/Prise";
import { calculatReviewRating } from "../../../../utils/calculatReviewRating";
import Stars from "@/app/components/Stars";

export interface ISelectedData {
  id: number;
  main_image: string;
  name: string;
  price: PRICE;
  location: Location;
  cuisine: Cuisine;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({ data }: { data: ISelectedData }) => {
  const renderRatingText = () => {
    const rating = calculatReviewRating(data.reviews);
    if (rating == 0) return "Non rating";
    else if (rating > 0 && rating <= 2.5) return "Awefull";
    else if (rating > 2.5 && rating <= 3.7) return "Good";
    else return "Awesome";
  };

  return (
    <div className='border-b flex pb-5'>
      <img src={data.main_image} alt='' className='w-44 h-36 rounded' />
      <div className='pl-5'>
        <h2 className='text-3xl'>{data.name}</h2>
        <div className='flex items-start'>
          <Stars reviews={data.reviews} />
          <p className='ml-2 text-sm'>{renderRatingText()}</p>
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
