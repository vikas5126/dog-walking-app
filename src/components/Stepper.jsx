import React from 'react'
import { FcViewDetails } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcTodoList } from "react-icons/fc";

const Stepper = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-24 mb-32'>
        <h1 className='text-[2rem] font-bold mb-12 textd-center'>
            How to Get a Free Dog Training Demo
        </h1>
        <div className='flex justify-around items-center w-[70%] gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-semibold'>Step 1</p>
                <FcViewDetails className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Submit The Details</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-semibold'>Step 2</p>
                <FcCustomerSupport className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Pet Counsellor Connects</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-semibold'>Step 3</p>
                <FcTodoList className='w-[4rem] h-[4rem] m-6'/>
                <p className='font-bold text-base'>Trainer comes to your doorstep</p>
            </div>
        </div>
    </div>
  )
}

export default Stepper