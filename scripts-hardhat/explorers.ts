import { SupportedChainId } from "./chains";

// TODO: import ChainConfig | CustomChain from hardhat-verify
export interface ChainConfig {
  network: string;
  chainId: number;
  urls: {
    apiURL: string;
    browserURL: string;
  };
}

export interface ChainConfigMinimal {
  urls: {
    apiURL: string;
    browserURL: string;
  };
}

// Only need to specify etherscanConfig for a chain if it's not supported by default:
// npx hardhat verify --list-networks
// for configs of already supported networks(with different chainNames) look inside: @nomiclabs/hardhat-etherscan/src/ChainConfig.ts
export const etherscanConfig: Partial<Record<SupportedChainId, ChainConfigMinimal>> = {
  [SupportedChainId.BASE_MAINNET]: {
    urls: {
      apiURL: "https://api.basescan.org/api",
      browserURL: "https://basescan.org/",
    },
  },
  [SupportedChainId.FLARE_MAINNET]: {
    urls: {
      // routescan
      apiURL: "https://api.routescan.io/v2/network/mainnet/evm/14/etherscan",
      browserURL: "https://flarescan.com",
    },
  },
  [SupportedChainId.EVMOS_MAINNET]: {
    urls: {
      apiURL: "https://escan.live/api",
      browserURL: "https://escan.live",
    },
  },
  [SupportedChainId.ARTHERA_MAINNET]: {
    urls: {
      apiURL: "https://explorer.arthera.net/api",
      browserURL: "https://explorer.arthera.net",
    },
  },
  [SupportedChainId.ARTHERA_TESTNET]: {
    urls: {
      apiURL: "https://explorer-test.arthera.net/api",
      browserURL: "https://explorer-test.arthera.net",
    },
  },
  [SupportedChainId.CELO_MAINNET]: {
    urls: {
      apiURL: "https://api.celoscan.io/api",
      browserURL: "https://celoscan.io/",
    },
  },
  [SupportedChainId.BLAST_MAINNET]: {
    urls: {
      apiURL: "https://api.blastscan.io/api",
      browserURL: "https://blastscan.io/",
    },
  },
  [SupportedChainId.KAVA_MAINNET]: {
    urls: {
      apiURL: "https://kavascan.com/api",
      browserURL: "https://kavascan.com/",
    },
  },
  [SupportedChainId.SCROLL_MAINNET]: {
    urls: {
      apiURL: "https://api.scrollscan.com/api",
      browserURL: "https://scrollscan.com/",
    },
  },
  [SupportedChainId.INK_SEPOLIA]: {
    urls: {
      apiURL: "https://explorer-sepolia.inkonchain.com/api",
      browserURL: "https://sepolia.inkonscan.xyz/",
    },
  },
  [SupportedChainId.MANTLE_MAINNET]: {
    // urls: {
    //   apiURL: "https://api.routescan.io/v2/network/mainnet/evm/5000/etherscan",
    //   browserURL: "https://mantlescan.info"
    // urls: {
    //   apiURL: "https://explorer.mantle.xyz/api",
    //   browserURL: "https://explorer.mantle.xyz/"
    // },
    urls: {
      apiURL: "https://api.mantlescan.xyz/api",
      browserURL: "https://mantlescan.xyz",
    },
  },
  [SupportedChainId.POLYGON_ZKEVM]: {
    urls: {
      apiURL: "https://api-zkevm.polygonscan.com/api",
      browserURL: "https://zkevm.polygonscan.com",
    },
  },
  [SupportedChainId.LINEA_MAINNET]: {
    urls: {
      apiURL: "https://api.lineascan.build/api",
      browserURL: "https://lineascan.build/",
    },
  },
  [SupportedChainId.OPBNB_MAINNET]: {
    urls: {
      apiURL: `https://open-platform.nodereal.io/${process.env.NODEREAL_API_KEY}/op-bnb-mainnet/contract/`,
      browserURL: "https://opbnbscan.com/",
    },
  },
  [SupportedChainId.FANTOM_MAINNET]: {
    urls: {
      apiURL: "https://api.ftmscan.com/api",
      browserURL: "https://ftmscan.com",
    },
  },
  [SupportedChainId.X1_TESTNET]: {
    urls: {
      apiURL: "https://www.oklink.com/api/v5/explorer/contract/verify-source-code-plugin/XLAYER_TESTNET",
      browserURL: "https://www.oklink.com/xlayer-test",
    },
  },
  [SupportedChainId.TAIKO_HEKLA]: {
    urls: {
      // a routescan explorer
      apiURL: "https://api.routescan.io/v2/network/testnet/evm/167009/etherscan",
      browserURL: "https://hekla.taikoscan.network/",
    },
  },
  [SupportedChainId.SKALE_EUROPA]: {
    urls: {
      // a blockscout explorer
      apiURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com/api",
      browserURL: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
    },
  },
  [SupportedChainId.HAVEN1_DEVNET]: {
    urls: {
      // a blockscout explorer
      apiURL: "https://explorer-api.staging.haven1.org/api",
      browserURL: "https://explorer.staging.haven1.org/",
    },
  },
  [SupportedChainId.BERACHAIN_BARTIO]: {
    urls: {
      apiURL: "https://api.routescan.io/v2/network/testnet/evm/80084/etherscan",
      browserURL: "https://bartio.beratrail.io",
    },
  },
};

