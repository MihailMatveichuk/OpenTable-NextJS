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
              <button className='bg-blue-900 border p-1 px-4 rounded text-white'>
                Sign In
              </button>
              <button className='text-black border p-1 px-4 rounded'>
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        {/* navbar */}
        {/* header */}
        <div className='h-96 overflow-hidden'>
          <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center'>
            <h1 className='text-7xl text-white capitalized text-shadow text-center'>
              Milestones Grill (Toronto)
            </h1>
          </div>
        </div>
        {/* header */}
        {/* description portion */}
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            {/* restaurants navbar */}
            <nav className='flex text-reg border-b pb-2'>
              <a href='' className='mr-7'>
                Overview
              </a>
              <a href='' className='mr-7'>
                Menu
              </a>
            </nav>
            {/* restaurants navbar */}
            {/* title */}
            <div className='mt-4 border-b pb-6'>
              <h1 className='font-bold text-6xl'>Milestones Grill</h1>
            </div>
            {/* title */}
            {/* ratings */}
            <div className='flex items-end'>
              <div className='ratings mt-2 flex items-center'>
                <p>*****</p>
                <p className='text-reg ml-3'>4.9</p>
              </div>
              <div>
                <p className='text-reg ml-4'>600 Reviews</p>
              </div>
            </div>
            {/* ratings */}
            {/* description */}
            <div className='mt-4'>
              <p className='text-lg font-light'>
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* description */}
          </div>
        </div>
        {/* description portion */}
      </main>
    </main>
  );
}
