"use client";

import React, { useState } from "react";
import { partysize, times } from "../../../../data";
import DatePicker from "react-datepicker";

const ReservationCard = ({
  open_time,
  close_time,
}: {
  open_time: string;
  close_time: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDate = (date: Date | null) => {
    if (date) {
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const filterTimeByRestaurantOpenWidow = () => {
    const timesInWindow: typeof times = [];
    let isWithinWindow = false;
    times.forEach((time) => {
      if (!isWithinWindow && time.time === open_time) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesInWindow.push(time);
      }
      if (time.time === close_time) {
        isWithinWindow = false;
      }
    });
    return timesInWindow;
  };

  return (
    <div className='w-[27%] relative text-reg'>
      <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
        <div className='text-center border-b pb-2 font-bold'>
          <div className='h4 mr-7 text-lg'>Make a Reservation</div>
        </div>
        <div className='my-3 flex flex-col'>
          <label htmlFor=''>Party size</label>
          <select
            name=''
            className='py-3 border-b rounded font-light bg-white'
            id=''
          >
            {partysize.map((size, id) => (
              <option value={size.value} key={id}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor=''>Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
              className='py-3 border-b font-light text-reg w-24'
              dateFormat='MMMM d'
              wrapperClassName='[w-48%]'
            />
          </div>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor=''>Time</label>
            <select
              id=''
              name=''
              className='py-3
                        border-b
                        font-light 
                        bg-white 
                        outline-white'
            >
              {filterTimeByRestaurantOpenWidow().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'>
            Find a time
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationCard;
