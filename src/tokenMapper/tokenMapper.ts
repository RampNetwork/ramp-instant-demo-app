import { EthTestNetsNames } from "./tokenMapper.types";
import {
  TEST_NET_MAPPING_OBJECT,
  ENV_MAPPING_OBJECT,
} from "./tokenMapper.consts";

/*
  How should be mapped
  local,dev -> DUMMY,
  staging, prod -> DAI,
  staging-ropsten -> PLR,
  staging-kovan -> TEST
*/

const getDemoAppInstance = (): string =>
  process.env.REACT_APP_DEMO_APP_INSTANCE!;

const getAppNetworkName = () =>
  process.env.REACT_APP_NETWORK_NAME as EthTestNetsNames;

const fallbackToEnvDefault = (): typeof FALLBACK_TOKEN => {
  console.log(`Fallback to ${FALLBACK_TOKEN}`);
  return ENV_MAPPING_OBJECT[getDemoAppInstance()];
};

export const mapTokenTestNet = (
  testNetName: EthTestNetsNames = getAppNetworkName()
): string => TEST_NET_MAPPING_OBJECT[testNetName] ?? fallbackToEnvDefault();
