import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import AuthContext from "@/app/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <AuthContext>
            <main className='max-w-screen-2xl m-auto bg-white'>
              <NavBar />
              <main>{children}</main>
            </main>
          </AuthContext>
        </main>
        <head />
      </body>
    </html>
  );
}
