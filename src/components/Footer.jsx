import React from "react";
import { useState } from "react";     
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiDatadog } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {

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
      <div className="relative w-[100%] bg-gray-200 mt-12 p-6 box-border">
        <div className="flex w-full box-border gap-8 flex-wrap justify-around">
          <div className="w-[16rem] sm:w-[25%] flex flex-col gap-4 justify-start sm:justify-center">
            <SiDatadog className='w-[6rem] h-[5rem]'/>
            <span className='text-2xl font-semibold font-[cursive]'>BarkingTales</span>
            <p>
            Reliable dog walking and care packages tailored to your pup.
              {/* <a href="/about">Explore More</a> */}
            </p>
            <div className="flex gap-4 text-3xl mt-2">
              <i className="ri-twitter-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </div>
          <div className="w-[16rem] sm:w-[25%] flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold">Quick Links</p>
            <p>Training</p>
            {/* <p>Grooming</p> */}
          <Link to={"/walking"}><p>Walking</p></Link>
            <p>Connect With Us </p>
            <p>Term & Conditions</p>
            <Link to={"/about"}><p>About Us</p></Link>
            {/* <p>Contact Us</p> */}
          </div>
          {/* <div className="w-[10rem] sm:w-[25%] flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold"> Account Info</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Return Policy</p>
            <p>Terms & Conditions</p>
          </div> */}
          <div className="w-[17rem] sm:w-[25%] flex flex-col gap-4 mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl sm:ml-[-3rem]">
          <h2 className="text-2xl font-semibold mb-4">Leave a Review 🐾</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={review.name}
            onChange={(e) => setReview({ ...review, name: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white"
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={review.message}
            onChange={(e) => setReview({ ...review, message: e.target.value })}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white"
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
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex justify-between items-center mt-4 w-[100%]">
          <div>
            <p>© 2025 BrakingTales. All rights reserved.</p>
          </div>
          <div>
            <p>Designed by BrakingTales</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
