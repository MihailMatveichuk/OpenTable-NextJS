import React from 'react';
import Link from 'next/link';
import Prise from './Prise';
import Stars from './Stars';
import { IRestaurant } from '../page';

interface IProps {
  restaurant: IRestaurant;
}

const Card = ({ restaurant }: IProps) => {
  return (
    <div className="min-w-[280px] w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img
          className="object-cover h-40 w-96"
          src={restaurant.main_image}
          alt=""
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            {<Stars reviews={restaurant.reviews} />}
            <p className="ml-2">
              {`${restaurant.reviews.length}`} review
              {restaurant.reviews.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex text-reg font-light gap-3 capitalize">
            <p>{restaurant.cuisine.name}</p>
            <Prise price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};
export default Card;
