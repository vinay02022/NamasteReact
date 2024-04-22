import { Link } from "react-router-dom";
import React,{ useState } from "react";
import { LOGO_URLs } from "../utils/constants";


const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-full"
            src={LOGO_URLs}
            alt="Chef Logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 ">
          <ul className="flex space-x-4 text-white">
            <li><Link to="/" className="hover:bg-blue-500 hover:text-white rounded-md px-6 py-3 transition-colors duration-300 ease-in-out ">Home</Link></li>
            <li><Link to="/about" className="hover:bg-blue-500 hover:text-white rounded-md px-6 py-3 transition-colors duration-300 ease-in-out">About</Link></li>
            <li><Link to="/contact" className="hover:bg-blue-500 hover:text-white rounded-md px-6 py-3 transition-colors duration-300 ease-in-out">Contact</Link></li>
            <li><Link to="/career" className="hover:bg-blue-500 hover:text-white rounded-md px-6 py-3 transition-colors duration-300 ease-in-out">Career</Link></li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
  export default Header