import React from 'react'
import HeroSection from '@/components/HeroSection'
import ProductList from '@/components/ProductList'
const Home = () => {
  return (
   <>
   <div className='min-h-screen'>

    <HeroSection />
    {/* <ProductList productsCategory={`men's clothing`} HeadLine={'Fetured Products'} /> */}
   </div>
   </>
  )
}

export default Home