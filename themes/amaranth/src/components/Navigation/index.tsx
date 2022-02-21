import React from "react";

import { useConfig } from "gatsby-theme-advanced";

import { AdvancedLogo } from "../../icons";

import * as S from "./style";

const Navigation = (): JSX.Element => {
  const config = useConfig();

  return (
    <S.Wrapper>
      <S.HomeButton to="/">
        <AdvancedLogo width={128} height={128} />
        {/* <S.SiteTitle>{config.website.titleShort}</S.SiteTitle> */}
      </S.HomeButton>
      <S.NavGrid>
        <S.NavButton to="/">Latest</S.NavButton>
        <S.NavButton noBasePath to="/about">
          About
        </S.NavButton>
        <S.NavButton noBasePath to="/coc">
          CoC
        </S.NavButton>
      </S.NavGrid>
    </S.Wrapper>
  );
};

export default Navigation;
