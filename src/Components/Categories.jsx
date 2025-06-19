import React from "react";

const Categories = () => {
  const categories = [
    { id: 1, name: "Technology & Innovation" },
    { id: 2, name: "Science & Research" },
    { id: 3, name: "Humanities & Arts" },
    { id: 4, name: "Business & Economics" },
    { id: 5, name: "Health & Medicine" },
    { id: 6, name: "Engineering & Design" },
    { id: 7, name: "Social Sciences" },
    { id: 8, name: "Education & Pedagogy" },
    { id: 9, name: "Environmental Studies" },
    { id: 10, name: "Mathematics" },
    { id: 11, name: "Literature & Writing" },
    { id: 12, name: "History & Culture" },
    { id: 13, name: "Philosophy & Ethics" },
    { id: 14, name: "Career Development" },
    { id: 15, name: "Personal Growth & Well-being" },
    { id: 16, name: "Computer Science" },
    { id: 17, name: "Data Science & AI" },
    { id: 18, name: "Fine Arts & Music" },
    { id: 19, name: "Architecture & Urban Planning" },
    { id: 20, name: "Law & Legal Studies" },
    { id: 21, name: "Psychology" },
    { id: 22, name: "Astronomy & Space" },
    { id: 23, name: "Biology & Life Sciences" },
    { id: 24, name: "Chemistry" },
    { id: 25, name: "Physics" },
    { id: 26, name: "Sports Science" },
    { id: 27, name: "Journalism & Media" },
    { id: 28, name: "International Relations" },
    { id: 29, name: "Culinary Arts" },
    { id: 30, name: "Gaming & Game Development" },
    { id: 31, name: "Programming" },
  ];
  return (
    <section className="md:py-20 py-10 ">
      <section className="w-11/12 mx-auto ">
        <h1 className="md:text-4xl text-2xl font-bold text-center dark:text-gray-100 text-gray-900 md:mb-12 mb-6">
          Explore Categories
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-800  rounded-lg shadow-md hover:shadow-lg dark:text-gray-100 dark:hover:bg-cyan-500 hover:bg-blue-50 transition-all duration-200  text-gray-700 font-semibold text-center text-lg md:text-xl transform hover:-translate-y-1 hover:cursor-pointer"
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Categories;
