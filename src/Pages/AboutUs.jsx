import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaLock, FaMobileAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative   py-16 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Clarity Insights
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Empowering students to share, learn, and grow through knowledge
          exchange and meaningful discussions.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At Clarity Insights, our mission is to create a safe and collaborative
          environment where students can express their ideas, post insightful
          articles, and engage with a vibrant learning community beyond the
          classroom.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Why Choose Clarity Insights?
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-11/12 mx-auto">
          <motion.div
            className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-4xl text-blue-500 mx-auto" />
            <h3 className="mt-4 font-semibold text-lg">Community Driven</h3>
            <p className="mt-2 text-gray-600">
              Built for students, by students — fostering collaboration and
              peer-to-peer learning.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaLightbulb className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="mt-4 font-semibold text-lg">Knowledge First</h3>
            <p className="mt-2 text-gray-600">
              Explore diverse topics and gain fresh insights beyond textbooks.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaLock className="text-4xl text-green-500 mx-auto" />
            <h3 className="mt-4 font-semibold text-lg">Secure & Private</h3>
            <p className="mt-2 text-gray-600">
              Your data is safe with industry-standard authentication and
              privacy measures.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <FaMobileAlt className="text-4xl text-cyan-500 mx-auto" />
            <h3 className="mt-4 font-semibold text-lg">Fully Responsive</h3>
            <p className="mt-2 text-gray-600">
              Enjoy a seamless experience on mobile, tablet, and desktop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          How It Works
        </h2>
        <div className="mt-8 max-w-11/12 mx-auto grid gap-6 md:grid-cols-2">
          {[
            "Read & Learn – Browse articles from various categories without signing in.",
            "Share Your Knowledge – Post your own articles when logged in.",
            "Engage – Comment and discuss with fellow learners.",
            "Discover – Explore topics like Technology, Science, Arts, and more.",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-5 bg-white rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Join the Clarity Insights Community
        </h2>
        <p className="mt-3 text-lg">
          Start sharing your knowledge and connecting with like-minded students
          today.
        </p>
        <a
          href="/signUp"
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
