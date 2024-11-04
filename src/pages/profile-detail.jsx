import React from "react";
import SEO from "../common/seo";
import UserProfile from "../components/user_profile";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <UserProfile />
    </Wrapper>
  );
};

export default index;
