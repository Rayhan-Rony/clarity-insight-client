import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased flex flex-col items-center justify-center p-4 text-center">
      {/* Tailwind CSS CDN and Font configuration */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <style>
        {`
          body { font-family: 'Inter', sans-serif; }
        `}
      </style>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-lg w-full transform transition-all duration-300 hover:scale-105">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4 animate-bounce">
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
        <a
          href="/" // Link back to the home page
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
