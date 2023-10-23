'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMyContext } from '@/app/context';

const Navbar = () => {
  const { subTotal,handleClick, showLinks, setShowLinks } = useMyContext();

  const toggleNav = () => {
    setShowLinks(!showLinks);
  };
 
  return (
    <header className="bg-white text-gray-600 body-font h-[80px]">
      <div className="container mx-auto flex flex-wrap p-5 ">
        <Link href="/" className="flex title-font font-medium items-center justify-between text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">GmEcommerce</span>
        </Link>

          <nav
          className={` ml-20 hidden md:flex flex-wrap flex- gap-2  items-center text-base justify-center  `}
        >
          <Link className="mr-5 hover:text-gray-900" href="/" >
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/about" >
            About
          </Link>
          <Link className="mr-5 hover:text-gray-900" href="/products" >
            Products
          </Link>
        </nav>

        <div className="md:hidden ml-auto absolute top-6 right-2">
          <button onClick={toggleNav} className="text-gray-600 focus:outline-none">
            {showLinks ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          className={`shadow-2xl absolute top-20 right-7 p-5 bg-[#6366f1] text-whitea rounded-xl z-10 md:ml-auto flex flex-wrap flex-col gap-2  items-center text-base justify-center md:flex-nowrap ${
            showLinks ? 'block' : 'hidden'
          }`}
        >
          <Link className="mr-5 text-white hover:text-gray-900" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link className="mr-5 text-white hover:text-gray-900" href="/about" onClick={handleClick}>
            About
          </Link>
          <Link className="mr-5 text-white hover:text-gray-900" href="/products" onClick={handleClick}>
            Products
          </Link>
        </nav>

        <div className="absolute top-6 right-10 flex justify-center cursor-pointer items-center">
          {subTotal === 0 ? (
            <p className="bg-none flex-none" style={{ backgroundColor: 'none' }}></p>
          ) : (
            <p className="absolute top-0 right-0 bg-red-500 rounded-full text-center h-3 w-3 text-white text-[10px]">
            {subTotal}
          </p>
          )}
         
          <Link className="hover:text-gray-900 text-[24px] " href="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

