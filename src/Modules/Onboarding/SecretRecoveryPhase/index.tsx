import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ROUTES from "@/constants/routes";
import { TriangleAlert,LockKeyhole} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const SecretRecoveryPhase = () => {
  const [checked,setChecked] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="">
      <div className="mt-40 mb-10">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-2 text-white">
          Secret Recovery Phrase Warning
        </h1>
        <h6 className="text-center text-neutral-400">
          On the next page, you will receive your secret{" "}
        </h6>
        <h6 className="text-center text-neutral-400">recovery phrase.</h6>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="bg-neutral-600 w-[430px]  justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md mb-5">
          <TriangleAlert className="text-yellow-400"  />
          <div>
            <h6 className="text-neutral-400">This is the <span className="text-white">ONLY</span> way to recover your account</h6>
            <h6 className="text-neutral-400">if you lose access to your device or password.</h6>
          </div>
        </div>
        <div className="bg-neutral-600 w-[430px]  justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md mb-5">
          <LockKeyhole className="text-emerald-400" />
          <div >
            <h6 className="text-neutral-400">Write it down, store it in a safe place, and </h6>
            <h6 className="text-neutral-400"><span className="text-white">NEVER</span> share it with anyone.</h6>
          </div>
        </div>
        <div className ="w-[400px] mt-5 justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md ">
          <Checkbox className="bg-white hover:bg-slate-200/90 w-[20px] h-[20px]" checked={checked} onClick={()=>setChecked(!checked)} />
          <div >
            <p className="text-neutral-400">I understand that I am responsible for saving my secret recovery phrase, and that it is the only way to recover my wallet. </p>
          </div>
        </div>
        <div className ="w-[300px]  justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md mb-5">
        <Button  disabled={!checked} className="w-[200px] h-[50px] mb-4 bg-white text-black hover:bg-white/70" onClick={()=>{
          navigate(ROUTES.createSRP)
        }}>Next</Button>
        </div>
      </div>
    </div>
  );
};
export default SecretRecoveryPhase;
