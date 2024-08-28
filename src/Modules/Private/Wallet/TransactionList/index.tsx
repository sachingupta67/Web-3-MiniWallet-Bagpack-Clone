import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BLOCKCHAIN_NETWORKS } from "@/constants/global";
import React from "react";

const TransactionList: React.FC = () => {
  return (
    <div className="mt-[20px]  m-2 flex justify-between ml-[20px] p-[10px] mr-[20px]">
      <div className="flex gap-[20px]">
        <Avatar className="border-[0.5px]">
          <AvatarImage src={BLOCKCHAIN_NETWORKS[0].iconURL} />
          <AvatarFallback>SL</AvatarFallback>
        </Avatar>{" "}
        <div>
          <div>SOLANA</div>
          <div>0 SOL</div>
        </div>
      </div>
      <div>
        <div>$0.00</div>
        <div className="text-red-600">-7.6%</div>
      </div>
    </div>
  );
};

export default TransactionList;
