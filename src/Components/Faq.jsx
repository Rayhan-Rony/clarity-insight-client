import React from "react";

const Faq = () => {
  const faqs = [
    {
      question: "What exactly is Clarity Insights?",
      answer:
        "Clarity Insights is a platform dedicated to delivering clear, concise, and insightful articles across a multitude of subjects. Our goal is to empower readers with knowledge that fosters understanding and informed perspectives.",
    },
    {
      question: "How often can I expect new content?",
      answer:
        "We are committed to providing regular updates, aiming to publish new articles multiple times a week. Follow us or check back often to stay informed!",
    },
    {
      question: "Interested in contributing? How can I submit an article?",
      answer:
        "We welcome contributions from experts and enthusiasts. Please head over to our 'Contact Us' page where you'll find information on how to submit your ideas and our guidelines for content creation.",
    },
    {
      question: "How can I easily find the topics I'm most interested in?",
      answer:
        "Navigating our content is simple! Utilize the 'Categories' section available on our homepage or in the main menu to filter articles by subject. Additionally, our search bar allows you to quickly find content based on keywords or authors.",
    },
    {
      question:
        "Is there any cost to access the insights provided on this platform?",
      answer:
        "Currently, all of the articles and insights on Clarity Insights are completely free to access. We believe in the power of open knowledge sharing.",
    },
    {
      question: "What technologies are behind the Clarity Insights platform?",
      answer:
        "Clarity Insights is built with a modern web stack to ensure a seamless user experience. Our frontend utilizes the power of React, styled with Tailwind CSS and DaisyUI for a responsive and visually appealing interface. The backend is supported by Node.js for robust performance.",
    },
  ];
  return (
    <section className="py-12 md:py-20   transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 ">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-100 shadow-md rounded-lg "
            >
              <input type="radio" name="my-accordion-3" id={`faq-${index}`} />

              <label
                htmlFor={`faq-${index}`}
                className="collapse-title text-xl font-medium text-base-content cursor-pointer"
              >
                {faq.question}
              </label>

              <div className="collapse-content text-base-content">
                <p className="py-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
