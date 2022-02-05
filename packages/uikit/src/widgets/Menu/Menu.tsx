import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT } from "./config";
import TokenPrice from "./components/TokenPrice";
import { MenuEntry, LinkLabel } from "./components/MenuEntry";
import MenuLink from "./components/MenuLink";
import Accordion from "./components/Accordion";
import { useModal } from "../Modal";
import ConnectNetwork from "../NetworkModal/ConnectNetwork";
import PolygonChain from "../NetworkModal/icons/PolygonChain";
import CronosChain from "../NetworkModal/icons/CronosChain";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-60px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px ${({ theme }) => theme.colors.primary};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{
  isPushed: boolean;
  showMenu: boolean;
  isMobile: boolean;
}>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: 0px;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  toggleTheme,
  isDark,
  langs,
  setLang,
  currentLang,
  crystlPriceUsd,
  hidePrice,
  hideNetwork,
  links,
  profile,
  children,
  infoLink,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile ? false : !isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const location = useLocation();
  const handleClick = isMobile ? () => setIsPushed(false) : undefined;

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const networkChain =
    window.location.href.indexOf("cronos") > -1
      ? {
          networkName: "Cronos",
          icon: <CronosChain />,
          explorerUrl: "https://cronos.crypto.org/explorer/address/",
          explorerName: "Cronos",
        }
      : {
          networkName: "Polygon",
          icon: <PolygonChain />,
          explorerUrl: "https://polygonscan.com/address/",
          explorerName: "PolygonScan",
        };

  const [useNetworkModal] = useModal(<ConnectNetwork actualChain={networkChain.networkName} />);

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Flex>
          <Logo
            isPushed={isMobile ? isPushed : false}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
            href={homeLink?.href ?? "/"}
            isMobile={isMobile}
            tokenPriceUsd={crystlPriceUsd}
            hidePrice={hidePrice}
            infoLink={infoLink}
          />
          {!isMobile &&
            links.map((entry) => {
              const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
              if (entry.items) {
                const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
                const initialOpenState =
                  entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
                return (
                  <Accordion
                    key={entry.label}
                    isPushed={isMobile}
                    pushNav={setIsPushed}
                    label={entry.label}
                    status={entry.status}
                    initialOpenState={initialOpenState}
                    className={calloutClass}
                    isActive={entry.items.some((item) => item.href === location.pathname)}
                    isMobile={isMobile}
                  >
                    {isPushed &&
                      entry.items.map((item) => (
                        <MenuLink href={item.href}>
                          <MenuEntry
                            key={item.href}
                            secondary
                            isActive={item.href === location.pathname}
                            onClick={handleClick}
                          >
                            <LinkLabel isPushed={isMobile ? isPushed : true}>{item.label}</LinkLabel>
                          </MenuEntry>
                        </MenuLink>
                      ))}
                  </Accordion>
                );
              }
              return (
                <MenuLink href={entry.href} onClick={handleClick}>
                  <MenuEntry
                    key={entry.label}
                    isActive={entry.href === location.pathname}
                    className={entry.calloutClass ? entry.calloutClass : undefined}
                  >
                    <LinkLabel isPushed={isMobile ? isPushed : true}>{entry.label}</LinkLabel>
                  </MenuEntry>
                </MenuLink>
              );
            })}
        </Flex>

        {!!login && !!logout && (
          <Flex flexDirection="row" alignItems="center">
            {!isMobile && !hidePrice && <TokenPrice tokenPriceUsd={crystlPriceUsd} showIcon infoLink={infoLink} />}
            {!hideNetwork && (
              <MenuEntry
                onClick={useNetworkModal}
                style={{
                  border: "2px solid #353547",
                  borderRadius: "24px",
                  height: "36px",
                  marginLeft: "18px",
                }}
              >
                {networkChain.icon}
                {!isMobile && (
                  <LinkLabel isPushed={isMobile ? isPushed : true} style={{ margin: "7px" }}>
                    {networkChain.networkName}
                  </LinkLabel>
                )}
              </MenuEntry>
            )}
            <UserBlock
              account={account}
              login={login}
              logout={logout}
              explorerUrl={networkChain.explorerUrl}
              explorerName={networkChain.explorerName}
            />
            {profile && <Avatar profile={profile} />}
          </Flex>
        )}
        {/* disabled theme switcher */}
        {false && !isMobile && <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />}
      </StyledNav>
      <BodyWrapper>
        {isMobile && (
          <Panel
            isPushed={isMobile ? isPushed : true}
            isMobile={isMobile}
            showMenu={isMobile ? showMenu : false}
            toggleTheme={toggleTheme}
            isDark={isDark}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            crystlPriceUsd={crystlPriceUsd}
            hidePrice={hidePrice}
            pushNav={setIsPushed}
            links={links}
            infoLink={infoLink}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu} isMobile={isMobile}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