// Utility type to extract and enforce keys from etherscanConfig
type EnforcedApiKeys<T extends object> = {
  [P in keyof T]: string;
} & Partial<Record<SupportedChainId, string>>;

const dummyApiKey = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";

export const etherscanApiKeys: EnforcedApiKeys<typeof etherscanConfig> = {
  // required SupportedChainId since specified in etherscanConfig
  [SupportedChainId.BASE_MAINNET]: process.env.BASESCAN_API_KEY || "",
  [SupportedChainId.EVMOS_MAINNET]: process.env.ESCAN_API_KEY || "",
  [SupportedChainId.ARTHERA_MAINNET]: dummyApiKey,
  [SupportedChainId.ARTHERA_TESTNET]: dummyApiKey,
  [SupportedChainId.CELO_MAINNET]: process.env.CELOSCAN_API_KEY || "",
  [SupportedChainId.BLAST_MAINNET]: process.env.BLASTSCAN_API_KEY || "",
  [SupportedChainId.KAVA_MAINNET]: process.env.KAVASCAN_API_KEY || "",
  [SupportedChainId.SCROLL_MAINNET]: process.env.SCROLLSCAN_API_KEY || "",
  [SupportedChainId.MANTLE_MAINNET]: process.env.MANTLESCAN_API_KEY || "",
  [SupportedChainId.POLYGON_ZKEVM]: process.env.ZKEVMSCAN_API_KEY || "",
  [SupportedChainId.LINEA_MAINNET]: process.env.LINEASCAN_API_KEY || "",
  [SupportedChainId.OPBNB_MAINNET]: process.env.OPBNBSCAN_API_KEY || "",
  [SupportedChainId.FANTOM_MAINNET]: process.env.FTMSCAN_API_KEY || "",
  [SupportedChainId.INK_SEPOLIA]: "", // no API key required
  [SupportedChainId.HAVEN1_DEVNET]: dummyApiKey, // no api key required
  [SupportedChainId.X1_TESTNET]: dummyApiKey, // no api key required
  [SupportedChainId.TAIKO_HEKLA]: dummyApiKey, // no api key required
  [SupportedChainId.SKALE_EUROPA]: dummyApiKey, // no api key required
  [SupportedChainId.FLARE_MAINNET]: dummyApiKey, // no api key required
  [SupportedChainId.BERACHAIN_BARTIO]: dummyApiKey, // no api key required

  // extra optional SupportedChainId
  [SupportedChainId.ARBITRUM_MAINNET]: process.env.ARBISCAN_API_KEY || "",
  [SupportedChainId.AVALANCHE_MAINNET]: process.env.SNOWTRACE_API_KEY || "",
  [SupportedChainId.BSC_MAINNET]: process.env.BSCSCAN_API_KEY || "",
  [SupportedChainId.ETHEREUM_MAINNET]: process.env.ETHERSCAN_API_KEY || "",
  [SupportedChainId.OPTIMISM_MAINNET]: process.env.OPTIMISM_API_KEY || "",
  [SupportedChainId.POLYGON_MAINNET]: process.env.POLYGONSCAN_API_KEY || "",
  [SupportedChainId.POLYGON_MUMBAI]: process.env.POLYGONSCAN_API_KEY || "",
  [SupportedChainId.SEPOLIA]: process.env.ETHERSCAN_API_KEY || "",
};
