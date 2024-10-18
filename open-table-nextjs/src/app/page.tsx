import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client';
import CardList from './components/CardList';
import Header from './components/Header';
import Head from './head';
import Footer from './components/Footer';

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

const prisma = new PrismaClient();

export const fetchRestaurant = async (): Promise<IRestaurant[]> => {
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
  const restaurants: IRestaurant[] = await fetchRestaurant();
  const maxCount = restaurants.length;

  return (
    <main>
      <Head />
      <Header />
      <CardList data={restaurants} maxValue={maxCount} />
      <Footer />
    </main>
  );
}
