import React from 'react'
import coverImage from '../assets/images/dogo.jpg'
import { Link } from 'react-router-dom'

const Home2sec = () => {
  return (
    <div>
        <div className='flex justify-around items-center md:items-start w-[100%] flex-col-reverse md:flex-row mt-24'>
            <div className='flex flex-col justify-center items-start gap-4 w-[80%] md:w-[40%] text-gray-600 text-base md:text-xl text-justify font-[auto]
            '>
            <h1 className='text-[2rem] md:text-[2rem] text-center m-auto w-full md:w-[80%] font-semibold'>Introducing BrakingTales: Expert Care for Your Pets at Home</h1>
                <li className=''>BrakingTales is your trusted partner for at-home pet care, offering high-quality services that bring the best care right to your doorstep.</li>
                <li>We specialize in providing personalized care for your pets, ensuring they stay happy, healthy, and comfortable in their own space.</li>
                <li>Whether you need reliable dog care at home or professional attention from experienced pet caretakers, BrakingTales is committed to delivering compassionate and expert care tailored to your pet's unique needs.</li>

                <Link to={"/about"}>
                <button className='md:w-[11rem] md:h-[4rem] w-[9rem] h-[3rem] text-[1.2rem] bg-green-600 text-amber-100 mt-8 rounded-lg'>Learn More</button>
                </Link>
            </div>
            <div className='w-[80%] mt-[-1rem] mb-8 md:w-[40%] md:mt-8 lg:w-[30rem] lg:mt-0'>
                <img src={coverImage} alt="real image" className='rounded-[40px] w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home2sec