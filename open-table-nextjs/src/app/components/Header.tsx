import React from 'react';

import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-3">
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-white mt-5">
          Find your table for any ocassions
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
