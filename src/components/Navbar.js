import React, { useState } from "react";

const Navbar = ({ onAddPostClick }) => {
  const [activeButton, setActiveButton] = useState("login");

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white text-gray-800 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="text-3xl font-extrabold flex items-center mb-4 sm:mb-0">
        <span>ZuAi</span>
        <span className="ml-1 text-yellow-500">★</span> {/* Star Icon */}
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        <button
          onClick={onAddPostClick}
          className="font-bold text-lg py-2 px-6 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 transition duration-300"
        >
          Add Post
        </button>

        <p className="text-gray-400 mx-2 text-xl flex items-center justify-center ">
          .
        </p>
        <button
          onClick={() => setActiveButton("join")}
          className={`font-bold text-lg py-2 px-6 rounded-full transition duration-300 ${
            activeButton === "join"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-purple-600 text-white shadow-sm hover:shadow-md"
          }`}
        >
          Join Now
        </button>
        <button
          onClick={() => setActiveButton("login")}
          className={`font-bold text-lg py-2 px-6 rounded-full transition duration-300 ${
            activeButton === "login"
              ? "bg-white text-gray-600 border border-gray-300 shadow-lg"
              : "bg-white text-gray-600 border border-gray-300 shadow-sm hover:shadow-md"
          }`}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
