import React from 'react'
import coverImage from '../assets/images/dogo.jpg'

const Home2sec = () => {
  return (
    <div>
        <h1 className='text-[2rem] md:text-[2.5rem] text-center m-auto mt-16 mb-12 md:w-[50%] w-[90%] font-semibold'>Introducing Brak & Beyond: Expert Care for Your Pets at Home</h1>
        <div className='flex justify-around items-center md:items-start w-[100%] flex-col-reverse md:flex-row'>
            <div className='flex flex-col justify-center items-start gap-4 w-[80%] md:w-[40%] text-gray-600 text-base md:text-xl text-justify'>
                <li>IncrediPets is your trusted partner for at-home pet care, offering high-quality services that bring the best care right to your doorstep.</li>
                <li>We specialize in providing personalized care for your pets, ensuring they stay happy, healthy, and comfortable in their own space.</li>
                <li>Whether you need reliable dog care at home or professional attention from experienced pet caretakers, IncrediPets is committed to delivering compassionate and expert care tailored to your pet's unique needs.</li>

                <button className='md:w-[11rem] md:h-[4rem] w-[9rem] h-[3rem] text-[1rem] bg-red-600 text-amber-100 mt-8 rounded-lg'>Learn More</button>
            </div>
            <div className='w-[80%] mt-[-1rem] mb-8 md:w-[40%] md:mt-8 lg:w-[30rem] lg:mt-0'>
                <img src={coverImage} alt="real image" className='rounded-[40px] w-full ' />
            </div>
        </div>
    </div>
  )
}

export default Home2sec