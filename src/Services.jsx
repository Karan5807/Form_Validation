import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const Navi = useNavigate();
  const handleBack = () => {
    Navi("/");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-red-800">
      <div className="mx-auto w-1/2 text-center animate-slidein text-white-A700 font-semibold text-4xl">
        <h1>Opps! We ran out of code</h1>
        <div className="container m-2.5">
          <button
            onClick={handleBack}
            className=" border-2 border-sky-500 bg-black text-center animate-slidein text-white font-semibold text-2xl p-2 m-2 rounded-md"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      <h2>Wait....</h2>
    </div>
  );
};

export const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full p-4 pr-12 border rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-2 top-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export const SelectComponent = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onSelect(value); // Call the parent's onSelect handler if passed
  };

  return (
    <div className="w-full max-w-xs">
      <label className="block text-gray-700 mb-2">Select an Option</label>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="" disabled>
          Choose an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};


