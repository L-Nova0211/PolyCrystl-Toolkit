import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { Login } from "../../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const StyledButton = styled(Button)`
  min-width: 125px;
  margin-left: 10px;
  margin-top: 3px;
`;

const UserBlock: React.FC<Props> = () => {
  return (
    <div>
      <StyledButton
        scale="sm"
        onClick={() => {
          window.open("https://app.relaychain.com/#/cross-chain-bridge-transfer", "_blank");
        }}
      >
        Bridge
      </StyledButton>
    </div>
  );
};

export default React.memo(
  UserBlock,
  (prevProps, nextProps) =>
    prevProps.account === nextProps.account &&
    prevProps.login === nextProps.login &&
    prevProps.logout === nextProps.logout
);
