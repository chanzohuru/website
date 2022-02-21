import React from "react";
import { Helmet } from "react-helmet";
import { useConfig } from "gatsby-theme-advanced";
import styled from "styled-components";

import Layout from "../../themes/amaranth/src/layouts";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: var(--color-primary);
`;

const Text = styled.p`
  text-align: left;
  padding: 0.5em 0;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;



const CoCPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <Helmet title={`COC | ${config.website.title}`} />
      <Wrapper className="coc-container">

        <div className="container">
          <Title>In Summary</Title>
          <Text>
            Members are expected to contribute to an environment that is open, welcoming, considerate and respectful.
          </Text>
          <Text>
            We expect all members to have an enjoyable experience. All members are expected to show respect and courtesy to one another throughout the community. This includes social events for professional networking purposes.
          </Text>

          <Title>
            Communication
          </Title>
          <Text>
            All communication should be appropriate for a general audience, which will include people from many different religions, cultures and nations.
          </Text>
          <Text>
            Sexual language and imagery are not welcome. Please be thoughtful when making jokes or discussing sensitive topics or issues that are likely to have a strong personal effect on some people. If in doubt, ask for advice or simply moderate your expression. Our official communications channels are Telegram ChanzoHuru private group and Discord Server
          </Text>

          <Text>The following are not allowed in our communication channels </Text>
          <ul>
            <li>No fundraising unless approved by the secretariat team</li>
            <li>No charity campaign </li>
            <li>No politics or sports content</li>
            <li>No Ads: If you post ads you will be banned.</li>
          </ul>
          <pre>
            ⚠️ All of the off topic agenda should go through the discord server to a specific channel.
          </pre>
          <Title>
            Harassment
          </Title>
          <Text>
            Harassment may include any unwelcome behavior directed at another person. As such ChanzoHuru will not tolerate behavior that are:
          </Text>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default CoCPage;
