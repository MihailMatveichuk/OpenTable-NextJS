import Header from "./components/Header";
import Head from "./head";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import Card from "./components/Card";

const prisma = new PrismaClient();

export interface IRestaurant {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  slug: string;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const fetchResraurant = async (): Promise<IRestaurant[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true,
    },
  });

  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchResraurant();

  return (
    <main>
      <Head />
      <Header />
      <div className='py-3 px-36 mt-10 flex justify-center flex-wrap'>
        {restaurants.map((restaurant: IRestaurant) => (
          <Card restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </main>
  );
}
