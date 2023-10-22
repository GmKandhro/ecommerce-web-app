import { useEffect,useState } from "react"
// custom hook for geting data from api
const useProducts = (category) => {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res=>res.json())
      .then(json=> setData(json))
    }, [category])
    return  data
  }

  export default useProducts