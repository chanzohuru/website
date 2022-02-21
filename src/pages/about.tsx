import * as React from "react";
import { Helmet } from "react-helmet";

import { useConfig } from "gatsby-theme-advanced";

import Layout from "../../themes/amaranth/src/layouts";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
        <div>
          A community club that is poised to spread and foster collaboration and advancement of technology in our local communities. We aim to achieve that by bringing joining together professionals, entrepreneurs, scientists and students in the ICT industry to solve local problems, educate (capacity building from millennials to new generations), share knowledge and inspire.
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
