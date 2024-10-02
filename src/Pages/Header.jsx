import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-lg font-semibold">MyWebsite</div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-6 items-center`}
        >
          <a href="/" className="block py-2 text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block py-2 text-white hover:text-gray-300">
            About
          </a>
          <a
            href="/login"
            className="block py-2 text-white bg-blue-500 hover:bg-blue-700 px-4 rounded-md"
          >
            Login
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pb-4">
            <a href="/" className="block py-2 text-white hover:text-gray-300">
              Home
            </a>
            <a href="/" className="block py-2 text-white hover:text-gray-300">
              Validation
            </a>
            <a href="/" className="block py-2 text-white hover:text-gray-300">
              Yup Validation
            </a>
            <a href="/about" className="block py-2 text-white hover:text-gray-300">
              About
            </a>
            <a
              href="/login"
              className="block py-2 text-white bg-blue-500 hover:bg-blue-700 px-4 rounded-md"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
