import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Cards from "./components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <Cards />
        </main>
      </main>
    </main>
  );
}
