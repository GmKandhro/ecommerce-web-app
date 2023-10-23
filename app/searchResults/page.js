'use client'
import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import { useMyContext } from '../context'
import Loading from '@/components/Loading'
const page = () => {
    const [allProducts , setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
      .then(res=>res.json())
      .then(json=> setAllProducts(json))
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }, [])


let {search , setSearch , ShowProductDetails} = useMyContext()
const filteredData = allProducts.filter((item)=>(
    item.title.toLowerCase().includes(search.toLowerCase())
  ))

  return (
   <>
   <section className='min-h-screen w-full py-[10px] px-[20px] md:px-[40] lg:px-[84px]'>
   <input placeholder='Search here..' onChange={(e)=>setSearch(e.target.value)} value={search} className='border-x-2 border-y-2  w-[100%] px-2 py-1 outline-none border-1 rounded-lg' type="text" />

    <p className='my-4'>Search for '{search}'</p>
  <div className='flex flex-wrap justify-center items-center'>
  {loading ? (<Loading />) : (
    filteredData.map((product)=>(
      <div key={product.id} className='w-[300px] rounded-xl shadow-md p-3 mx-5 h-auto bg-[#f3f0f0]'>
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

  

   </section>
   </>
  )
}

export default page
