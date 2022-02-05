import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  isMobile?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div<{
  isOpen: boolean;
  isPushed: boolean;
  maxHeight: number;
}>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  color: ${({ theme }) => theme.colors.contrast};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 1;
  overflow: hidden;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
    transition: max-height 0.3s ease-out;
  }
`;

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
  isMobile,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      {isMobile ? (
        <>
          <MenuEntry onClick={handleClick} className={className} isActive={isActive} role="button">
            {icon}
            <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
            {status && (
              <LinkStatusComponent color={status.color} fontSize="14px">
                {status.text}
              </LinkStatusComponent>
            )}
            {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MenuEntry>
          <AccordionContent
            isOpen={isOpen}
            isPushed={isPushed}
            maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
          >
            {children}
          </AccordionContent>
        </>
      ) : (
        <Dropdown>
          <MenuEntry
            onMouseEnter={handleClick}
            onMouseLeave={handleClick}
            className={className}
            isActive={isActive}
            role="button"
          >
            {label !== "More" && icon}
            <LinkLabel isPushed={isMobile ? isPushed : true}>{label}</LinkLabel>
            {status && (
              <LinkStatusComponent color={status.color} fontSize="14px">
                {status.text}
              </LinkStatusComponent>
            )}
            <ArrowDropDownIcon />
          </MenuEntry>
          <DropdownContent>{children}</DropdownContent>
        </Dropdown>
      )}
    </Container>
  );
};

export default Accordion;
