import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useAccount from "@/utils/hooks/useAccounts";
import { CheckIcon, ChevronDown, CopyIcon } from "lucide-react";
import React, { useState } from "react";

export const WalletInfo = () => {
  const { currentAccountDetails } = useAccount();
  const { currentNetwork, currentWalletIndex, currentWallets } =
    currentAccountDetails();
  const [copy, setCopy] = useState("");
  console.log("current:::", currentWallets);

  const handleCopyPublicKey = () => {
    navigator.clipboard
      .writeText(currentWallets.publicKey)
      .then(() => {
        setCopy("Copied!");
        setTimeout(() => setCopy(""), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };
  return (
    <div className="border-[1px]  border-gray-400 pr-3 pl-3 pt-2 pb-2 rounded-[30px] flex justify-center items-center gap-5">
      <div className="">
        <Avatar className="h-[20px] w-[20px]">
          <AvatarImage src={currentNetwork?.iconURL} className="bg-red-50" />
          <AvatarFallback className="bg-red-900">
            {currentNetwork?.fallBackIcon}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="border-l-[0.5px] border-gray-400 border-r-[0.5px] pl-[10px] pr-[10px] flex gap-2">
        <span>{`Wallet ${currentWalletIndex}`}</span>
        <ChevronDown className="mt-0.5  text-gray-400 w-[20px] h-[20px]" />
      </div>
      <div>
        {copy ? (
          <CheckIcon
            className="h-[15px] text-green-600"
          />
        ) : (
          <CopyIcon
            className="h-[15px] text-gray-400"
            onClick={handleCopyPublicKey}
          />
        )}
      </div>
    </div>
  );
};

const WalletNavbar: React.FC = () => {
  const { currentAccountDetails } = useAccount();
  const { accountName } = currentAccountDetails();
  return (
    <div className="p-2 flex justify-between">
      <div className="">
        <Avatar className="bg-red-900">
          <AvatarImage src="" />
          <AvatarFallback className="bg-red-900">{accountName}</AvatarFallback>
        </Avatar>
      </div>
      <WalletInfo />
      <div className="border-0"></div>
    </div>
  );
};

export default WalletNavbar;
