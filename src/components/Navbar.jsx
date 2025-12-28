import React, { useState } from 'react';
import { SiDatadog } from "react-icons/si";
import { GiCrossedBones } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex w-full p-4 bg-[#f0f0f0] justify-between items-center sticky top-0 z-10">
      <Link to={"/"} >
      <div className="flex items-center gap-2">
        <SiDatadog className="w-16 h-16" />
        <p className="text-[1.5rem] md:text-[2rem] font-semibold font-[cursive]">BarkingTales🐾</p>
      </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden lg:flex w-1/3 justify-around items-center text-lg">
        <li className="list-none"><a href="/">Home</a></li>
        <li className="list-none relative group">
          <Link to={"/grooming"} id='grooming'>
            Grooming
          </Link>
          <span className="absolute top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex bg-white text-black p-2 rounded shadow-lg text-sm w-[8rem] justify-center">
            coming soon
          </span>
        </li>
        <li className="list-none relative group">
          <Link to={"/"} id='grooming'>
            Day Boarding
          </Link>
          <span className="absolute top-8 left-1/2 -translate-x-1/2 hidden group-hover:flex bg-white text-black p-2 rounded shadow-lg text-sm w-[8rem] justify-center">
            coming soon
          </span>
        </li>
        <li className="list-none"><Link to={"/walking"}>Walking</Link></li>
        {/* <li className="list-none"><Link to={"/contact"}>Contact Us</Link></li> */}
        <li className="list-none"><Link to={"/about"}>About Us</Link></li>
      </ul>

      {/* Hamburger toggle */}
      <div className="lg:hidden flex items-center" onClick={toggleMenu}>
        {isOpen ? <GiCrossedBones className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
      </div>

      {/* Slide-in Mobile menu */}
      <div className={`fixed top-0 right-0 h-full w-[70%] bg-[#f0f0f0] shadow-lg z-20 p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <GiCrossedBones className="w-8 h-8" onClick={toggleMenu}/>
        <ul className="flex flex-col gap-4 text-lg mt-16">
            <li className="list-none"><Link to={"/"}>Home</Link></li>
            <hr />
          <li className="flex justify-start gap-8 items-center">
            <Link to={"/grooming"}>Grooming</Link>
            <span className="bg-red-600 text-amber-100 text-xs px-3 py-1 rounded-lg">coming soon</span>
          </li>
          <hr />
           <li className="flex justify-start gap-8 items-center">
            <Link to={"/"}>Day Boarding</Link>
            <span className="bg-red-600 text-amber-100 text-xs px-3 py-1 rounded-lg">coming soon</span>
          </li>
          <hr />
          <li><Link to={"/walking"}>Walking</Link></li>
          <hr />
          {/* <li><Link to={"/contact"}>Contact Us</Link></li> */}
          {/* <hr /> */}
          <li><Link to={"/about"}>About Us</Link></li>
        </ul>
      </div>

      {/* Background dim */}
      {isOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-50 z-10"></div>}
    </div>
  );
};

export default Navbar;
