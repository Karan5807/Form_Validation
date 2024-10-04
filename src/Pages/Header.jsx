import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-violet-400 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <Link className="Link" to={"/"}>
          <h6 className="font-normal text-xl">From Validation</h6>
        </Link>

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
          <Link className="Link" to={"/"}>
            Home
          </Link>
          <Link className="Link" to={"/Validation"}>
            Validation
          </Link>
          <Link className="Link" to={"/Yup_Validation"}>
            Yup Validation
          </Link>
          <Link className="Link" to={"/About"}>
            About
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pb-4">
            <Link
              className="block py-2 text-white hover:text-gray-300"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="block py-2 text-white hover:text-gray-300"
              to={"/Validation"}
            >
              Validation
            </Link>
            <Link
              className="block py-2 text-white hover:text-gray-300"
              to={"/Yup_Validation"}
            >
              Yup Validation
            </Link>
            <Link
              className="block py-2 text-white hover:text-gray-300"
              to={"/About"}
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
