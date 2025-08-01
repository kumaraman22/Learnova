import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className=" items-center flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        {/* Logo */}
        <div>
          <ScrollLink to="/" className="font-semibold text-2xl p-1 cursor-pointer text-brightGreen">
            Learnova
          </ScrollLink>
        </div>
        {/* Desktop Nav Links and Buttons */}
        <nav className="hidden md:flex items-center gap-5 font-medium p-1">
          <ScrollLink to="home" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">
            Home
          </ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink to="courses" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">
            Courses
          </ScrollLink>
          <ScrollLink to="reviews" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">
            Reviews
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer">
            Contact
          </ScrollLink>

          {/* Login & Signup Buttons - Desktop */}
          <a
            href="/login"
            className="ml-6 px-5 py-2 rounded-full text-brightGreen border border-brightGreen bg-white hover:bg-brightGreen hover:text-white transition-all font-semibold shadow-sm"
          >
            Login
          </a>
          <a
            href="signup"
            className="ml-2 px-5 py-2 rounded-full text-white bg-brightGreen hover:bg-green-600 transition-all font-semibold shadow-sm"
          >
            Sign Up
          </a>
        </nav>
        {/* Mobile Hamburger */}
        <div className="flex md:hidden" onClick={handleChange}>
          <div className="p-2">
            <HiOutlineMenu size={22} />
          </div>
        </div>
        {/* Mobile Slide Menu */}
        <div
          className={`
            ${menu ? "translate-x-0" : "-translate-x-full"}
            md:hidden flex flex-col absolute bg-white left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-10 w-full h-fit transition-transform duration-300 shadow-lg z-50
          `}
        >
          <ScrollLink to="home" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer" onClick={() => setMenu(false)}>
            Home
          </ScrollLink>
          <ScrollLink to="about" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer" onClick={() => setMenu(false)}>
            About
          </ScrollLink>
          <ScrollLink to="courses" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer" onClick={() => setMenu(false)}>
            Courses
          </ScrollLink>
          <ScrollLink to="reviews" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer" onClick={() => setMenu(false)}>
            Reviews
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} duration={500} className="hover:text-brightGreen transition-all cursor-pointer" onClick={() => setMenu(false)}>
            Contact
          </ScrollLink>
          {/* Mobile Login & Signup Buttons */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <a
              href="/login"
              className="w-4/5 px-5 py-2 rounded-full text-brightGreen border border-brightGreen bg-white hover:bg-brightGreen hover:text-white transition-all font-semibold"
            >
              Login
            </a>
            <a 
              href="/signup"
              className="w-4/5 px-5 py-2 rounded-full text-white bg-brightGreen hover:bg-green-600 transition-all font-semibold"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
