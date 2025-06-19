import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex flex-col items-center justify-center text-center">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-11/12  min-h-screen w-full transform transition-all duration-300 hover:scale-105">
        <h1 className="text-9xl font-extrabold text-[#00183A]  mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
          Oops! It looks like the page you're trying to find doesn't exist. It
          might have been moved, deleted, or you might have typed the address
          incorrectly.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-[#00FFFF]  font-semibold rounded-full shadow-lg hover:bg-[#00FFFF] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Go Back Home
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
