import React from 'react'

export default function NewsLetter() {
  return (
    <div className='text-center flex flex-col gap-4 py-20'>
      <h1 className='font-semibold text-xl'>Subscribe now & get 20% off</h1>
      <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, totam.</p>
      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 my-6 border border-gray-300'>
        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs py-4 px-10'>SUBSCRIBE</button>
      </form>
    </div>
  )
}
