import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiDatadog } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="relative w-[100%] bg-gray-200 mt-12 p-6 box-border">
        <div className="flex w-full box-border gap-8 flex-wrap justify-around">
          <div className="w-[10rem] sm:w-[25%] flex flex-col gap-4">
            <SiDatadog className='w-[6rem] h-[5rem]'/>
            <span className='text-xl font-semibold'>Bark & Beyond</span>
            <p>
              Lorem ipsum dolor sit amet consectetur recusandae asperiores
              corporis. A accusantium delectus provident{" "}
              <a href="/about">Explore More</a>
            </p>
            <div className="flex gap-4 text-3xl mt-2">
              <i className="ri-twitter-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </div>
          <div className="w-[10rem] sm:w-[25%] flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold">Quick Links</p>
            <p>Training</p>
            <p>Grooming</p>
            <p>Walking</p>
            <p>About Us</p>
            <p>Contact Us</p>
          </div>
          <div className="w-[10rem] sm:w-[25%] flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold"> Account Info</p>
            <p>My Account</p>
            <p>Privacy Policy</p>
            <p>Return Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="w-[11rem] sm:w-[25%] flex flex-col gap-4 mt-4">
            <p className="text-2xl font-semibold">Contact Details</p>
            <p>
              <i className="ri-home-9-fill"></i> Trinagar, delhi-110034
            </p>
            <p>
              <i className="ri-mail-fill"></i> rahul123@gmail.com
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91-999999999
            </p>
          </div>
        </div>
        <hr className="mt-8" />
        <div className="flex justify-between items-center mt-4 w-[100%]">
          <div>
            <p>© 2023 Brak & Beyond. All rights reserved.</p>
          </div>
          <div>
            <p>Designed by Brak & Beyond</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
