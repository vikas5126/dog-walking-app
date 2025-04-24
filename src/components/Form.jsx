import React, { useState } from "react";
import coverImage from "../assets/images/dogo.jpg";
import DogWalkingSubscription from "./DogWalkingSubscription ";
// className='w-[100%] flex flex-col-reverse md:flex-row  gap-6 mt-4'
const Form = () => {
  const [selectedOption, setSelectedOption] = useState("One Walk"); // Default option

  const toggleOption = () => {
    setSelectedOption((prevOption) =>
      prevOption === "One Walk" ? "Subscription" : "One Walk"
    );
  };
  return (
    <div>
      {/* <div className='w-[95%] md:w-[45%] m-auto flex flex-col justify-center items-start gap-8'>
            <div className='w-[100%] flex flex-col p-4 justify-center items-center'>
                <h1 className='text-[2rem] font-bold text-center'>Dog Training at Home <br />
                “Find the Best Trainer Near You”</h1>
                <p className='text-gray-400 text-center'>Advanced, Research-Backed Curriculum with
                Purposeful Sessions! <br /> Lorem ipsum dolor sit.</p>
            </div>
            <div className='border-2 border-gray-300 w-[100%] p-4 flex flex-col justify-center text-md items-start gap-4 rounded-lg'>
                <form className='w-[100%]' action="#">
                    <h2 className='text-[2rem] font-semibold text-center mb-6'>Book Dog Training Demo <span className='text-blue-700'>at &#8377;99 only</span></h2>
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

        <div className='w-[90%] md:w-[45%] m-auto '>
            <img src={coverImage} alt="real Image" className='rounded-[20px]' />
        </div> */}

      {/* className='w-[95%] md:w-[45%] m-auto flex flex-col justify-center items-start gap-8' */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="order-1 w-[100%] md:col-span-2 flex flex-col p-4 justify-center items-center mt-8 mb-8">
          <h1 className="text-[2rem] lg:text-[2.5rem]  font-bold text-center">
            Dog Training at Home <br />
            “Find the Best Trainer Near You”
          </h1>
          <p className="text-gray-400 text-center">
            Advanced, Research-Backed Curriculum with Purposeful Sessions!{" "}
            <br /> Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="order-3 md:order-2 md:col-span-1  w-[90%] m-auto flex flex-col justify-center text-md ">
          <div className="flex justify-center items-center mt-8 mb-4">
            <div
              className="relative w-[20rem] h-[3.5rem] p-1 bg-gray-300 rounded-full flex items-center cursor-pointer"
              onClick={toggleOption}
            >
              {/* Slider */}
              <div
                className={`absolute p-1 w-[8.5rem] h-[2.5rem] bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                  selectedOption === "One Walk"
                    ? "translate-x-0"
                    : "translate-x-[11rem]"
                }`}
              ></div>

              {/* Options */}
              <div className="absolute w-full flex justify-between px-4 text-base font-semibold text-gray-700">
                <span
                  className={selectedOption === "One Walk" ? "text-blue-600" : ""}
                >
                 One Walk
                </span>
                <span
                  className={
                    selectedOption === "Subscription" ? "text-green-600" : ""
                  }
                >
                  Subscription
                </span>
              </div>
            </div>
          </div>
          {selectedOption === "One Walk" ? (<form className="w-[100%] border-2 border-gray-300 rounded-lg  p-4 gap-4 items-start" action="#">
            <h2 className="text-[2rem] font-semibold text-center mb-6">
              Book Dog Training Demo{" "}
              <span className="text-blue-700">at &#8377;99 only</span>
            </h2>
            <div className="w-[100%] flex flex-col gap-2">
              <label className="font-semibold" htmlFor="name">
                Your Name
              </label>
              <input
                className="border-2 border-gray-400 h-14 text-base rounded-md pl-4"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-[100%] flex flex-col gap-2 mt-4">
              <label className="font-semibold" htmlFor="name">
                Your Pet Name
              </label>
              <input
                className="border-2 border-gray-400 h-14 text-base rounded-md pl-4"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-[100%] flex flex-col gap-2 mt-4">
              <label className="font-semibold" htmlFor="name">
                Your Pet Breed
              </label>
              <input
                className="border-2 border-gray-400 h-14 text-base rounded-md pl-4"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-[100%] flex flex-col gap-2 mt-4">
              <label className="font-semibold" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="border-2 border-gray-400 h-14 text-base rounded-md pl-4"
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="w-[100%] flex gap-2 mt-8 mr-8 mb-4">
              <label htmlFor="location" className="font-semibold">
                Location :{" "}
              </label>
              <select name="location" id="location">
                <option value="select">Select</option>
                <option value="pitampura">Pitampura</option>
                <option value="rohini">Rohini</option>
                <option value="Punjabi Bagh">Punjabi Bagh</option>
                <option value="Ashok Vihar">Ashok Vihar</option>
              </select>
            </div>
            <button className="w-[100%] m-auto h-14 bg-red-700 text-white rounded-md text-xl mt-4 hover:bg-red-800 hover:text-white transition duration-300 ease-in-out">
              Book FREE Demo Now
            </button>
          </form>): <DogWalkingSubscription/>}
        </div>

        <div className="order-2 md:order-3 md:col-span-1 w-[90%] m-auto ">
          <img src={coverImage} alt="real Image" className="rounded-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default Form;
