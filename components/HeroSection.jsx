'use client'
import React from 'react';
import { useMyContext } from '@/app/context';
import { ProductsCategories } from '@/app/constants/data';
import Link from 'next/link';
const HeroSection = () => {
  let {search, setSearch , setProductCat} =  useMyContext()
  return (
    <>
    <div className="w-full   flex flex-wrap">
      <div className="w-full">
        <div className="flex bg-center flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4" >
          <img
            alt="gallery"
            className="w-full object-cover h-full object-center block opacity-30 absolute inset-0"
            src="https://cdn.pixabay.com/photo/2017/03/01/10/03/online-sales-2108028_1280.jpg"
          />
          <div className="text-center flex flex-col justify-center items-center relative z-10 w-full">
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">The Best Ecommerce Store</h2>
            <p className="leading-relaxed w-[900px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate atque magnam eaque, eum praesentium vel mollitia minima? Eos, adipisci perferendis!.</p>
            <div>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className='w-[500px] px-2 py-1 outline-none border-1 rounded-sm' type="text" />
            <Link href='/searchResults' className="mt-3 bg-[#cac4c4] cursor-pointer py-1 px-2 rounded-lg text-indigo-500 inline-flex items-center">
              Search Product
             
            </Link>
            </div>
            <Link href='/products' className="mt-3 text-indigo-500 inline-flex items-center">
              Shop Now
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
<div className='flex flex-row flex-wrap px-16'>
    {ProductsCategories.map((items)=>(
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={items.image} alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{items.title}</h1>
            <p className="leading-relaxed mb-3">{items.description}.</p>
            <div className="flex items-center flex-wrap">
              <Link href='/products' className="text-indigo-500 capitalize inline-flex items-center md:mb-2 lg:mb-0" onClick={()=>setProductCat(items.title)}>Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
    </div>
    </>
  );
};

export default HeroSection;
