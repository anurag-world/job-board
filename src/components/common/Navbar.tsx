import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white">
            JobFinder
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center">
          <div className="mr-4">
            <Button
              href="/login"
              className="mr-3 border border-solid border-white text-white px-4 py-2 rounded-xl"
            >
              Login
            </Button>
            <Button
              href="/signup"
              className="bg-white text-blue-700 px-4 py-2 rounded-xl"
            >
              Sign Up
            </Button>
          </div>

          <div className="border border-solid border-gray-200 h-5"></div>

          <div className="ml-4">
            <Link
              href="/jobs"
              className="text-white hover:text-slate-200 capitalize"
            >
              For employers
            </Link>
          </div>
        </div>

        {/* Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl text-white hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
