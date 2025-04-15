import React from 'react'
import '../assets/styles/nav.css'
import { SiDatadog } from "react-icons/si";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='navbar flex w-[100%] p-2 pt-2 pb-2 bg-[#f0f0f0] justify-between items-center sticky top-0 z-10'>
        <div className='flex items-center'>
            <SiDatadog className='w-[6rem] h-[5rem]'/>
            <p className='text-xl font-semibold'>Bark & Beyond</p>
        </div>
        <div className='lg:flex w-[50%] justify-around items-center text-lg navItems hidden'>
            <li className='list-none'><a href="/">Home</a></li>
            {/* <li className='list-none'><a href="/training">Dog Training</a></li> */}
            <li className='list-none'><a href="/grooming" id='grooming'>Grooming</a></li>
            <li className='list-none'><a href="/walking">Walking</a></li>
            <li className='list-none'><a href="/contact">Contact Us</a></li>
            <li className='list-none'><a href="/about">About Us</a></li>
        </div> 
        <div className='flex lg:hidden justify-center items-center mt-2 mr-2'>
            <FiMenu className='w-[2rem] h-[2rem]' />
        </div>
        <div className='hidden'>
            <li className='list-none'><a href="">Dog Training</a></li>
            <li className='list-none'><a href="">Grooming</a></li>
            <li className='list-none'><a href="">Walking</a></li>
            <li className='list-none'><a href="">Contact Us</a></li>
            <li className='list-none'><a href="">About Us</a></li>
        </div>
    </div>
  )
}

export default Navbar