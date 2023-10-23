'use client'
import React , {useState ,useEffect } from 'react'
import { useMyContext } from '@/app/context'
import useProducts from '@/app/hooks/useProducts'
import Link from 'next/link'
import Loading from './Loading.js'
const ProductList = ({productsCategory ,HeadLine}) => {
    let products = useProducts(productsCategory)
    let {addToCart , ShowProductDetails} = useMyContext()
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    <h1 className='w-full px-14 font-medium text-[24px] mt-5'>{HeadLine}</h1>

    <div className='w-full gap-3 flex justify-center flex-wrap items-center py-4 mt-5 sm:px-2  lg:px-10 '>
       
      {loading ? (<Loading/>): (
         products.map((product)=>(
          <div key={product?.id} className='w-[300px] rounded-xl shadow-md p-3 mx-5 h-auto bg-[#f3f0f0]'>
               <img className='w-[100%] h-[260px]  object-fill' src={product?.image} alt="" />
              <h1 className='text-[18px] mt-5 font-semibold'>{product?.title.slice(0,50)}...</h1>
              <p>{product?.description.slice(0,100)}...</p>
              <div className='flex gap-2 mt-3'>
              <p>Price ${Math.floor(product?.price)}</p>
              <p>Ratig {product?.rating.rate}</p>
              <Link href={`/productsDetail/${product.id}`} className='bg-[#dfcccc] rounded-xl px-2 py-2 ' onClick={()=>{ShowProductDetails(product?.id,product?.title,product?.description, product?.price,  product?.image,product?.rating.rate )}}>show Details</Link>
              </div>
          </div>
             ))
      )}
   
    </div>
    </>
  )
}

export default ProductList