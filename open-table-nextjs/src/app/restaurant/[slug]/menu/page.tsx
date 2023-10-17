import React from "react";
import NavBarMenu from "../../components/NavBarMenu";
import RestaurantNav from "../../components/RestaurantNav";
import Head from "./head";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchRestaurantItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant.items;
};

const RestaurantDetailsPageMenu = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const menu = await fetchRestaurantItems(params.slug);
  return (
    <>
      <Head />
      <div className='bg-white w-[100%] rounded p-3 shadow'>
        <RestaurantNav slug={params.slug} />
        <NavBarMenu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantDetailsPageMenu;
