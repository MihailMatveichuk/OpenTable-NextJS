import React from "react";

interface IInputs {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignIn,
}: IInputs) {
  return (
    <div>
      {isSignIn ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='First Name'
            value={inputs.firstName}
            name='firstName'
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Last Name'
            value={inputs.lastName}
            name='lastName'
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      )}

      <div className='my-3 text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-full'
          placeholder='Email'
          value={inputs.email}
          name='email'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      {isSignIn ? null : (
        <div className='my-3 flex justify-between text-sm'>
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='Phone'
            value={inputs.phone}
            name='phone'
            onChange={(e) => handleChangeInput(e)}
          />
          <input
            type='text'
            className='border rounded p-2 py-3 w-[49%]'
            placeholder='City'
            value={inputs.city}
            name='city'
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      )}
      <div className='text-sm my-3'>
        <input
          type='password'
          className='border rounded p-2 py-3 w-full'
          placeholder='Password'
          value={inputs.password}
          name='password'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
    </div>
  );
}
