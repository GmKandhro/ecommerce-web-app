"use client"
import { createContext, useState, useContext  } from 'react';
const MyContext = createContext();


export function MyContextProvider({ children }) {

  const [cartProducts, setCartProducts] = useState([])
  const [subTotal, setSubTotal] = useState(cartProducts.length)
    const [showDetails, setShowDetails] = useState({})
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
    const indexToDelete = cartProducts.findIndex(item => item.id === id);
  console.log(indexToDelete)
    if (indexToDelete !== -1) {
      cartProducts.splice(indexToDelete, 1);
      setCartProducts(cartProducts)
    }
    localStorage.setItem('cart', JSON.stringify(cartProducts));
    setSubTotal(cartProducts.length)
  }


  const ShowProductDetails  = (id,title,desc , price,  image,rating)=>{ 
  localStorage.setItem('cartDetails', JSON.stringify({
    id,title,desc , price,  image,rating
  }))
  setShowDetails({id,title,desc , price,  image,rating})
  }

      
     
  return (
    <MyContext.Provider value={{addToCart,subTotal,removeFromCart,setSubTotal ,  cartProducts , showDetails,ShowProductDetails,search, setSearch,productCat, setProductCat}}>
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  return useContext(MyContext);
}
