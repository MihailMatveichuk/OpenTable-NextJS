import React from "react";
import MenuCard from "./MenuCard";

const NavBarMenu = () => {
  return (
    <div className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        <MenuCard />
      </div>
    </div>
  );
};

export default NavBarMenu;
