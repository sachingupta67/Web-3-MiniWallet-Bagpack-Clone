enum BlockchainEnum {
  // ETHEREUM = 'ethereum',
  SOLANA = "solana",
  // BSC = 'bsc',
  // POLYGON = 'polygon',
  // OPTIMISM = 'optimism',
  // AVALANCHE = 'avalanche',
  // ARBITRUM = 'arbitrum',
  // FANTOM = 'fantom',
  // NEO = 'neo',
  // KRAKEN = 'kraken',
  // BINANCE_SMART_CHAIN = 'binance_smart_chain',
  // CARDANO = 'cardano',
  // SOLANA = 'solana',
  // TEZOS = 'tezos',
  // POLKADOT = 'polkadot',
  // CELO = 'celo',
  // AURORA = 'aurora',
  // NEST = 'nest',
  // BELT = 'belt',
  // CARDANO_TESTNET = 'cardano_testnet',
  // KUSAMA = 'kusama',
  // XRP = 'xrp'
}

const BLOCKCHAIN_NETWORKS = [
  {
    id: BlockchainEnum.SOLANA,
    label: BlockchainEnum.SOLANA.toUpperCase(),
    iconURL:
      "https://s3.amazonaws.com/app-assets.xnfts.dev/images/network-logo-replacement-solana.png",
    fallBackIcon: "SL",
  }
];

export { BLOCKCHAIN_NETWORKS };
