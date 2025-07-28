import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { LuContact } from "react-icons/lu";
import { BsInfoSquare } from "react-icons/bs";
<BsInfoSquare />


function Navbar() {
    let [sidebar,setSidebar]=useState(false);
    console.log(sidebar);
  return (
    <div className='flex justify-between items-center py-4 text-sm'> 
        <img src={assets.logo} alt="" className='w-32'/>
        <div className='hidden sm:flex gap-6 items-center text-gray-700'>
            <NavLink to={"/"}  className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='w-2/4 bg-gray-600 h-[1.5px] border-none hidden'/>
            </NavLink>
            <NavLink to={"/collection"}  className="flex flex-col items-center gap-1">
                <p>COLLECCTION</p>
                <hr className='w-2/4 bg-gray-600 h-[1.5px] border-none hidden'/>
            </NavLink>
            <NavLink to={"/about"}  className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='w-2/4 bg-gray-600 h-[1.5px] border-none hidden'/>
            </NavLink>
            <NavLink to={"/contact"}  className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='w-2/4 bg-gray-600 h-[1.5px] border-none hidden'/>
            </NavLink>
        </div>
        <div className='flex items-center gap-5'>
            <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' />
            <div className='group relative py-1'>
                <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/>
                <div className='group-hover:block dropdown-menu hidden absolute top-8 right-0 rounded'>
                    <div className='flex flex-col gap-2 w-36 px-3 py-3 bg-slate-100 text-gray-500 text-lg'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Account</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to={"/cart"} className='relative'>
                <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
                <p className='absolute right-[-5px] bottom-[-5px] bg-black text-white w-4 text-center leading-4 aspect-square rounded-full text-[10px]'>10</p>
            </Link>
            {/* Sidebar menu for small size*/}
            <img src={assets.menu_icon} alt="" onClick={()=>setSidebar(true)} className='w-5 cursor-pointer sm:hidden'/>
        </div>
        <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${sidebar ? "w-full" : "w-0"}`}>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2 p-3 text-gray-600' onClick={() => setSidebar(false)}>
                    <img src={assets.dropdown_icon} alt="" className='w-3 rotate-180 cursor-pointer '/>
                    <p className='cursor-pointer ho'>Back</p>
                </div>
                <div className='flex items-center gap-2 border py-3 pl-8'>
                    <IoHomeOutline  className='size-4 '/>
                    <NavLink className={"  font-medium "} to={"/"}>HOME</NavLink>
                </div>
                <div className='flex items-center gap-2 border py-3 pl-8'>
                    <BsCollection className='size-4'/>
                    <NavLink className={"  font-medium "} to={"/collection"}>COLLECTIONS</NavLink>
                </div>
                <div className='flex items-center gap-2 border py-3 pl-8'>
                    <BsInfoSquare className='size-4 text-black'/>
                    <NavLink className={"  font-medium "} to={"/about"}>ABOUT</NavLink>
                </div>
                <div className='flex items-center gap-2 border py-3 pl-8'>
                    <LuContact className='size-4'/>
                    <NavLink className={"  font-medium "} to={"/contact"}>CONTACT</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
