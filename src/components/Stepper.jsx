import React from 'react'
import { FcViewDetails } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";

const Stepper = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-24 mb-32'>
        <h1 className='text-[2rem] font-bold mb-12 text-center'>
            How to Get Dog Training Demo
        </h1>
        <div className='flex flex-col md:flex-row md:w-[70%] justify-around items-center w-[100%] gap-8'>
            <div className='flex flex-col justify-center items-center border-1 border-gray-300 p-4 w-60 rounded-lg'>
                <p className='font-semibold'>Step 1</p>
                <FcViewDetails className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Submit The Details</p>
            </div>
            <div className='flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg p-4 w-60'>
                <p className='font-semibold'>Step 2</p>
                <FcCustomerSupport className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Pet Counsellor Connects</p>
            </div>
            <div className='flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg p-4 w-60 text-center'>
                <p className='font-semibold'>Step 3</p>
                <FcTodoList className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Trainer comes to your doorstep</p>
            </div>
        </div>
    </div>
  )
}

export default Stepper