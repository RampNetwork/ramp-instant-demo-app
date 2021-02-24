import { EthTestNetsNames } from "./dynamicToken.types";
import {
  TEST_NET_MAPPING_OBJECT,
  ENV_MAPPING_OBJECT,
} from "./dynamicToken.consts";

const getDemoAppInstance = (): string =>
  process.env.REACT_APP_DEMO_APP_INSTANCE!;

const getAppNetworkName = () =>
  process.env.REACT_APP_NETWORK_NAME?.toLocaleLowerCase() as EthTestNetsNames;

const fallbackToEnvDefault = (): keyof typeof ENV_MAPPING_OBJECT => {
  const fallbackToken = ENV_MAPPING_OBJECT[getDemoAppInstance()];
  console.log(`Fallback to ${fallbackToken}`);
  return fallbackToken;
};

export const getTokenBaseOnTestNet = (
  testNetName: EthTestNetsNames = getAppNetworkName()
): string => {
  if (process.env.REACT_APP_DEMO_APP_INSTANCE === "local") {
    return fallbackToEnvDefault();
  }
  return TEST_NET_MAPPING_OBJECT[testNetName] ?? fallbackToEnvDefault();
};
console.log(getTokenBaseOnTestNet());
