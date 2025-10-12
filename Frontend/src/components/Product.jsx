import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

export default function Product({ name, id, image, price }) {
    let { currency } = useContext(ShopContext);
    console.log(currency);

  return (
    <Link to={`/product/${id}`}>
        <div className='cursor-pointer text-gray-700'>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            </div>
            <p className='text-sm mt-3 mb-1'>{name}</p>
            <p className='font-medium'>{currency}{price}</p>
        </div>
    </Link>
  )
}
