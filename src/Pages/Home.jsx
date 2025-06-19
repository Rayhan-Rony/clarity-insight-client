import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import LatestInsights from "../Components/LatestInsights";
import LoadingPage from "./LoadingPage";
import Faq from "../Components/Faq";
import TopContributor from "../Components/TopContributor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <LatestInsights></LatestInsights>

      <Categories></Categories>
      <Faq></Faq>
      <TopContributor></TopContributor>
    </div>
  );
};

export default Home;
