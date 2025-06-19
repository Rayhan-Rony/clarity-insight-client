import React from "react";
import { Link } from "react-router";

const ProfileDetails = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="md:text-4xl text-2xl font-bold">
        Feature Will Coming Soon
      </h1>
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
  );
};

export default ProfileDetails;
