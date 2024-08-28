import { useAppDispatch } from "@/core/redux";
import {
  createFreshAccountNetworkWallet,
  globalSliceSelector,
  setCurrentAccountStatus,
} from "@/core/redux/reducers/globalSlice";
import { useSelector } from "react-redux";
import useSolanaWallet from "./useSolanaWallet";
import { BLOCKCHAIN_NETWORKS } from "@/constants/global";

const useAccount = () => {
  const { createSolanaWallet } = useSolanaWallet();
  const { accounts, current } = useSelector(globalSliceSelector);
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

  const currentAccountDetails = () => {
    const currentAcIndex = current.accountIndex || 0;
    const currentWalletIndex = current.walletIndex || 0;
    const currentNetwork = current.network || "";
    const currentAccount = accounts[currentAcIndex];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentWallets: any = []

    if (currentAccount.wallets && currentNetwork) {
      currentWallets =
        currentAccount.wallets[currentNetwork as any][currentWalletIndex];
    }

    return {
      currentWallets,
      currentWalletIndex: currentAcIndex + 1,
      accountName: currentAccount.name || `A${currentWalletIndex + 1}`,
      currentNetwork: BLOCKCHAIN_NETWORKS.find(
        (item) => item.id === currentNetwork
      ),
    };
  };

  //   const updateSecurityPhrase = (phrase = "") => {};
  return {
    createAccount,
    createSolanaWallet,
    currentAccountDetails,
  };
};

export default useAccount;
