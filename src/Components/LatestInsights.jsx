import React from "react";

const LatestInsights = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Quantum Computing Basics",
      content:
        "Quantum computing is a rapidly emerging technology that harnesses the laws of quantum mechanics to solve problems too complex for classical computers. Unlike classical computers which use bits that can be either 0 or 1, quantum computers use qubits which can be 0, 1, or both simultaneously through superposition. This allows quantum computers to process vast amounts of information much faster. Key concepts include superposition, entanglement, and quantum tunneling. While still in its early stages, quantum computing promises revolutionary advancements in fields like medicine, materials science, and artificial intelligence.",
      author: "Dr. Emily Carter",
      date: "April 23, 2024",
      comments: [
        {
          id: 1,
          author: "Alice Smith",
          content: "Great overview! Very clear explanation of complex topics.",
          date: "April 24, 2024",
        },
        {
          id: 2,
          author: "Bob Johnson",
          content:
            "What are some practical applications we might see in the next 5-10 years?",
          date: "April 25, 2024",
        },
      ],
    },
    {
      id: 2,
      title: "The Future of AI in Education",
      content:
        "Artificial intelligence is poised to transform the educational landscape, offering personalized learning experiences, automated grading, and intelligent tutoring systems. AI can adapt to individual student needs, providing tailored content and feedback, thereby enhancing engagement and comprehension. It can also assist educators by automating administrative tasks, allowing them to focus more on teaching and student interaction. However, ethical considerations regarding data privacy, algorithmic bias, and the potential impact on human interaction in learning must be carefully addressed as AI integration progresses.",
      author: "Prof. David Lee",
      date: "May 1, 2024",
      comments: [
        {
          id: 3,
          author: "Charlie Brown",
          content:
            "I think AI tutors could be a game-changer for students struggling in specific subjects.",
          date: "May 2, 2024",
        },
        {
          id: 4,
          author: "Diana Prince",
          content:
            "Concerned about the impact on critical thinking skills if students rely too much on AI.",
          date: "May 3, 2024",
        },
      ],
    },
    {
      id: 3,
      title: "Sustainable Engineering: Innovations for a Greener Tomorrow",
      content:
        "Sustainable engineering focuses on designing and implementing solutions that meet present needs without compromising the ability of future generations to meet their own needs. This field integrates environmental, social, and economic considerations into engineering practices. Recent innovations include renewable energy systems like advanced solar panels and wind turbines, green building materials, efficient waste management technologies, and sustainable transportation solutions. The goal is to minimize environmental impact, conserve resources, and promote long-term ecological balance through responsible design and innovation.",
      author: "Sarah Chen",
      date: "May 15, 2024",
      comments: [
        {
          id: 5,
          author: "Frank Green",
          content:
            "Are there any open-source projects for sustainable engineering that students can contribute to?",
          date: "May 16, 2024",
        },
      ],
    },
    {
      id: 4,
      title: "The Role of Blockchain in Data Security",
      content:
        "Blockchain technology, widely known for its role in cryptocurrencies, offers robust solutions for data security beyond financial transactions. Its decentralized and immutable ledger system makes it highly resistant to tampering and unauthorized changes, offering enhanced transparency and auditability. In a data security context, blockchain can be used for secure data sharing, identity management, and verifying data integrity. Its cryptographic principles and distributed nature reduce single points of failure, making it an attractive option for industries requiring high levels of data trust and protection.",
      author: "Michael Chen",
      date: "June 1, 2024",
      comments: [],
    },
    {
      id: 5,
      title: "Exploring the Psychology of Learning",
      content:
        "The psychology of learning delves into how individuals acquire, process, and retain information, skills, and behaviors. Key theories include behaviorism, cognitivism, and constructivism, each offering different perspectives on the learning process. Understanding cognitive load, metacognition, and the role of motivation is crucial for designing effective educational strategies. This field emphasizes that learning is not merely about memorizing facts but about constructing understanding, making connections, and applying knowledge in diverse contexts. Insights from learning psychology inform everything from classroom teaching methods to educational software design.",
      author: "Dr. Jane Foster",
      date: "June 5, 2024",
      comments: [],
    },
  ];
  return (
    <div className="md:py-20 py-10">
      <h2 className="md:text-4xl text-2xl font-bold text-center text-gray-900 md:mb-12 mb-6">
        Latest Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="md:text-2xl text-xl font-bold text-gray-800 mb-2">
              {article.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              By {article.author} on {article.date}
            </p>
            {/* line-clamp-3 ensures the content snippet doesn't exceed 3 lines */}
            <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
              {article.content}
            </p>
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
                {" "}
                Read More
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestInsights;
