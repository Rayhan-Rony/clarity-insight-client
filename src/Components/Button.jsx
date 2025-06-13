import React from "react";
import { NavLink } from "react-router";
import { FaGoogle } from "react-icons/fa6";

const Button = ({ type, text, google }) => {
  return (
    <div className="lg:pt-10">
      {/* <NavLink to={""}> */}
      <button
        className="group relative inline-flex items-center overflow-hidden rounded-sm px-8 py-3 bg-[#00FFFF]  text-black focus:ring-3 focus:outline-hidden"
        type={type}
      >
        <span className={`mr-2 ${google ? "block" : "hidden"}`}>
          <FaGoogle />
        </span>
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 shadow-sm rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className=" font-bold transition-all group-hover:me-4">
          {text}
        </span>
      </button>
      {/* </NavLink> */}
    </div>
  );
};

export default Button;
