"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">BOXCARS</h1>
        <p className="hidden sm:block text-sm text-muted-foreground">+1 123 456 789</p>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" prefetch={false}>
          Home
        </Link>
        <Link href="blogs" prefetch={false}>
          Blogs
        </Link>
        <Link href="listings" prefetch={false}>
          Listings
        </Link>
        <Link href="about" prefetch={false}>
          About
        </Link>
        <Link href="contact" prefetch={false}>
          Contact
        </Link>
        <Link href="sign-in" prefetch={false}>
          Sign In
        </Link>
        <Button variant="outline">Submit Listing</Button>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" prefetch={false}>
              Home
            </Link>
            <Link href="blogs" prefetch={false}>
              Blogs
            </Link>
            <Link href="listings" prefetch={false}>
              Listings
            </Link>
            <Link href="about" prefetch={false}>
              About
            </Link>
            <Link href="contact" prefetch={false}>
              Contact
            </Link>
            <Link href="sign-in" prefetch={false}>
              Sign In
            </Link>
            <Button variant="outline">Submit Listing</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
