import React from "react";
import { useLoaderData, useParams } from "react-router";
import InsightCard from "../Components/InsightCard";

const CategoryDetails = () => {
  const params = useParams();
  console.log(params);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className=" w-11/12 mx-auto min-h-screen">
      <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-900 md:mb-12 mb-6 mt-6">
        {params?.name}
      </h1>
      {data.length === 0 ? (
        <div className="flex items-center justify-center">
          <p className="md:text-4xl text-2xl  text-center text-gray-900 md:mb-12 mb-6 mt-6">
            No Insights Available for this category yet...........
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((article) => (
            <InsightCard key={article._id} article={article}></InsightCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
