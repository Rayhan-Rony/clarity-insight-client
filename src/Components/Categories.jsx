import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Categories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    axios
      .get("https://clarity-insight-server.vercel.app/categories")
      .then((response) => {
        setCategoriesData(response.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <section className="md:py-20 py-10 ">
      <section className="w-11/12 mx-auto ">
        <h1 className="md:text-4xl text-2xl font-bold text-center  text-gray-900 md:mb-12 mb-6">
          Explore Categories
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              to={`/categoryDetails/${category.name}`}
              className="flex items-center justify-center p-4 bg-white  rounded-lg shadow-md hover:shadow-lg  hover:bg-blue-50 transition-all duration-200  text-gray-700 font-semibold text-center text-lg md:text-xl transform hover:-translate-y-1 hover:cursor-pointer"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Categories;
