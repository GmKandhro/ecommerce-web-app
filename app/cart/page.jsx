'use client'
import { useMyContext } from '@/app/context'

const ProductList = () => {
  let {removeFromCart ,cartProducts} = useMyContext()  
  return (
    <>
    <h1 className='w-full px-14 font-medium text-[24px] mt-5'></h1>
    <div className='w-full min-h-screen gap-3 flex justify-center flex-wrap items-center py-4 mt-5 px-10 '>
     {cartProducts.length === 0 ? <div>No carts</div> : cartProducts?.map((product)=>(
    <div key={product?.id} className='w-[300px] rounded-xl shadow-md p-3 mx-5 h-auto bg-[#f3f0f0]'>
         <img className='w-[100%] h-[260px]  object-fill' src={product?.image} alt="" />
        <h1 className='text-[18px] mt-5 font-semibold'>{product?.title}...</h1>
        <p>{product?.description}...</p>
        <div className='flex gap-2 mt-3'>
        <p>Price ${Math.floor(product?.price)}</p>
        <p>Ratig {product?.rating}</p>
        <button className='bg-[#dfcccc] rounded-xl px-2 py-2 ' onClick={()=>{removeFromCart(product?.id )}}>Remove atem</button>
        </div>
    </div>
       ))}
    </div>
    </>
  )
}

export default ProductList