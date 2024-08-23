import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

const useSolanaWallet = () => {
  const createSolanaWallet = ({ mnemonic = "", idx = 0, isNew = false }) => {
    const seed = mnemonicToSeedSync(mnemonic);
    const path = `m/44'/501'/${idx}'/0'`;
    const derivedSeed = derivePath(path, seed?.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    return {
      currentIndex: isNew ? Number(idx) : Number(idx) + 1,
      publicKeys: keypair.publicKey.toBase58(),
    };
  };

  return { createSolanaWallet };
};

export default useSolanaWallet;
