import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">

      <div className="flex items-center">
        
        <div className="flex mr-2">
          <div className="bg-black w-6 h-6 rounded-full"></div>
          <div className="bg-black w-6 h-6 rounded-full -ml-2"></div>
        </div>
        <span className="font-bold text-xl ml-2">Batches</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/about" className="hover:text-gray-600">About Us</Link>
        <a href="#" className="hover:text-gray-600">Community</a>
        <a href="#" className="hover:text-gray-600">Companies</a>
        {/* <a href="#" className="hover:text-gray-600">News</a>
        <a href="#" className="hover:text-gray-600">Contact Us</a> */}
      </div>
    </nav>
  );
}
