import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Grooming = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[100%] p-8 md:pr-48 md:pl-48 pr-4 pl-4 bg-gray-200 flex flex-col justify-center items-start gap-4 text-base text-gray-500'>
      <h1 className='text-[2rem] text-blue-500'> <p className='text-red-600'>Services Coming Soon</p> Dog Grooming</h1>
      <p>Dog grooming is an essential part of pet care that involves cleaning, brushing, and maintaining the coat and skin of dogs. It helps to keep your dog looking and feeling their best while also promoting good health. Regular grooming can help prevent matting, reduce shedding, and keep your dog's skin healthy.</p>
      <p>In addition to coat care, dog grooming also includes nail trimming, ear cleaning, and dental care. These tasks are important for your dog's overall health and well-being. Grooming can also help to identify any potential health issues, such as skin infections or parasites, early on.</p>
      <p>At Bark & Beyond, we offer professional dog grooming services that are tailored to meet the needs of your pet. Our experienced groomers use high-quality products and techniques to ensure that your dog receives the best care possible. We also provide a comfortable and stress-free environment for your pet during their grooming session.</p>
    </div>
    <Footer/>
    </>
  )
}

export default Grooming