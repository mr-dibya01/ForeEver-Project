import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import { Link } from 'react-router-dom'
import Product from './Product.jsx';



function LatestCollections() {
  const [latestProducts,setLatestProducts] = useState([]);
  const { products }=useContext(ShopContext);

  useEffect(() => {
    setLatestProducts(products.slice(0,10))
  },[])
  console.log(latestProducts);
  return (
    <div className='my-4'>
      <div className='py-10 text-xl sm:text-3xl text-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        { latestProducts.map((item,idx) => (
          <Product key={idx} image={item.image} name={item.name} price={item.price} id={item._id}/>
        ))}
      </div>
    </div>
  )
}

export default LatestCollections
