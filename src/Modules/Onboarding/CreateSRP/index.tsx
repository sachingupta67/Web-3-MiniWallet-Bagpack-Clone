import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import ROUTES from "@/constants/routes";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { generateMnemonic } from "bip39";
import React from "react";

const CSRP:React.FC = () => {
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [copy, setCopy] = useState("");
  const navigate = useNavigate();
  const [mnemonic, setMnemonic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const text = mnemonic;
  const arr = text.split(" ");
  const phraseJSX = useMemo(() => {
    return arr.map((word, index) => (
      <span
        key={index}
        className="text-neutral-400  text-center  w-[150px]  p-2"
      >
        <span className="ml-1 text-white">{word}</span>{" "}
      </span>
    ));
  }, [arr]);

  const generateMnemonicHandler = async () => {
    try {
      setIsLoading(true);
      const newMnemonic = await generateMnemonic();
      setMnemonic(newMnemonic);
    } catch (err) {
      console.log("Err::::", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    generateMnemonicHandler();
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopy("Copied!");
        setTimeout(() => setCopy(""), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };
  if (isLoading) {
    return <h3 className="text-neutral-400">Loading...</h3>;
  }

  return (
    <div className="">
      <div className="mt-40 mb-10">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-2 text-white">
          Secret Recovery Phrase
        </h1>
        <h6 className="text-center text-neutral-400">
          Save these words in a safe place.
        </h6>
        <div className="flex items-center justify-center">
          <span
            className="text-center text-blue-500 hover:text-blue-500/90 cursor-pointer"
            onClick={() => {
              navigate(ROUTES.secretRecoveryPhase);
            }}
          >
            Read the warnings again
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div
          className=" rounded-md pt-4 bg-neutral-600 pb-2 cursor-pointer "
          onClick={handleCopyClick}
        >
          <div className="bg-neutral-600 w-[460px] h-[200px] flex-1 border-1 flex flex-wrap rounded-md mb-5">
            {phraseJSX}
          </div>
          <hr className="bg-white w-[440px] ml-2" />
          <div className="flex items-center justify-center">
            <span className="text-neutral-400 ">
              {copy ? "Copied!" : "Click anywhere on this card to copy"}
            </span>
          </div>
        </div>
        <div className="w-[400px] mt-5 justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md ">
          <Checkbox
            className="bg-white hover:bg-slate-200/90 w-[20px] h-[20px]"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <div>
            <p className="text-neutral-400">
              I saved my secret recovery phrase
            </p>
          </div>
        </div>
        <div className="w-[300px]  justify-start gap-5 h-18 flex items-center pl-6 pr-6 pt-4 pb-4 rounded-md mb-5">
          <Button
            disabled={!checked}
            className="w-[200px] h-[50px] mb-4 bg-white text-black hover:bg-white/70"
            onClick={() => {
              navigate(ROUTES.createPassword, {
                state: { ...location.state, phrase: mnemonic },
              });
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CSRP;
