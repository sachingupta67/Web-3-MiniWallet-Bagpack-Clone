import { ArrowDown, ArrowRightLeft, ArrowUp } from "lucide-react";
import React from "react";
import TransactionList from "../TransactionList";

const transactionsType = [
  {
    id: "received",
    icon: <ArrowUp className="text-blue-700 " />,
    label: "Receive",
  },
  {
    id: "send",
    icon: <ArrowDown className="text-blue-700" />,
    label: "Send",
  },
  {
    id: "swap",
    icon: <ArrowRightLeft className="text-blue-700" />,
    label: "Swap",
  },
];

const WalletTransactionPanel: React.FC = () => {
  return (
    <>
      <div className="p-2  mt-[20px] flex flex-col justify-center items-center ml-[40px]">
        <div className="text-[40px] ">$0.00</div>
        <div className=" text-[20px]">
          <span>$0.00</span>
          <span className="ml-4">0%</span>
        </div>

        <div className="flex mt-[20px]  w-[250px] items-center justify-center">
          {transactionsType.map((item) => {
            return (
              <div
                key={item.id}
                className="flex-1 flex flex-col items-center gap-2 text-[16px] text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <span className="flex items-center justify-center w-[40px] h-[40px] rounded-[40px] bg-slate-400  hover:slate-200">
                  {item.icon}
                </span>
                <span className="text-white-200">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      <TransactionList/>
    </>
  );
};

export default WalletTransactionPanel;
