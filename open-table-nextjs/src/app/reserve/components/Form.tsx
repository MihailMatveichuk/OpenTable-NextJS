"use client";

import React, { useEffect, useState } from "react";
import useReservation from "../../../../hooks/useReservation";
import { Alert, CircularProgress } from "@mui/material";

interface IInputs {
  bookerFirstName: string;
  bookerLastName: string;
  bookerPhone: string;
  bookerEmail: string;
  bookerOccasion?: string;
  bookerRequest?: string;
}

const Form = ({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) => {
  const [inputs, setInputs] = useState<IInputs>({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });
  const [day, time] = date.split("T");
  const { error, loading, createReservationData } = useReservation();
  const [disabled, setDisabled] = useState(true);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerPhone &&
      inputs.bookerEmail
    ) {
      return setDisabled(false);
    }
    setDisabled(true);
  }, [inputs]);

  const handleClick = async () => {
    const booking = await createReservationData({
      slug,
      day,
      time,
      partySize,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerPhone: inputs.bookerPhone,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
    });
    console.log(booking);
  };

  return (
    <div className='mt-10 flex flex-wrap justify-between w-[660px]'>
      {error ? (
        <div className='mb-8'>
          <Alert severity='error'>{error}</Alert>
        </div>
      ) : null}
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='First name'
        value={inputs.bookerFirstName}
        name='bookerFirstName'
        onChange={handleChangeInput}
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='Last name'
        value={inputs.bookerLastName}
        name='bookerLastName'
        onChange={handleChangeInput}
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='Phone number'
        value={inputs.bookerPhone}
        name='bookerPhone'
        onChange={handleChangeInput}
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='Email'
        value={inputs.bookerEmail}
        name='bookerEmail'
        onChange={handleChangeInput}
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='Occasion (optional)'
        value={inputs.bookerOccasion}
        name='bookerOccasion'
        onChange={handleChangeInput}
      />
      <input
        type='text'
        className='border rounded p-3 w-80 mb-4'
        placeholder='Requests (optional)'
        value={inputs.bookerRequest}
        name='bookerRequests'
        onChange={handleChangeInput}
      />
      <button
        className='bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300'
        disabled={disabled || loading}
        onClick={handleClick}
      >
        {loading ? (
          <CircularProgress color='inherit' />
        ) : (
          "Complete Reservation"
        )}
      </button>

      <p className='mt-4 text-sm text-center'>
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
};

export default Form;
