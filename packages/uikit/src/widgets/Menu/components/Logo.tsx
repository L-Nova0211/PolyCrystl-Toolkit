import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";
import TokenPrice from "./TokenPrice";
import { MENU_ENTRY_HEIGHT } from "../config";
import { IconLogo } from "../../..";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  isMobile: boolean;
  tokenPriceUsd?: number;
  hidePrice?: boolean;
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
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.nav} {
    width: 190px;
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

const Logo: React.FC<Props> = ({
  isPushed,
  togglePush,
  href,
  isDark,
  isMobile,
  tokenPriceUsd,
  hidePrice,
  infoLink,
}) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = <>{isDark ? <IconLogo className="logo" /> : <IconLogo className="logo" />}</>;
  const brand = <h1 className="brand-name">CRYSTL.Finance</h1>;
  return (
    <Flex>
      {isMobile && (
        <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="20px">
          {isPushed ? (
            <HamburgerCloseIcon width="24px" color="primary" />
          ) : (
            <HamburgerIcon width="24px" color="primary" />
          )}
        </MenuButton>
      )}
      {isAbsoluteUrl ? (
        <StyledLink className="brand" as="a" href={href} aria-label="CRYSTL.Finance">
          {innerLogo}
          {isMobile ? <></> : brand}
        </StyledLink>
      ) : (
        <StyledLink className="brand" to={href} aria-label="CRYSTL.Finance">
          {innerLogo}
          {isMobile ? <></> : brand}
        </StyledLink>
      )}
      {isMobile && !hidePrice && <TokenPrice tokenPriceUsd={tokenPriceUsd} showIcon={false} infoLink={infoLink} />}
    </Flex>
  );
};

export default Logo;
