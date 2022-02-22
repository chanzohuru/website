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

const UlWrap = styled.ul`
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.5px;
`;

const List = styled.li`
  margin-left: 1em;
`;



const CoCPage = (): JSX.Element => {
  const config = useConfig();

  return (
    <Layout>
      <Helmet title={`Code of Conduct | ${config.website.title}`} />
      <Wrapper className="coc-container">
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
        <UlWrap>
          <List>No fundraising unless approved by the secretariat team</List>
          <List>No charity campaign </List>
          <List>No politics or sports content</List>
          <List>No Ads: If you post ads you will be banned.</List>
        </UlWrap>
        <Text>
          ⚠️ All of the off topic agenda should go through the discord server to a specific channel.
        </Text>
        <Title>
          Harassment
        </Title>
        <Text>
          Harassment may include any unwelcome behavior directed at another person. As such ChanzoHuru will not tolerate behavior that are:
        </Text>
        <UlWrap>
          <List>Harassment in any form, or language</List>
          <List>Sexist, racist or exclusionary</List>
          <List>Intimidating or threatening</List>
          <List>Insulting or unpleasant</List>
        </UlWrap>
        <Text>
          At Chanzo Huru, we recognize and celebrate the creativity and collaboration of open source contributors and the diversity of skills, experiences, cultures, and opinions they bring to the projects and communities they participate in.
        </Text>
        <Text>
          Every one of Chanzo Huru's open source projects and communities are inclusive environments, based on treating all individuals respectfully, regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or similar personal characteristic.
        </Text>
        <Text>
          We value diverse opinions, but we value respectful behavior more.
        </Text>
        <Text>Respectful behavior includes:</Text>
        <UlWrap>
          <List>Being considerate, kind, constructive, and helpful.</List>
          <List>Not engaging in demeaning, discriminatory, harassing, hateful, sexualized, or physically threatening behavior, speech, and imagery.</List>
          <List>Not engaging in unwanted physical contact.</List>
        </UlWrap>

        <Text>Some Chanzo Huru open source projects may adopt an explicit project code of conduct, which may have additional detailed expectations for participants. Most of those projects will use our modified Contributor Covenant.</Text>

        <Title>Resolve Peacefully</Title>
        <Text>We do not believe that all conflict is necessarily bad; healthy debate and disagreement often yields positive results. However, it is never okay to be disrespectful.</Text>
        <Text>If you see someone behaving disrespectfully, you are encouraged to address the behavior directly with those involved. Many issues can be resolved quickly and easily, and this gives people more control over the outcome of their dispute. If you are unable to resolve the matter for any reason, or if the behavior is threatening or harassing, report it. We are dedicated to providing an environment where participants feel welcome and safe.</Text>
        <Text>If you are troubled by the conduct of another member, or are concerned that another member may be in distress, please speak immediately to any member of the secretariat committee. Your concern will be heard in confidence and taken seriously </Text>
        <Text>Any concern, whatever it is, will be immediately investigated promptly and if necessary appropriate action will be taken. This could include:</Text>
        <UlWrap>
          <List>Informing the Organizing committee about the incident</List>
          <List>In case we have to cooperate with law enforcement we are legally obliged to disclose information of community members in question</List>
          <List>To ensure transparency, we will publish a report to the community, containing any incidents that violated the code of conduct.</List>
        </UlWrap>

      </Wrapper>
    </Layout>
  );
};

export default CoCPage;
