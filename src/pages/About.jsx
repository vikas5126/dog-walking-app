import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const [review, setReview] = useState({
    name: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", review);
    setSubmitted(true);
    setReview({ name: "", message: "" });
  };

  return (
    <>
    <Navbar/>
    <div className="w-full px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

      <section className="mb-12">
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to <span className="font-semibold">Bark&Tails</span> – your trusted partner for professional dog walking and grooming services!
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
        <h2 className="text-2xl font-semibold mb-4">Leave a Review 🐾</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={review.message}
            onChange={(e) => setReview({ ...review, message: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
          {submitted && (
            <p className="text-green-600 text-sm">Thank you for your feedback!</p>
          )}
        </form>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default About;
