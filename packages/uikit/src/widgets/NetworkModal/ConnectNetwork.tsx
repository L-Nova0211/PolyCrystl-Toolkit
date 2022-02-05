import React from "react";
import styled from "styled-components";
import { Link } from "../../components/Link";
import { Modal } from "../Modal";
import NetworkCard from "./NetwordCard";
import config from "./config";

interface Props {
  onDismiss?: () => void;
  actualChain: string;
}

const HelpLink = styled(Link)`
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 24px;
  text-align: center;
`;

const ConnectNetwork: React.FC<Props> = ({ onDismiss = () => null, actualChain }) => (
  <Modal title="Select a network" onDismiss={onDismiss}>
    {config.map((entry, index) => (
      <NetworkCard
        key={entry.networkName}
        onDismiss={onDismiss}
        networkConfig={entry}
        mb={index < config.length - 1 ? "8px" : "0"}
        actualChain={actualChain}
      />
    ))}
    <HelpLink>
      <div className="row">
        <div>You are currently browsing on </div>
        the {actualChain} network
      </div>
    </HelpLink>
  </Modal>
);

export default ConnectNetwork;
