import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Welcome = () => {
  return (
    <div className="w-screen h-screen ">
      <div className="mt-40 mb-20">
        <div className="flex items-center justify-center mb-20">
          <Wallet className="w-10 h-10 text-pink-600 " />
        </div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mb-2">
          Welcome to Mini Web Wallet @Cohort 3.0
        </h3>
        <h6 className="text-center">Let's get started.</h6>
      </div>
      <div className="flex items-center justify-center flex-col">
        <Button className="w-60 mt-4 mb-4">Create a new wallet</Button>
        <Button disabled className="w-60">
          Import wallet
        </Button>
      </div>
    </div>
  );
};
export default Welcome;
