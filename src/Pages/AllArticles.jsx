import React from "react";
import { useLoaderData } from "react-router";
import InsightCard from "../Components/InsightCard";

const AllArticles = () => {
  const allInsights = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <h1 className="md:text-4xl text-2xl font-bold text-center text-gray-900 md:mb-12 mb-6">
        Browse All Insights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allInsights.map((article) => (
          <InsightCard key={article._id} article={article}></InsightCard>
        ))}
      </div>
    </div>
  );
};

export default AllArticles;
