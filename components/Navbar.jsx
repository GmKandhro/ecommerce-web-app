'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useMyContext } from '@/app/context';
const Navbar = () => {
  let {subTotal} = useMyContext()
  return (

    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl">Ecommerce</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
      <Link className="mr-5 hover:text-gray-900" href='/about'>About</Link>
      <Link className="mr-5 hover:text-gray-900" href='/products'>Products</Link>
    </nav>
  

    <div className='relative flex justify-center cursor-pointer items-center'>
      {subTotal == 0  ? <p className='bg-none' style={{backgroundColor:'none'}}></p> : <p className='absolute top-0 right-0 bg-red-500 rounded-full text-center h-3 w-3  text-white text-[10px]'>{subTotal}</p>}
      <p className='absolute top-0 right-0 bg-red-500 rounded-full text-center h-3 w-3  text-white text-[10px]'>{subTotal}</p>
      <Link className=" hover:text-gray-900 text-[24px] " href='/cart'><AiOutlineShoppingCart /></Link>
    </div>
  </div>
</header>
    </>
  )
}

export default Navbar