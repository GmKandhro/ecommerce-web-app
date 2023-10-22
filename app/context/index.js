"use client"
import { createContext, useState, useContext  } from 'react';
const MyContext = createContext();


export function MyContextProvider({ children }) {

  let productsDataFromLocal = JSON.parse(localStorage.getItem('cart')) || []
  let productDetails = JSON.parse(localStorage.getItem('cartDetails'))
    const [subTotal, setSubTotal] = useState(productsDataFromLocal.length)
    const [cartProducts, setCartProducts] = useState(productsDataFromLocal)
    const [showDetails, setShowDetails] = useState(productDetails)
  const [search, setSearch] = useState('')
  const [productCat, setProductCat] = useState('electronics')
  


  const addToCart =  (id,title,desc , price,  image,rating)=>{
   let  lCart =   JSON.parse(localStorage.getItem('cart')) || []
 
  lCart.push({ id,title,desc, price,  image,rating})
  setCartProducts(lCart)
  setSubTotal(lCart.length)
  
  localStorage.setItem('cart', JSON.stringify(lCart))
}
 
  
  
  const removeFromCart = (id) => {
    const indexToDelete = productsDataFromLocal.findIndex(item => item.id === id);
  console.log(indexToDelete)
    if (indexToDelete !== -1) {
      productsDataFromLocal.splice(indexToDelete, 1);
      setCartProducts(productsDataFromLocal)
    }
    localStorage.setItem('cart', JSON.stringify(productsDataFromLocal));
    setSubTotal(productsDataFromLocal.length)
  }


  const ShowProductDetails  = (id,title,desc , price,  image,rating)=>{ 
  localStorage.setItem('cartDetails', JSON.stringify({
    id,title,desc , price,  image,rating
  }))
  setShowDetails({id,title,desc , price,  image,rating})
  }

      
     
  return (
    <MyContext.Provider value={{addToCart,subTotal,removeFromCart,setSubTotal , productsDataFromLocal , cartProducts , showDetails,ShowProductDetails,search, setSearch,productCat, setProductCat}}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
