import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router";

const Banner = () => {
  return (
    <div>
      <>
        <div className="min-h-screen bg-[#00183A] bg-[url('https://i.ibb.co/S4kS1TZz/Collaboration-Underthe-Blue-Ligh.jpg')] lg:bg-contain bg-cover  bg-no-repeat lg:bg-right  ">
          <Navbar></Navbar>
          <div className="text-white  flex flex-col lg:gap-10  gap-6 justify-center  max-w-11/12 mx-auto ">
            <h1 className="lg:text-6xl text-3xl lg:max-w-3/5 lg:pt-40 lg:leading-20 ">
              Empowering Student Voices Through Shared Knowledge
            </h1>
            <h4 className="lg:text-3xl text-xl text-[#00FFFF]">
              Share. Learn. Grow. Together.
            </h4>
            <p className="text-justify lg:max-w-3/4">
              Unleash your potential with ClarityInsights. Connect, collaborate,
              and grow by sharing insights and learning from peers. Post
              articles, discuss ideas, and expand your understanding in a
              vibrant community. Your platform for collective brilliance.The
              dynamic platform designed exclusively for students to amplify
              their voices and connect through the power of shared knowledge.
              Here, you can publish insightful articles, engage in meaningful
              discussions through comments, and discover new perspectives from a
              diverse community of learners.
            </p>
            {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
              Explore Articles
            </button> */}
            {/* Base - Left */}
            <div className="lg:pt-10">
              <NavLink to={"/allArticles"}>
                <a
                  className="group relative inline-flex items-center overflow-hidden rounded-sm px-8 py-3 bg-[#00FFFF]  text-black focus:ring-3 focus:outline-hidden"
                  href="#"
                >
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

                  <span className=" font-medium transition-all group-hover:me-4">
                    Explore Articles
                  </span>
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Banner;
