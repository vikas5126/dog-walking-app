import React from 'react'

const Form = () => {
  return (
    <div className='w-[100%] pl-[6rem] pr-[6rem] flex gap-6 mt-4'>
        <div className='w-[60%] flex flex-col justify-center items-start gap-8'>
            <div className='w-[100%] flex flex-col p-4 justify-center items-start'>
                <h1 className='text-[2rem] font-semibold'>Dog Training at Home <br />
                “Find the Best Trainer Near You”</h1>
                <p className='text-gray-400'>Advanced, Research-Backed Curriculum with
                Purposeful Sessions! <br /> Lorem ipsum dolor sit.</p>
            </div>
            <div className='border-2 border-gray-300 w-[100%] p-4 flex flex-col justify-center items-start gap-4 rounded-lg'>
                <form className='w-[100%]' action="#">
                    <h2 className='text-[2rem] font-semibold text-center'>Book Dog Training Demo <span className='text-blue-700'>at &#8377;99 only</span></h2>
                    <div className='w-[100%] flex flex-col gap-2'>
                        <label className='font-semibold' htmlFor="name">Your Name</label>
                        <input className='border-2 border-gray-400 h-14 text-base rounded-md pl-4' type="text" id="name" placeholder="Your Name" required/>
                    </div>
                    <div className='w-[100%] flex flex-col gap-2 mt-4'>
                        <label className='font-semibold' htmlFor="name">Your Pet Name</label>
                        <input className='border-2 border-gray-400 h-14 text-base rounded-md pl-4' type="text" id="name" placeholder="Your Name" required/>
                    </div>
                    <div className='w-[100%] flex flex-col gap-2 mt-4'>
                        <label className='font-semibold' htmlFor="name">Your Pet Breed</label>
                        <input className='border-2 border-gray-400 h-14 text-base rounded-md pl-4' type="text" id="name" placeholder="Your Name" required/>
                    </div>
                    <div className='w-[100%] flex flex-col gap-2 mt-4'>
                        <label className='font-semibold' htmlFor="phone">Phone Number</label>
                        <input className='border-2 border-gray-400 h-14 text-base rounded-md pl-4' type="tel" id="phone" placeholder="Your Phone Number" required/>
                    </div>
                    <div className='w-[100%] flex gap-2 mt-8 mr-8 mb-4'>
                        <label htmlFor="location" className='font-semibold'>Location : </label>
                        <select name="location" id="location">
                            <option value="select">Select</option>
                            <option value="pitampura">Pitampura</option>
                            <option value="rohini">Rohini</option>
                            <option value="Punjabi Bagh">Punjabi Bagh</option>
                            <option value="Ashok Vihar">Ashok Vihar</option>
                        </select>
                    </div>
                    <button className='w-[100%] m-auto h-14 bg-red-700 text-white rounded-md text-xl mt-4 hover:bg-red-800 hover:text-white transition duration-300 ease-in-out'>
                        Book FREE Demo Now
                    </button>
                </form>
            </div>
        </div>

        <div className='w-[40%]'>
            <img src="" alt="real Image" />
        </div>
    </div>
  )
}

export default Form