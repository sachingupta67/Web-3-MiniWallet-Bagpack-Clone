import { useAppDispatch } from "@/core/redux";
import {
  createFreshAccountNetworkWallet,
  globalSliceSelector,
  setCurrentAccountStatus,
} from "@/core/redux/reducers/globalSlice";
import { useSelector } from "react-redux";
import useSolanaWallet from "./useSolanaWallet";

const useAccount = () => {
  const { createSolanaWallet } = useSolanaWallet();
  const { accounts } = useSelector(globalSliceSelector);
  const dispatch = useAppDispatch();

  const createAccount = ({ network = "", phrase = "" }) => {
    let payload = {};
    if (accounts.length) {
      // TODO :Modify the existing one
    } else {
      const solanaWalletRes = createSolanaWallet({
        mnemonic: phrase,
        idx: 0,
        isNew: true,
      });
      payload = {
        networks: [network],
        phrase: phrase,
        wallets: { [network]: [{ publicKey: solanaWalletRes.publicKeys }] },
      };
    }
    dispatch(
      setCurrentAccountStatus({ accountIndex: 0, walletIndex: 0, network })
    ); // Here we will set default to '0'
    dispatch(createFreshAccountNetworkWallet(payload));
  };

  //   const updateSecurityPhrase = (phrase = "") => {};
  return { createAccount, createSolanaWallet };
};

export default useAccount;

