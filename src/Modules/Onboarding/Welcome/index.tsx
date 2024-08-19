import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="mt-40 mb-20">
        <div className="flex items-center justify-center mb-20">
          <Wallet className="w-10 h-10 text-pink-600 " />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mb-2 text-white">
          Welcome to Mini Web Wallet @Cohort 3.0
        </h3>
        <h6 className="text-center text-neutral-400">Let's get started.</h6>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Button  className="w-[300px] h-[50px] mt-4 mb-4 bg-white text-black hover:bg-white/70" onClick={()=>navigate(ROUTES.selectNetwork)}>Create a new wallet</Button>
        <Button disabled className="w-[300px] h-[50px]">
          Import wallet
        </Button>
      </div>
    </div>
  );
};
export default Welcome;
