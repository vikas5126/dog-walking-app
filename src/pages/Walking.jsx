import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Review from '../components/Review'
import Stepper from '../components/Stepper'

const Walking = () => {
  return (
    <> 
    <Navbar/>
    
    <Form/>

    <Stepper/>

    <h1 className='font-bold text-[2rem] text-center mt-15'>Our Happy customer</h1>
    <div className='flex justify-start items-center overflow-x-scroll gap-14 w-[100%] pl-[3rem] m-auto'>
        <Review/>
    </div>
    <Footer/> 
    </>
  )
}

export default Walking