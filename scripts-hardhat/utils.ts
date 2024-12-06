import { network } from "hardhat";
import { SupportedChainId } from "./chains";

export function getChainId(): SupportedChainId {
  return network.config.chainId as SupportedChainId;
}
