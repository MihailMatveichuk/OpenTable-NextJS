import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        {/* navbar */}
        <nav className='bg-white p-2 flex justify-between'>
          <a href='' className='font-bold text-gray-700 text-2xl'>
            OpenTable
          </a>
          <div>
            <div className='flex gap-3'>
              <button className='bg-blue-900 border p-1 px-4 rounded'>
                Sign In
              </button>
              <button className='text-black border p-1 px-4 rounded'>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        <main>
          {/* header */}
          <div className='h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2'>
            <div className='text-center mt-10'>
              <h1 className='text-5xl font-bold mb-2'>
                Find your table for any ocassions
              </h1>
            </div>
          </div>
          {/* header */}
        </main>
      </main>
    </main>
  );
}
