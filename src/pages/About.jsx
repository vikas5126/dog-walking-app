import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (
    <>
    <Navbar/>
    <div className="w-full px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-12 flex flex-col text-lg gap-6">
<h1 className="text-2xl">Why should you hire Barkingtales dog walker professional.</h1>


<p className="text-lg">Hiring a professional *Barkingtales Dog Walker* can greatly benefit both you and your pet. Here’s why it’s a smart choice:</p>  

<li>We Ensures Regular Exercise: Busy schedules can make it hard to walk your dog consistently. We ensures your pet gets daily exercise, preventing obesity and related health issues.</li>  

<li>Reduces Anxiety & Boredom: Dogs left alone for long hours may develop *separation anxiety* or destructive behaviors (chewing, barking). We provide stimulation and breaks up their day.</li>  

<li>Maintains Potty Routine: Puppies and senior dogs need frequent bathroom breaks. Where we can help them stay healthy with their routine.</li>  

<li>Socialization Opportunities: We expose your dog to new environments, people, and other pets, improving their *social skills* and reducing aggression/fear.</li>

<li>Peace of Mind for Owners: Instead of rushing home, you can focus on work or errands, knowing your dog is cared for. You can stay connected with the walker.
</li>

<li>Helps with Training Reinforcement: Many walkers practice *basic commands* (sit, stay, heel) during walks, supporting your training efforts.</li>

<li>Ideal for High-Energy Breeds: Working dogs (Border Collies, Huskies) or young dogs need *extra activity*—a walker ensures they stay tired and well-behaved.  </li>
  

<b className="mt-4">A *reliable dog walker* ensures your pet stays *happy, healthy, and well-exercised*—worth every penny! 🐾💖</b>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
