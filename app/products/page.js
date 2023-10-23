'use client'
import ProductList from '@/components/ProductList'
import React ,{useState} from 'react'
let categorysOfFilter = [ "electronics","jewelery","men's clothing","women's clothing"]
import { useMyContext } from '../context'
const page = () => {
  let {productCat, setProductCat} = useMyContext()
  return (
    <>
 
<div className='min-h-screen '>
  <ul className='flex flex-wrap gap-3 px-2 lg:px-16 w-full '>
   {categorysOfFilter.map((cat)=>(
    <li onClick={()=>setProductCat(cat)} className={`${productCat === cat ? 'bg-[#b4d7ff]' : ''} cursor-pointer border-gray-500 border py-1 px-4 rounded-2xl capitalize`}  key={cat}>{cat}</li>
   ))}
  </ul>
  <ProductList productsCategory={productCat} HeadLine={''}/>
  </div>
    </>
  )
}

export default page