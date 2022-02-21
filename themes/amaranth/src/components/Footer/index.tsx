import React from "react";

import { useConfig } from "../../../../advanced/src/config";

import UserLinks from "../UserLinks";
import { Caption, H3 } from "../../theme";
// import { AnimatedLink } from "../Links";

import * as S from "./styles";

const Footer = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.LinkGrid>
        <H3>Reach Us 👇🏽</H3>
        <UserLinks includeRss />
      </S.LinkGrid>
      <S.Info>
        <Caption>{config.website.copyright}</Caption>
      </S.Info>
    </S.Wrapper>
  );
};

export default Footer;
