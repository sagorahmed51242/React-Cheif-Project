import { useEffect, useState } from "react"
import Product from '../Product/Product'


const Products = ({handleAddWantToCook}) => {
  const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('data.json')
  .then(res => res.json())
  .then (data => setProducts(data))
},[])


  return (
    <div className="grid grid-cols-2 gap-5">
      {products.map(product => (<Product key={product.id} data={product} handleAddWantToCook={handleAddWantToCook} />))}
    </div>
  )
}

export default Products