import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import AuthContext from '../../context/AuthContext';
import 'react-datepicker/dist/react-datepicker.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="m-auto bg-white">
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
