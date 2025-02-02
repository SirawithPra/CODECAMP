// src/app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Full-Stack Developer & Data Analyst',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Sirawith Prasithvechanon</p>
        </footer>
      </body>
    </html>
  );
}
