
'use client';

import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import Loading from "../../lagy_loader/loading";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
