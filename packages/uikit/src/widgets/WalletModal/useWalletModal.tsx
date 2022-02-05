import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (
  login: Login,
  logout: () => void,
  explorerUrl?: string,
  explorerName?: string,
  account?: string
): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(
    <AccountModal account={account || ""} logout={logout} explorerUrl={explorerUrl} explorerName={explorerName} />
  );
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
