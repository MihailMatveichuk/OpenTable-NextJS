"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RestaurantNav = ({ slug }: { slug: string }) => {
  const pathname = usePathname();

  return (
    <nav className='flex text-reg border-b pb-2'>
      <Link
        href={`/restaurant/${slug}`}
        className='mr-7'
        style={
          pathname === `/restaurant/${slug}`
            ? { fontWeight: 500 }
            : { fontWeight: 300 }
        }
      >
        Overview
      </Link>
      <Link
        href={`/restaurant/${slug}/menu`}
        className='mr-7'
        style={
          pathname === `/restaurant/${slug}/menu`
            ? { fontWeight: 500 }
            : { fontWeight: 300 }
        }
      >
        Menu
      </Link>
    </nav>
  );
};

export default RestaurantNav;
