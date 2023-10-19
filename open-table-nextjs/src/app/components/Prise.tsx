import React from "react";
import { PRICE } from "@prisma/client";

export default function Prise({ price }: { price: PRICE }) {
  const renerPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className='text-gray-400'>$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      return (
        <>
          <span>$$$</span>
          <span className='text-gray-400'>$</span>
        </>
      );
    } else {
      return (
        <>
          <span>$$$$</span>
        </>
      );
    }
  };
  return <p className='flex'>{renerPrice()}</p>;
}
