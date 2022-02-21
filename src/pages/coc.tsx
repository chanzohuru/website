import React from "react";
import { Helmet } from "react-helmet";
import { useConfig } from "gatsby-theme-advanced";

import Layout from "../../themes/amaranth/src/layouts";

const CoCPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <div className="coc-container">
        <Helmet title={`COC | ${config.website.title}`} />

        <div className="container">
          We have started a community club called CHANZOHURU that is poised to spread and  foster collaboration and advancement of technology in our local communities. We aim to achieve that by bringing together professionals, entrepreneurs, scientists and students in the ICT industry to solve local problems, educate (capacity building from millennials to new generations), share knowledge and inspire.

          This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

        </div>

      </div>
    </Layout>
  );
};

export default CoCPage;
