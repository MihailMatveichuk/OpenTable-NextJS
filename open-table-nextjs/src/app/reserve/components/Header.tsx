import React from "react";
import {
  Time,
  convertToDisplayTime,
} from "../../../../utils/convertToDispalyTime";
import { format } from "date-fns";

const Header = ({
  name,
  image,
  date,
  partySize,
}: {
  name: string;
  image: string;
  date: string;
  partySize: string;
}) => {
  const day = date.split("T")[0];
  const time = convertToDisplayTime(date.split("T")[1] as Time);
  return (
    <div>
      <h3 className='font-bold'>You're almost done!</h3>
      <div className='mt-5 flex'>
        <img src={image} alt='' className='w-32 h-24 rounded' />
        <div className='ml-4'>
          <h1 className='text-3xl font-bold capitalize'>{name}</h1>
          <div className='flex mt-3 font-bold'>
            <p className='mr-6'>{format(new Date(day), "ccc, LLL d")}</p>
            <p className='mr-6'>{time}</p>
            <p className='mr-6'>
              {partySize} {+partySize !== 1 ? "people" : "person"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
