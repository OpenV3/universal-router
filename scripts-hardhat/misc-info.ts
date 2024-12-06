import { SupportedChainId } from "./chains";

type Address = `0x${string}`;

export interface MiscInfo {
  PERMIT2: Address;
  UnsupportedProtocol: Address;
  UniversalRouter: Address;
}

export const MISC_INFO: Partial<Record<SupportedChainId, MiscInfo>> = {
  [SupportedChainId.INK_SEPOLIA]: {
      PERMIT2: "0xE3709aB08457c8eDb0c0ee4c4F9193B39efC0769",
      UnsupportedProtocol: "0xa552bbF690436d6F16FF5aab14004792f551BeCb",
      UniversalRouter: "0xF8123977EbC310cB0B2f8B8E54F9feCEa5489A92",
  },
};
