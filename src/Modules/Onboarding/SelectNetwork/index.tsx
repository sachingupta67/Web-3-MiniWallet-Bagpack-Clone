import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { useNavigate } from "react-router-dom";
import React from "react";
import { BLOCKCHAIN_NETWORKS } from "@/constants/global";

const SelectNetwork = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="mt-40 mb-20">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-center mb-2 text-white">
          Select Network
        </h2>
        <h6 className="text-center text-neutral-400">
          Mini Wallet supports multiple blockchains.
        </h6>
        <h6 className="text-center  text-neutral-400">
          Which do you want to use? You can add more later.
        </h6>
      </div>
      {BLOCKCHAIN_NETWORKS.map((network) => {
        return (
          <div
            className="flex items-center justify-center mt-4 "
            key={network.id}
          >
            <Button
              className="bg-neutral-700 w-80 justify-start gap-5 h-18 hover:bg-neutral-700/80"
              onClick={() => {
                navigate(ROUTES.secretRecoveryPhase, {
                  state: { network: network.id },
                });
              }}
            >
              <Avatar>
                <AvatarImage src={network.iconURL} />
                <AvatarFallback>{network.fallBackIcon}</AvatarFallback>
              </Avatar>
              {network.label}
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default SelectNetwork;
