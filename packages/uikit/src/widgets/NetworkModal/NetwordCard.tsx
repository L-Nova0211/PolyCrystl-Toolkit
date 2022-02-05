import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { Config } from "./types";

interface Props {
  networkConfig: Config;
  onDismiss: () => void;
  mb: string;
  actualChain: string;
}

const NetworkCard: React.FC<Props> = ({ networkConfig, onDismiss, mb, actualChain }) => {
  const { networkName, icon: Icon, url } = networkConfig;
  return (
    <Button
      width="100%"
      disabled={networkName === actualChain}
      variant="tertiary"
      onClick={() => {
        window.open(url, "_self");
        onDismiss();
      }}
      style={{
        justifyContent: "space-between",
        cursor: networkName === actualChain ? "not-allowed" : "",
        border: networkName === actualChain ? "2px solid rgb(217 156 205)" : "",
      }}
      mb={mb}
      id={`newtork-connect-${networkName.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {networkName}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default NetworkCard;
