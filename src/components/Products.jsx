import { useEffect, useState } from "react"
import {myProducts} from "../data"
import { Link } from "react-router-dom"

const Products = () => {
  const [allProducts,SetallProducts]=useState(myProducts)
  
 useEffect(()=>{
   SetallProducts(myProducts)
 },[])
  return (
    <div className="products">
      <h1>PRODUCTS</h1>
      {
        allProducts.map((product)=>
        <Link className="link" key={product.id} to={`/products/${product.id}`}>
        {product.title}
      
        </Link>
      
      )
      }
      {console.log(myProducts)}
    </div>
  )
}

export default Products
