import WalletNavbar from "@/Modules/Common/WalletNavbar";
import React from "react";
import WalletTransactionPanel from "./WalletTransactionPanel";

const Wallet: React.FC = () => {
  return (
    <div>
      <WalletNavbar />
      <WalletTransactionPanel />
    </div>
  );
};
export default Wallet;
