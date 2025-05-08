import React from 'react'
import coverImage from '../assets/images/dogo1.png'
import { Link } from 'react-router-dom'

const Home2sec = () => {
  return (
    <div>
        <div className='flex justify-around items-center md:items-start w-[100%] flex-col-reverse md:flex-row mt-24'>
            <div className='flex flex-col justify-center items-start gap-4 w-[80%] md:w-[40%] text-gray-600 text-base md:text-xl text-justify font-[auto]
            '>
            <h1 className='text-[2rem] md:text-[2rem] text-center m-auto w-full md:w-[80%] font-semibold'>Introducing the Barking Tales Your Pet’s Friendly Walker </h1>
                <li className=''>Tired of leaving your furry friend behind? Let us pamper them where they’re happiest walking and playing.</li>
                <li>Tailored Love, Just for Them
                No two pets are alike, and neither is our care. We match your pet’s vibe with the perfect sitter. </li>
                <li>Stressfree walks Why stress with travel? Our pros come to you—feeding, cuddling, or even backyard or park fetch session.</li>
                <li>Trusted Like Best Friend Vetted, passionate, and background-checked—because your pet deserves nothing less than a caregiver.</li>

                <li>
                Because home isn’t just a place—it’s where their tail wags the hardest. 
                </li>
                <strong>Let’s keep the love local!</strong>

                <Link to={"/about"}>
                <button className='md:w-[11rem] md:h-[4rem] w-[9rem] h-[3rem] text-[1.2rem] bg-green-600 text-amber-100 mt-8 rounded-lg cursor-pointer'>Learn More</button>
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