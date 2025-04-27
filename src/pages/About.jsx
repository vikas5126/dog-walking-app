import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (
    <>
    <Navbar/>
    <div className="w-full px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <section className="mb-12">
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to <span className="font-semibold">BarkingTales</span> – your trusted partner for professional dog walking and grooming services!
          We believe your furry friend deserves the best care, and our trained team ensures safe walks, stress-free grooming, and a tail-wagging experience every time.
        </p>

        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>🐶 Personalized dog walking sessions tailored to your pet’s energy.</li>
          <li>✂️ Gentle grooming with love and professional-grade tools.</li>
          <li>🏡 At-home convenience and flexible scheduling.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          We’re on a mission to make every pet feel loved, clean, and cared for. Whether it's a playful walk in the park or a refreshing bath at home, your pet's wellbeing is our priority.
        </p>
      </section>

      <section>
        
        
        <div>
        <h1 className='text-[1.5rem] text-gray-700'>We Provide You With</h1>
        <div className='w-[100%] p-4'>
        <li>Professionals</li>
        <li>Medium to Talk and Connect with Service Providers</li>
        <li>Easy Payment Options</li>
        <li>Affordable Packages</li>
        <li>24/7 Customer Care Service</li>
        <li>Easy Access to Service Providers</li>
      </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
