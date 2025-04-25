import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
      <Link to="/" className="hover:text-gray-600">
        <div className="flex items-center">
          <div className="flex mr-2">
            {/* <div className="bg-black w-6 h-6 rounded-full"></div>
          <div className="bg-black w-6 h-6 rounded-full -ml-2"></div> */}
            <img
              className="w-10 h-10 object-contain"
              src="src/assets/logo.png"
              alt="LOGO"
            />
          </div>
          <span className="text-xl font-poppins">Batches</span>
        </div>
      </Link>
      <div className="flex space-x-6">
        {/* <Link to="/" className="hover:text-gray-600">Home</Link> */}
        <Link to="/about" className="hover:text-gray-600">
          About Us
        </Link>
        <Link to="/community" className="hover:text-gray-600">
          Community
        </Link>
        <a href="#" className="hover:text-gray-600">
          News
        </a>
        <Link to="/companies" className="hover:text-gray-600">
          Companies
        </Link>
        {/* <a href="#" className="hover:text-gray-600">News</a>
        <a href="#" className="hover:text-gray-600">Contact Us</a> */}

        <SignedOut>
          <Link to="/signin" className="hover:text-gray-600">Log In</Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/signin" />
        </SignedIn>
      </div>
    </nav>
  );
}
