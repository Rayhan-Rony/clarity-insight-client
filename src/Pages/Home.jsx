import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import LatestInsights from "../Components/LatestInsights";
import LoadingPage from "./LoadingPage";

const Home = () => {
  return (
    <div data-theme="dark">
      <Banner></Banner>

      <LatestInsights></LatestInsights>

      <Categories></Categories>
    </div>
  );
};

export default Home;
