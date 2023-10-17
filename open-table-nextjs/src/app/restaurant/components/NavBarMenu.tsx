import React from "react";
import MenuCard from "./MenuCard";
import { Item } from "@prisma/client";

const NavBarMenu = ({ menu }: { menu: Item[] }) => {
  return (
    <div className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        {menu.length ? (
          <div className='flex flex-wrap justify-between'>
            {menu.map((item) => (
              <MenuCard item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <p className='font-bold'>Menu is Empty</p>
        )}
      </div>
    </div>
  );
};

export default NavBarMenu;
