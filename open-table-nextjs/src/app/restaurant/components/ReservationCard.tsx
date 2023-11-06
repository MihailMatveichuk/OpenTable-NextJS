"use client";

import React, { useState } from "react";
import { partysize, times } from "../../../../data";
import DatePicker from "react-datepicker";
import useAvalability from "../../../../hooks/useAvalability";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import {
  Time,
  convertToDisplayTime,
} from "../../../../utils/convertToDispalyTime";

const ReservationCard = ({
  open_time,
  close_time,
  slug,
}: {
  open_time: string;
  close_time: string;
  slug: string;
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const { data, loading, error, fetchAvailability } = useAvalability();
  const [time, setTime] = useState(open_time);
  const [partySize, setPartySize] = useState(4);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
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

  const handleClick = () => {
    fetchAvailability({
      slug,
      day,
      time,
      partySize,
    });
  };

  return (
    <div className='w-[27%] relative text-reg'>
      <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
        <div className='text-center border-b pb-2 font-bold'>
          <div className='h4 mr-7 text-lg '>Make a Reservation</div>
        </div>
        <div className='my-3 flex flex-col'>
          <label htmlFor=''>Party size</label>
          <select
            name=''
            className='py-3 border-b rounded font-light bg-white'
            id=''
            value={partySize}
            onChange={(e) => {
              setPartySize(+e.target.value);
            }}
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
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {filterTimeByRestaurantOpenWidow().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='mt-5'>
          <button
            className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? <CircularProgress color='inherit' /> : "Find a Time"}
          </button>
        </div>
        {data && data.length ? (
          <div className='mt-4'>
            <p className='text-reg'>Select a Time</p>
            <div className='grid grid-cols-2 mt-2'>
              {data.map((item) => {
                return item.available ? (
                  <Link
                    href={`/reserve/${slug}?date=${day}T${item.time}&partySize=${partySize}`}
                    className='bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3'
                  >
                    <p className='text-sm font-bold'>
                      {convertToDisplayTime(item.time as Time)}
                    </p>
                  </Link>
                ) : (
                  <div className='bg-gray-300 p-2 w-24 text-center text-white mb-3 rounded mr-3'>
                    <p className='text-sm font-bold'>
                      {convertToDisplayTime(item.time as Time)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ReservationCard;
