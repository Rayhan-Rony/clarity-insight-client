import axios from "axios";
import React, { useEffect, useState } from "react";
import InsightCard from "./InsightCard";

const LatestInsights = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://clarity-insight-server.vercel.app/insights")
      .then((response) => {
        setLatestArticles(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="md:py-20 py-10 max-w-11/12 mx-auto ">
      <h2 className="md:text-4xl text-2xl font-bold text-center    text-gray-900 md:mb-12 mb-6">
        Latest Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestArticles.map((article) => (
          <InsightCard key={article._id} article={article}></InsightCard>
        ))}
      </div>
    </div>
  );
};

export default LatestInsights;
