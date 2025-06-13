import React from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import LatestInsights from "../Components/LatestInsights";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestInsights></LatestInsights>
      <Categories></Categories>
    </div>
  );
};

export default Home;
