import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr bg-linear-to-r from-[#01257D] to-[#00FFFF] via-[#0E7490] flex flex-col items-center justify-center px-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center ">
        {/* Animated 404 with glitch effect */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="lg:text-[10rem] md:text-[5rem] text-[3rem] font-extrabold tracking-widest relative inline-block mb-6"
        >
          404
          <span className="absolute top-0 left-0 w-full h-full text-transparent text-shadow-glitch animate-glitch"></span>
          <span className="absolute top-0 left-0 w-full h-full text-transparent text-shadow-glitch-red animate-glitchRed"></span>
        </motion.h1>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Oops! Page Not Found
        </h2>

        <p className="text-lg md:text-xl max-w-md mx-auto mb-8 drop-shadow-md">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back home safely.
        </p>

        <motion.div
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full font-semibold shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            aria-label="Go back home"
          >
            Go Back Home
            <FiArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
