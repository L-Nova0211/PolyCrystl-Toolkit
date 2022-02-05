import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { MENU_ENTRY_HEIGHT } from "../config";
import { IconLogo } from "../../..";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  isMobile: boolean;
  tokenPriceUsd?: number;
  infoLink: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .logo {
    width: 32px;
    margin-right: 5px;
  }
  .brand-name {
    color: white;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    width: 200px;
    .brand-name {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: ${MENU_ENTRY_HEIGHT}px;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ href, isDark }) => {
  const innerLogo = <>{isDark ? <IconLogo className="logo" /> : <IconLogo className="logo" />}</>;
  const brand = <h1 className="brand-name">CRYSTL.FINANCE</h1>;
  return (
    <Flex>
      <StyledLink className="brand" as="a" href={href} aria-label="CRYSTL.Finance">
        {innerLogo}
        {brand}
      </StyledLink>
    </Flex>
  );
};

export default Logo;
