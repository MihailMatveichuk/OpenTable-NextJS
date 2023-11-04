"use client";

import Link from "next/link";
import { useContext } from "react";
import AuthModal from "./AuthModal";
import { AuthenticationContext } from "../../../context/AuthContext";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { data, loading, error } = useContext(AuthenticationContext);
  const { singout } = useAuth();

  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        OpenTable
      </Link>
      <div>
        {error && loading ? null : (
          <div className='flex gap-3'>
            {data ? (
              <button
                className='bg-blue-900 border p-1 px-4 rounded text-white'
                onClick={singout}
              >
                Log Out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
