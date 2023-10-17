import React from "react";
import RestaurantNav from "../components/RestaurantNav";
import Item from "../components/Item";
import Ratings from "../components/Ratings";
import DescriptionItem from "../components/DescriptionItem";
import Images from "../components/Images";
import Review from "../components/Review";
import ReservationCard from "../components/ReservationCard";
import Head from "./head";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IRestaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

const fetchRestaurantData = async (slug: string): Promise<IRestaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) {
    throw new Error();
  }

  return restaurant;
};

const RestaurantDetailsPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const restaurant = await fetchRestaurantData(params.slug);
  return (
    <>
      <Head />
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNav slug={restaurant.slug} />
        <Item name={restaurant.name} />
        <Ratings />
        <DescriptionItem desc={restaurant.description} />
        <Images images={restaurant.images} key={restaurant.id} />
        <Review />
      </div>
      <ReservationCard />
    </>
  );
};

export default RestaurantDetailsPage;
