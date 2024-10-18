'use client';

import React, { useState } from 'react';
import Card from './Card';
import { IRestaurant } from '../page';

const DEFAULT_CARDS_VALUE = 12;
const STEP = 4;
const CardList = ({
  data,
  maxValue,
}: {
  data: IRestaurant[];
  maxValue: number;
}) => {
  const [maxCount, setMaxCount] = useState(DEFAULT_CARDS_VALUE);
  const isEnd = maxValue === maxCount;
  return (
    <div className="w-[100%] flex flex-col items-center gap-3">
      <div className="px-[5%] mt-10 flex justify-center flex-wrap h-[1000px] overflow-scroll md:h-auto md:overflow-auto">
        {data
          .map((restaurant: IRestaurant) => (
            <Card restaurant={restaurant} key={restaurant.id} />
          ))
          .splice(0, maxCount)}
      </div>
      {!isEnd && (
        <button
          onClick={() => setMaxCount(maxCount + STEP)}
          className="bg-blue-500 text-white p-2 hover:bg-blue-700 outline-none mb-10"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default CardList;
