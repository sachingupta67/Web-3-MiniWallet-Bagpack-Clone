import React from 'react'

const CreatePassword = () => {
  return (
    <div className="">
      <div className="mt-40 mb-10">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center mb-2 text-white">
        Create a Password
        </h1>
        <h6 className="text-center text-neutral-400">
          Save these words in a safe place.
        </h6>
        <div className="flex items-center justify-center">
          <span
            className="text-center text-blue-500 hover:text-blue-500/90 cursor-pointer"
            onClick={() => {
            //   navigate(ROUTES.secretRecoveryPhase);
            }}
          >
            Read the warnings again
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        Hello
      </div>
    </div>
  );
};
export default CreatePassword;
