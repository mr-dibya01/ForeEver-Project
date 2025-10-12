import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='flex flex-col gap-y-8 sm:flex-row justify-between py-20 gap-x-6'>
      <div className='w-full sm:w-[65%]'>
        <img src={assets.logo} alt="" className='w-32 mb-5'/>
        <p className='w-full sm:w-[70%] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid minus impedit unde. Voluptate minima amet excepturi, ratione est ex consectetur maiores, quaerat, libero voluptates ipsum tenetur quibusdam laboriosam porro?</p>
      </div>
      <div className=''>
            <h1 className='text-xl font-semibold mb-3'>COMPANY</h1>
            <p className='text-sm text-gray-500'>Home</p>
            <p className='text-sm text-gray-500'>About us</p>
            <p className='text-sm text-gray-500'>Delivery</p>
            <p className='text-sm text-gray-500'>Privacy policy</p>
      </div>
      <div className=''>
            <h1 className='text-xl font-semibold mb-3'>GET IN TOUCH</h1>
            <p className='text-sm text-gray-500'>+91-000-000-0000</p>
            <p className='text-sm text-gray-500'>dibyaranjan.webdev@gmail.com</p>
            <Link className='text-sm text-gray-500' to={'https://www.instagram.com/build_yourownwebsite/'}>Instagram</Link>
      </div>
    </div>
  )
}

export default Footer
