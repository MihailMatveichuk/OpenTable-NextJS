import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import Head from "./head";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

const ReservationPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <Head />
      <div className='border-t h-screen'>
        <div className='py-9 w-3/5 m-auto'>
          <Header
            name={restaurant.name}
            image={restaurant.main_image}
            date={searchParams.date}
            partySize={searchParams.partySize}
          />
          <Form
            slug={params.slug}
            date={searchParams.date}
            partySize={searchParams.partySize}
          />
        </div>
      </div>
    </>
  );
};

export default ReservationPage;
