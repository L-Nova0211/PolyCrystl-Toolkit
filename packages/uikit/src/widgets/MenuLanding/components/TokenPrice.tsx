import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { IconLogo } from "../../..";

interface Props {
  tokenPriceUsd?: number;
  showIcon: boolean;
  infoLink: string;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const TokenPrice: React.FC<Props> = ({ tokenPriceUsd, showIcon, infoLink }) => {
  return tokenPriceUsd ? (
    <PriceLink href={infoLink} target="_blank">
      {showIcon && <IconLogo width="30px" style={{ paddingRight: "5px" }} />}
      <Text color="contrast" bold>{`$${tokenPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(TokenPrice);
