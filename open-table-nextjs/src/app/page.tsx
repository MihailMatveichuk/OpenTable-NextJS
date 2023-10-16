import { Inter } from "next/font/google";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head />
      <Header />
      <Cards />
    </main>
  );
}
