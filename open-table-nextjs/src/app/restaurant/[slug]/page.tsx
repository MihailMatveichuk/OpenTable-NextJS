import React from "react";
import RestaurantNav from "../components/RestaurantNav";
import Item from "../components/Item";
import Ratings from "../components/Ratings";
import DescriptionItem from "../components/DescriptionItem";
import Images from "../components/Images";
import ReviewItem from "../components/Review";
import ReservationCard from "../components/ReservationCard";
import Head from "./head";
import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface IRestaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
  open_time: string;
  close_time: string;
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
      reviews: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    notFound();
    // throw new Error("Cannot find a restaurant");
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
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNav slug={restaurant.slug} />
        <Item name={restaurant.name} />
        <Ratings reviews={restaurant.reviews} />
        <DescriptionItem desc={restaurant.description} />
        <Images images={restaurant.images} key={restaurant.id} />
        <ReviewItem reviews={restaurant.reviews} />
      </div>
      <ReservationCard
        open_time={restaurant.open_time}
        close_time={restaurant.close_time}
      />
    </>
  );
};

export default RestaurantDetailsPage;
